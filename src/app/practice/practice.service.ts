import { Injectable } from '@angular/core';
import {Column} from "../board/column/column.model";

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor() { }

  public practiceVocabularies(columns: Column[]): void {
    columns.forEach(column => {

    })
  }
}
