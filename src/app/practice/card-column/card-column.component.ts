import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../../board/column/column.model";
import {CardColumnService} from "./card-column.service";

@Component({
  selector: 'card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['../../board/column/card/card.component.css']
})
export class CardColumnComponent implements OnInit {

  @Input() column: Column;
  @Input() isArrowRightSide: boolean;
  @Input() index: number;

  constructor(
    private cardColumnService: CardColumnService
  ) { }

  ngOnInit(): void {
  }

  moveColumnToPractice(): void {
    this.cardColumnService.moveColumnToPractice.next(this.index);
  }

  removeColumnFromPractice(): void {
    this.cardColumnService.removeColumnFromPractice.next(this.index);
  }
}
