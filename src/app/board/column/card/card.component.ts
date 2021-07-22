import {Component, Input, OnInit} from '@angular/core';
import {VocabularyWordModel} from "../../vocabulary/vocabulary-word/vocabulary-word.model";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() word: string;

  constructor() { }

  ngOnInit(): void {
    console.log("word recebida: "+this.word);
  }

}
