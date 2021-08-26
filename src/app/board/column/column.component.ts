import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
import {StatusEnum} from "./status.enum";
import {SprintEnum} from "./sprint.enum";
import {Subscription} from "rxjs";
import {VocabularyWordService} from "../vocabulary/vocabulary-word/vocabulary-word.service";
import {Column} from "./column.model";
import {ColumnService} from "./column.service";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnDestroy {

  @Input() column: Column;
  @Input() isVocabularyEditable: boolean;
  allVocabulary: Vocabulary[] = [];
  wordsUpdateSubscription: Subscription;

  constructor(private vocabularyWordService: VocabularyWordService,
              private columnService: ColumnService) { }

  ngOnInit(): void {
    this.getAllVocabularies(this.column.id);
    this.subscribeToWhenVocabularyIdAddedToColumn();
  }

  getAllVocabularies(columnId: string) {
    this.vocabularyWordService
      .findVocabulariesByColumnId(columnId)
      .toPromise()
      .then(res => this.allVocabulary = res)
      .catch(err => console.log(err))
      .finally();
  }

  subscribeToWhenVocabularyIdAddedToColumn() {
    this.columnService.vocabularyAddedToColumn
      .subscribe(() => {
        this.getAllVocabularies(this.column.id);
      })
  }

  canMoveColumn(): boolean {
      return this.column.status.toString() !== 'DONE';
  }

  ngOnDestroy() {
    if (this.wordsUpdateSubscription)
      this.wordsUpdateSubscription.unsubscribe();
  }

}
