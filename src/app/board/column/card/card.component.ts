import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../modal/modal.service";
import {Vocabulary} from "../../vocabulary/vocabulary-word/vocabulary.model";
import {CardService} from "./card.service";
import {VocabularyWordService} from "../../vocabulary/vocabulary-word/vocabulary-word.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() vocab: Vocabulary;
  @Input() isVocabularyEditable: boolean = false;
  cardStyle: Record<string, string>;

  constructor(private modalService: ModalService,
              private cardService: CardService,
              private vocabularyWordService: VocabularyWordService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setCardStyle();
  }

  openModal() {
    if (this.isVocabularyEditable) {
      /*
      this.cardService.setModalVocab(this.vocab);
      this.modalService.showModal();

       */
      this.router.navigate([`vocabulary/${this.vocab.id}`]);
    }
  }

  moveToNextColumn() {
    this.vocabularyWordService.moveToNextColumn(this.vocab);
  }

  setCardStyle() {
    if (this.isVocabularyEditable) {
      this.cardStyle = {
        'cursor': 'pointer'
      }
    } else {
      this.cardStyle = {};
    }
  }
}
