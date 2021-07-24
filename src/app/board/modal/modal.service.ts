import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalComponent} from "./modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: BsModalService) { }

  public showModal(title: string) {
    let bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
    bsModalRef.content.title = title;
  }
}
