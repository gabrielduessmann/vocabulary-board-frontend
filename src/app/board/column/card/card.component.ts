import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {ModalService} from "../../modal/modal.service";


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() word: string;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    console.log("word recebida: "+this.word);
  }

  openModal() {
    this.modalService.showModal(this.word);
  }
}
