import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Column} from "../../board/column/column.model";

@Injectable({
  providedIn: 'root'
})
export class CardColumnService {

  public moveColumnToPractice = new Subject<number>();
  public removeColumnFromPractice = new Subject<number>();

  constructor() { }
}
