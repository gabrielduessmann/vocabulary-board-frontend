import { Injectable } from '@angular/core';
import {VocabularyModel} from "./vocabulary.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VocabularyWordService {

  words: VocabularyModel[] = []
  wordsUpdateChange: Subject<VocabularyModel[]> = new Subject<VocabularyModel[]>();

  constructor() { }

  addNewWord(newWord: VocabularyModel) {
    this.words.push(newWord);
    console.log(this.words);
    this.wordsUpdateChange.next(this.words.slice());
  }

}
