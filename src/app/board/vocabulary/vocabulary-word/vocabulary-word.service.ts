import { Injectable } from '@angular/core';
import {VocabularyWordModel} from "./vocabulary-word.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VocabularyWordService {

  words: VocabularyWordModel[] = []
  wordsUpdateChange: Subject<VocabularyWordModel[]> = new Subject<VocabularyWordModel[]>();

  constructor() { }

  addNewWord(newWord: VocabularyWordModel) {
    this.words.push(newWord);
    console.log(this.words);
    this.wordsUpdateChange.next(this.words.slice());
  }

}
