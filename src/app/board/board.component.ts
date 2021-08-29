import { Component, OnInit } from '@angular/core';
import {Column} from "./column/column.model";
import {ColumnService} from "./column/column.service";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  allColumns: Column[];
  showColumns: Column[];
  columnsOnlyInProgress: boolean = false;

  constructor(private columnsService: ColumnService) { }

  ngOnInit(): void {
    this.getAllColumns();
  }

  getAllColumns() {
    this.columnsService.getAllBoardColumns()
      .toPromise()
      .then(columns => {
        this.allColumns = columns;
        this.showColumns = columns;
      } )
      .catch(err => console.log(err))
      .finally();
  }

  showColumnsOnlyInProgress() {
    if (this.columnsOnlyInProgress) this.showColumns = this.allColumns;
    else this.showColumns = this.allColumns.filter(column => column.status.toString() === "IN_PROGRESS");
    this.columnsOnlyInProgress = !this.columnsOnlyInProgress;
  }

}
