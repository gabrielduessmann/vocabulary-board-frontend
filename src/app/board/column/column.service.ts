import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  vocabularyAddedToColumn: Subject<Vocabulary> = new Subject<Vocabulary>();

  constructor() { }
}
