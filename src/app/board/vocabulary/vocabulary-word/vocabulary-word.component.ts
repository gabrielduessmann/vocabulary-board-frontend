import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VocabularyWordService} from "./vocabulary-word.service";
import {VocabularyWordModel} from "./vocabulary-word.model";

@Component({
  selector: 'vocabulary-word',
  templateUrl: './vocabulary-word.component.html',
  styleUrls: ['./vocabulary-word.component.css']
})
export class VocabularyWordComponent implements OnInit {



  constructor(private vocabularyWordService: VocabularyWordService) { }

  vocabularyWordForm!: FormGroup;

  isEditMode: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let word: string = '';
    let description: string = '';
    this.vocabularyWordForm = new FormGroup({
      'word': new FormControl(word, Validators.required),
      'description': new FormControl(description, Validators.maxLength(200))
    });
  }

  onSubmit() {
    let word: VocabularyWordModel = new VocabularyWordModel(
      this.vocabularyWordForm.value.word,
      this.vocabularyWordForm.value.description
    );
    this.vocabularyWordService.addNewWord(word);
  }

}
