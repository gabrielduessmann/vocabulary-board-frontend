import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "./vocabulary.service";
import {Column} from "../column/column.model";

@Component({
  selector: 'vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

  vocabs: string[] = [];
  columns: Column[];

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit(): void {
    this.getAllBoardColumns();
  }

  getAllBoardColumns() {
    this.vocabularyService.getAllColumnsNotInBoard()
      .toPromise()
      .then(columns => this.columns = columns)
      .catch(err => console.log(err))
      .finally();
  }
}
