import { Component, OnInit } from '@angular/core';
import {Column} from "../board/column/column.model";
import {ColumnService} from "../board/column/column.service";
import {CardColumnService} from "./card-column/card-column.service";
import {PracticeService} from "./practice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})
export class PracticeComponent implements OnInit {

  columns: Column[] = [];
  columnsToPractice: Column[] = [];

  constructor(
    private columnService: ColumnService,
    private cardColumnService: CardColumnService,
    private practiceService: PracticeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllColumnsInProgressToPractice();
    this.subscribeToColumnChanges();
  }

  getAllColumnsInProgressToPractice(): void {
    this.columnService.getAllColumnsInProgressToPractice()
      .subscribe(
        res => this.columns = res,
        err => console.log(err)
      );
  }

  subscribeToColumnChanges(): void {
    this.cardColumnService.moveColumnToPractice.subscribe(index => {
      this.columnsToPractice.splice(0, 0, this.columns[index]);
      this.columns.splice(index, 1);
    });

    this.cardColumnService.removeColumnFromPractice.subscribe(index => {
      this.columns.splice(0, 0, this.columnsToPractice[index]);
      this.columnsToPractice.splice(index, 1);
    });
  }

  practiceColumns(columns: Column[]): void {
    this.practiceService.practiceColumns = columns;
    this.router.navigate(['practice-vocabularies']);
  }


}
