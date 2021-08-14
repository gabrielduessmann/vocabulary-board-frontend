import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
import {StatusEnum} from "./status.enum";
import {SprintEnum} from "./sprint.enum";
import {Subscription} from "rxjs";
import {VocabularyWordService} from "../vocabulary/vocabulary-word/vocabulary-word.service";
import {Column} from "./column.model";

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

  constructor(private vocabularyWordService: VocabularyWordService) { }

  ngOnInit(): void {

    this.getAllVocabularies(this.column.id);
    this.subscribeToPoolColumn(this.column.status);;

  }

  getAllVocabularies(columnId: string) {
    this.vocabularyWordService
      .findVocabulariesByColumnId(columnId)
      .toPromise()
      .then(res => this.allVocabulary = res)
      .catch(err => console.log(err))
      .finally();
  }

  subscribeToPoolColumn(status: StatusEnum) {
    if (status.toString() == "POOL") {
      this.wordsUpdateSubscription = this.vocabularyWordService.wordsUpdateChange.subscribe(
        (vocab: Vocabulary) => {
          this.allVocabulary.push(vocab);
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.wordsUpdateSubscription)
      this.wordsUpdateSubscription.unsubscribe();
  }

}
