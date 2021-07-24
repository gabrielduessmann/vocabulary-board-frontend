import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VocabularyModel} from "../vocabulary/vocabulary-word/vocabulary.model";
import {StatusEnum} from "./status.enum";
import {SprintEnum} from "./sprint.enum";
import {Subscription} from "rxjs";
import {VocabularyWordService} from "../vocabulary/vocabulary-word/vocabulary-word.service";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnDestroy {

  @Input() sprint: SprintEnum;
  @Input() status: StatusEnum;
  @Input() title: string;
  allVocabulary: VocabularyModel[] = [];
  // wordsUpdateSubscription: Subject<VocabularyWordModel[]> = new Subject<VocabularyWordModel[]>();
  wordsUpdateSubscription: Subscription;

  constructor(private vocabularyWordService: VocabularyWordService) { }

  ngOnInit(): void {
    this.allVocabulary = [
      new VocabularyModel("hello", ""),
      new VocabularyModel("bye", ""),
      new VocabularyModel("never mind", ""),
    ];
    this.getAllVocabularyWords(this.status, this.sprint);
  }

  getAllVocabularyWords(status: StatusEnum, sprint: SprintEnum) {
    if (status == StatusEnum.POOL) {
      this.wordsUpdateSubscription = this.vocabularyWordService.wordsUpdateChange.subscribe(
        (vocab: VocabularyModel[]) => {
          this.allVocabulary = vocab;
        }
      );
    }
    else {
      this.allVocabulary = [
        new VocabularyModel("hello", ""),
        new VocabularyModel("bye", ""),
        new VocabularyModel("never mind", ""),
        new VocabularyModel("computer", ""),
        new VocabularyModel("body", ""),
        new VocabularyModel("hello", ""),
        new VocabularyModel("car", ""),
        new VocabularyModel("to develop", ""),
        new VocabularyModel("to drive", ""),
        new VocabularyModel("bye", ""),
        new VocabularyModel("never mind", ""),
        new VocabularyModel("hello", ""),
        new VocabularyModel("bye", ""),
        new VocabularyModel("never mind", ""),
        new VocabularyModel("hello", ""),
        new VocabularyModel("bye", ""),
        new VocabularyModel("never mind", ""),
        new VocabularyModel("hello", ""),
        new VocabularyModel("bye", ""),
        new VocabularyModel("never mind", ""),
        new VocabularyModel("hello", ""),
        new VocabularyModel("bye", ""),
        new VocabularyModel("never mind", ""),
      ];
    }
  }

  ngOnDestroy() {
    if (this.wordsUpdateSubscription)
      this.wordsUpdateSubscription.unsubscribe();
  }

}
