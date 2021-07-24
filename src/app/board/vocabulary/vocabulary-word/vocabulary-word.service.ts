import { Injectable } from '@angular/core';
import {Vocabulary} from "./vocabulary.model";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VocabularyWordService {

  words: Vocabulary[] = []
  wordsUpdateChange: Subject<Vocabulary> = new Subject<Vocabulary>();
  private url: string = "http://localhost:8080"; // local url

  constructor(private http: HttpClient) { }


  public addNewVocab(vocab: Vocabulary) {
    this.http.post<Vocabulary>(this.url+"/vocabulary", vocab)
      .toPromise()
      .then()
      .catch(err => {
        console.log(err);
      })
      .then(res => {
        if (res)
          this.wordsUpdateChange.next(res);
      }
    );
  }

  public getVocabs(): Observable<Vocabulary[]> {
    return this.http
      .get<Vocabulary[]>(this.url+"/vocabularies")
      .pipe(
        map(vocabularies => {
          return vocabularies.map(vocabulary => {
            return {...vocabulary}
          })
        })
      );
  }


}
