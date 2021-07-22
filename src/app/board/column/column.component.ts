import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VocabularyWordModel} from "../vocabulary/vocabulary-word/vocabulary-word.model";
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
  allVocabulary: VocabularyWordModel[] = [];
  // wordsUpdateSubscription: Subject<VocabularyWordModel[]> = new Subject<VocabularyWordModel[]>();
  wordsUpdateSubscription: Subscription;

  constructor(private vocabularyWordService: VocabularyWordService) { }

  ngOnInit(): void {
    this.allVocabulary = [
      new VocabularyWordModel("hello", ""),
      new VocabularyWordModel("bye", ""),
      new VocabularyWordModel("never mind", ""),
    ];
    this.getAllVocabularyWords(this.status, this.sprint);
  }

  getAllVocabularyWords(status: StatusEnum, sprint: SprintEnum) {
    if (status == StatusEnum.POOL) {
      this.wordsUpdateSubscription = this.vocabularyWordService.wordsUpdateChange.subscribe(
        (vocab: VocabularyWordModel[]) => {
          this.allVocabulary = vocab;
          console.log("All vocab: "+this.allVocabulary);
        }
      );
    }
    else {
      this.allVocabulary = [];
    }
  }

  ngOnDestroy() {
    if (this.wordsUpdateSubscription)
      this.wordsUpdateSubscription.unsubscribe();
  }

}
