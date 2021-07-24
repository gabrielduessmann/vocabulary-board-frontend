import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
import {CardService} from "../column/card/card.service";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  updateVocabulary: boolean = false;
  vocab: Vocabulary;

  constructor(private bsModalRef: BsModalRef, private cardService: CardService) {}

  ngOnInit() {
    this.vocab = this.cardService.getCacheVocab();
  }

  onSave() {
    this.updateVocabulary = true;
    this.onClose();
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnDestroy() {
    if (this.updateVocabulary) {
    }

  }


}
