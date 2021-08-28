import { Component, OnInit } from '@angular/core';
import {Column} from "./column/column.model";
import {ColumnService} from "./column/column.service";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  columns: Column[];

  constructor(private columnsService: ColumnService) { }

  ngOnInit(): void {
    // get all columns
    this.getAllColumns();
  }

  getAllColumns() {
    this.columnsService.getAllBoardColumns()
      .toPromise()
      .then(columns => this.columns = columns )
      .catch(err => console.log(err))
      .finally();

  }

}
