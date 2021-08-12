import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../modal/modal.service";
import {Vocabulary} from "../../vocabulary/vocabulary-word/vocabulary.model";
import {CardService} from "./card.service";
import {VocabularyWordService} from "../../vocabulary/vocabulary-word/vocabulary-word.service";


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() vocab: Vocabulary;

  constructor(private modalService: ModalService, private cardService: CardService,
              private vocabularyWordService: VocabularyWordService) { }

  ngOnInit(): void {

  }

  openModal() {
    this.cardService.setModalVocab(this.vocab);
    this.modalService.showModal();
  }

  moveToNextColumn() {
    this.vocabularyWordService.moveToNextColumn(this.vocab);
  }

}
