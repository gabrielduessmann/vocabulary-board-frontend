import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../modal/modal.service";
import {Vocabulary} from "../../vocabulary/vocabulary-word/vocabulary.model";
import {CardService} from "./card.service";
import {VocabularyWordService} from "../../vocabulary/vocabulary-word/vocabulary-word.service";
import { Router} from "@angular/router";
import {ColumnService} from "../column.service";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() vocab: Vocabulary;
  @Input() isVocabularyEditable: boolean = false;
  @Input() canMoveColumn: boolean = true;

  constructor(private modalService: ModalService,
              private cardService: CardService,
              private vocabularyWordService: VocabularyWordService,
              private columnService: ColumnService,
              private router: Router) { }

  ngOnInit(): void {
  }

  openModal() {
    let isInPracticeScreen: boolean = this.router.url === '/practice-vocabularies';
    if (this.canMoveColumn) {
      if (!isInPracticeScreen) {
        if (this.isVocabularyEditable) {
          if (this.vocab.id) this.router.navigate([`vocabulary/${this.vocab.id}`]);
        } else {
          this.cardService.setModalVocab(this.vocab);
          this.modalService.showModal();
        }
      }
    }
    
  }

  moveToNextColumn(vocabulary: Vocabulary) {
    this.vocabularyWordService.moveToNextColumn(vocabulary)
      .toPromise()
      .then( () => this.columnService.vocabularyAddedToColumn.next(vocabulary) )
      .catch(err => console.log(err))
      .finally();;
  }

}
