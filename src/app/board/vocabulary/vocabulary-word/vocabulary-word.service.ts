import { Injectable } from '@angular/core';
import {Vocabulary} from "./vocabulary.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VocabularyWordService {

  words: Vocabulary[] = []
  wordsUpdateChange: Subject<Vocabulary[]> = new Subject<Vocabulary[]>();

  constructor() { }

  addNewWord(newWord: Vocabulary) {
    this.words.push(newWord);
    console.log(this.words);
    this.wordsUpdateChange.next(this.words.slice());
  }

}
