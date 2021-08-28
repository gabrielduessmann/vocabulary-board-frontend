import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalComponent} from "./modal.component";
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: BsModalService) { }

  public showModal() {

    let bsModalRef: BsModalRef = this.modalService.show(ModalComponent);

  }
}
