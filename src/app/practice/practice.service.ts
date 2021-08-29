import { Injectable } from '@angular/core';
import {Column} from "../board/column/column.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  practiceColumns: Column[] = [];
  practiceColumnChanges = new Subject<Column>();

  constructor() { }

}
