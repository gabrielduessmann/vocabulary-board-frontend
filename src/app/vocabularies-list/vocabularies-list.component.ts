import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../board/vocabulary/vocabulary-word/vocabulary.model';
import { VocabulariesListService } from './vocabularies-list.service';

@Component({
  selector: 'app-vocabularies-list',
  templateUrl: './vocabularies-list.component.html',
  styleUrls: ['./vocabularies-list.component.css']
})
export class VocabulariesListComponent implements OnInit {

  vocabularies: Vocabulary[];

  constructor(
    private vocabulariesListService: VocabulariesListService
  ) { }

  ngOnInit(): void {
    this.getVocabularies();
  }

  getVocabularies(): void {
    this.vocabulariesListService.getVocabularies().subscribe(
      (res) => {
        this.vocabularies = res
      }
    )
  }

}
