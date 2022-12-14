import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
import {Subject, Subscription} from "rxjs";
import {VocabularyWordService} from "../vocabulary/vocabulary-word/vocabulary-word.service";
import {Column} from "./column.model";
import {ColumnService} from "./column.service";
import {PracticeService} from "../../practice/practice.service";
import {Router} from "@angular/router";
import { StatusEnum } from './status.enum';

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
  practiceColumnChange = new Subject<Column>();
  isInPracticeScreen: boolean = this.router.url === '/practice-vocabularies'

  constructor(private vocabularyWordService: VocabularyWordService,
              private columnService: ColumnService,
              private practiceService: PracticeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllVocabularies(this.column.id);
    this.subscribeToWhenVocabularyIdAddedToColumn();
    this.subscribeToPracticeColumnChange();
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

  subscribeToPracticeColumnChange(): void {
    this.practiceService.practiceColumnChanges.subscribe(
      newColumn => this.getAllVocabularies(newColumn.id)
    )
  }

  canMoveColumn(): boolean {
      return this.column.status.toString() !== 'DONE' && !this.isInPracticeScreen;
  }

  getColumnStatusColor(): string {
    var color: string = 'black';
    switch (this.column.status) {
      case StatusEnum.IN_PROGRESS:
          color = 'green';
          break;
      case StatusEnum.PAUSED:
          color = 'red';
          break;
    }
    return color
  }

  ngOnDestroy() {
    if (this.wordsUpdateSubscription)
      this.wordsUpdateSubscription.unsubscribe();
  }

}
