import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
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
  allVocabulary: Vocabulary[] = [];
  // wordsUpdateSubscription: Subject<VocabularyWordModel[]> = new Subject<VocabularyWordModel[]>();
  wordsUpdateSubscription: Subscription;

  constructor(private vocabularyWordService: VocabularyWordService) { }

  ngOnInit(): void {
    this.allVocabulary = [
      new Vocabulary("hello", "2"),
      new Vocabulary("bye", "3"),
      new Vocabulary("never mind", "3"),
    ];
    this.getAllVocabularyWords(this.status, this.sprint);
  }

  getAllVocabularyWords(status: StatusEnum, sprint: SprintEnum) {
    if (status == StatusEnum.POOL) {
      this.wordsUpdateSubscription = this.vocabularyWordService.wordsUpdateChange.subscribe(
        (vocab: Vocabulary[]) => {
          this.allVocabulary = vocab;
        }
      );
    }
    else {
      this.allVocabulary = [
        new Vocabulary("hello", ""),
        new Vocabulary("bye", ""),
        new Vocabulary("never mind", ""),
        new Vocabulary("computer", ""),
        new Vocabulary("body", ""),
        new Vocabulary("hello", ""),
        new Vocabulary("car", ""),
        new Vocabulary("to develop", ""),
        new Vocabulary("to drive", ""),
        new Vocabulary("bye", ""),
        new Vocabulary("never mind", ""),
        new Vocabulary("hello", ""),
        new Vocabulary("bye", ""),
        new Vocabulary("never mind", ""),
        new Vocabulary("hello", ""),
        new Vocabulary("bye", ""),
        new Vocabulary("never mind", ""),
        new Vocabulary("hello", ""),
        new Vocabulary("bye", ""),
        new Vocabulary("never mind", ""),
        new Vocabulary("hello", ""),
        new Vocabulary("bye", ""),
        new Vocabulary("never mind", ""),
      ];
    }
  }

  ngOnDestroy() {
    if (this.wordsUpdateSubscription)
      this.wordsUpdateSubscription.unsubscribe();
  }

}
