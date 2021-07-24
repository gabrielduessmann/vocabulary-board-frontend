import { Injectable } from '@angular/core';
import {Vocabulary} from "./vocabulary.model";
import {Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VocabularyWordService {

  words: Vocabulary[] = []
  wordsUpdateChange: Subject<Vocabulary[]> = new Subject<Vocabulary[]>();
  private url: string = "http://localhost:8080"; // local url

  constructor(private http: HttpClient) { }


  addNewVocab(vocab: Vocabulary) {
    this.http.post<Vocabulary>(this.url+"/vocabulary", vocab, )
      .subscribe(res => {
        this.words.push(res);
        this.wordsUpdateChange.next(this.words.slice());
      });
  }


}
