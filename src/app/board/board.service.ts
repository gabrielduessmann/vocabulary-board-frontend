import { Injectable } from '@angular/core';
import {Column} from "./column/column.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  public getAllBoardColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(this.url+"/columns/in-progress")
      .pipe(
        map(columns => {
          return columns.map(column => {
            return {...column}
          })
        })
      );

  }
}
