import { Component, OnInit } from '@angular/core';
import {BoardService} from "./board.service";
import {Column} from "./column/column.model";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  columns: Column[];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    // get all columns
    this.getAllColumns();
  }

  getAllColumns() {
    this.boardService.getAllBoardColumns()
      .toPromise()
      .then(columns => this.columns = columns )
      .catch(err => console.log(err))
      .finally();

  }

}
