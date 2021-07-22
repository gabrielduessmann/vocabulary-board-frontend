import {Component, OnInit} from '@angular/core';
import {StatusEnum} from "../column/status.enum";

@Component({
  selector: 'vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

  vocabs: string[] = [];
  isEditMode: boolean = false;
  initialStatus: StatusEnum = StatusEnum.POOL;

  constructor() { }

  ngOnInit(): void {
  }



}
