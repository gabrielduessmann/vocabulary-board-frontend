import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
import {Column} from "./column.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  private url: string = "http://localhost:8080";
  vocabularyAddedToColumn: Subject<Vocabulary> = new Subject<Vocabulary>();

  constructor(private http:HttpClient) {
  }

  public getAllBoardColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(this.url+"/columns/in-board")
      .pipe(
        map(columns => {
          return columns.map(column => {
            return {...column}
          })
        })
      );
  }

  public getAllBoardColumnsInProgress(): Observable<Column[]> {
    return this.http.get<Column[]>(this.url+"/columns/in-progress")
      .pipe(
        map(columns => {
          return columns.map(column => {
            return {...column}
          })
        })
      );
  }

  public getAllColumnsInProgressToPractice(): Observable<Column[]> {
    return this.http.get<Column[]>(this.url+"/columns/in-progress-practice")
  }
}
