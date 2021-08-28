import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Column} from "../column/column.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  private URL: string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getAllColumnsNotInBoard(): Observable<Column[]> {
    return this.http.get<Column[]>(this.URL+"/columns/not-in-board")
      .pipe(
        map(columns => {
          return columns.map(column => {
            return {...column}
          })
        })
      );
  }

}
