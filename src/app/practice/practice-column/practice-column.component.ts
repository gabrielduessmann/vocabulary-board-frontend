import {Component, OnInit} from '@angular/core';
import {PracticeService} from "../practice.service";
import {Column} from "../../board/column/column.model";
import {Router} from "@angular/router";
import {Vocabulary} from "../../board/vocabulary/vocabulary-word/vocabulary.model";

@Component({
  selector: 'practice-column',
  templateUrl: './practice-column.component.html'
})
export class PracticeColumnComponent implements OnInit {

  column: Column = this.practiceService.practiceColumns[0];
  vocabularies: Vocabulary[] = [];

  constructor(
    private practiceService: PracticeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verifyIfAccessIsValid();
    this.subscribeToColumnChanges();
  }

  verifyIfAccessIsValid(): void {
    if (this.practiceService.practiceColumns.length == 0) this.router.navigate(['practice']);
  }

  subscribeToColumnChanges(): void {
    this.practiceService.practiceColumnChanges.subscribe(
      newColumn => this.column = newColumn
    )
  }
}
