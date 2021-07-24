import { Injectable } from '@angular/core';
import {Vocabulary} from "../../vocabulary/vocabulary-word/vocabulary.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private vocab: Vocabulary;

  constructor() { }

  public setCacheVocab(vocab: Vocabulary) {
    this.vocab = vocab;
  }

  public getCacheVocab(): Vocabulary {
    return this.vocab;
  }

}
