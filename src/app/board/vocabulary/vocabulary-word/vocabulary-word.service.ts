import { Injectable } from '@angular/core';
import {Vocabulary} from "./vocabulary.model";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from 'rxjs/operators'
import {ColumnService} from "../../column/column.service";

@Injectable({
  providedIn: 'root'
})
export class VocabularyWordService {

  words: Vocabulary[] = []
  wordsUpdateChange: Subject<Vocabulary> = new Subject<Vocabulary>();
  private url: string = "http://localhost:8080"; // local url

  constructor(private http: HttpClient,
              private columnService: ColumnService) { }


  public addNewVocabulary(vocabulary: Vocabulary): void {
    this.http.post<Vocabulary>(this.url+"/vocabulary", vocabulary)
      .toPromise()
      .then(res => {
          this.columnService.vocabularyAddedToColumn.next(res)
      })
      .catch(err => {
        console.log(err);
      })
      .finally();
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

  public findVocabularyById(id:string): Observable<Vocabulary> {
    return this.http
      .get<Vocabulary>(`${this.url}/vocabulary/${id}`)
      .pipe();
  }

  public findVocabulariesByColumnId(columnId: string): Observable<Vocabulary[]>{
    return this.http
      .get<Vocabulary[]>(this.url+"/vocabularies/column/"+columnId)
      .pipe(
        map(vocabularies => {
          return vocabularies.map(vocabulary => {
            return {...vocabulary}
          })
        })
      );
  }

  public moveToNextColumn(vocabulary: Vocabulary): Observable<Vocabulary> {
    return this.http.put<Vocabulary>(`${this.url}/vocabulary/moveToNextColumn`, vocabulary)
  }

}
