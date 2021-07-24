import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title: string;
  updateVocabulary: boolean = false;

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
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
