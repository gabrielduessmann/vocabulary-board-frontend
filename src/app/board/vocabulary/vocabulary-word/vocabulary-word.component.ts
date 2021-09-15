import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VocabularyWordService} from "./vocabulary-word.service";
import {Vocabulary} from "./vocabulary.model";
import {VocabularyService} from "../vocabulary.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'vocabulary-word',
  templateUrl: './vocabulary-word.component.html',
  styleUrls: ['./vocabulary-word.component.css']
})
export class VocabularyWordComponent implements OnInit {

  constructor(private vocabularyWordService: VocabularyWordService,
              private vocabularyService: VocabularyService,
              private router: Router,
              private route: ActivatedRoute) { }

  vocabularyWordForm!: FormGroup;
  isEditMode: boolean = false;
  vocabularyId: string;

  ngOnInit(): void {
    this.initForm();
    this.subscribeToVocabularyFormChanges();
  }

  initForm() {
    let word: string = '';
    let description: string = '';
    this.vocabularyWordForm = new FormGroup({
      'word': new FormControl(word, Validators.required),
      'description': new FormControl(description, Validators.maxLength(200))
    });
  }

  setValuesToForm(vocabulary: Vocabulary) {
    this.vocabularyWordForm.setValue({
      word: vocabulary.word,
      description: vocabulary.description
    })
  }

  subscribeToVocabularyFormChanges() {
    this.route.paramMap
      .subscribe((param: ParamMap) => {
          let vocabularyId: string = param.get("id") || '';
          if (vocabularyId) {
            this.vocabularyWordService.findVocabularyById(vocabularyId)
              .toPromise()
              .then((vocabulary: Vocabulary) => {
                this.isEditMode = true;
                this.vocabularyId = vocabulary.id;
                this.setValuesToForm(vocabulary);
              })
              .catch(err => console.log(err))
              .finally();
          }
    });
  }

  onSubmit() {
    let word: Vocabulary = new Vocabulary(
      this.vocabularyWordForm.value.word,
      this.vocabularyWordForm.value.description,
      new Date()
    );
    if (this.vocabularyId) {
      word.id = this.vocabularyId;
    }
    this.vocabularyWordService.addNewVocabulary(word);
    this.onCancel();
  }

  onCancel() {
    this.isEditMode = false;
    this.vocabularyWordForm.reset();
    this.router.navigate(['vocabulary']);
  }
}
