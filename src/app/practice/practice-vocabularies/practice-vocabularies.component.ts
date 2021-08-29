import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Vocabulary} from "../../board/vocabulary/vocabulary-word/vocabulary.model";
import {PracticeService} from "../practice.service";
import {VocabularyWordService} from "../../board/vocabulary/vocabulary-word/vocabulary-word.service";
import {CommentService} from "../../board/vocabulary/comment/comment.service";
import {Comment} from "../../board/vocabulary/comment/comment.model";
import {Router} from "@angular/router";

@Component({
  selector: 'practice-vocabularies',
  templateUrl: './practice-vocabularies.component.html'
})
export class PracticeVocabulariesComponent implements OnInit {

  commentFormGroup: FormGroup = this.getCommentFormGroup();
  vocabularies: Vocabulary[] = [];
  comments: Comment[] = [];

  constructor(
    private practiceService: PracticeService,
    private vocabularyWordService: VocabularyWordService,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVocabularies();
  }

  getCommentFormGroup(): FormGroup {
    return new FormGroup(
      {'comment': new FormControl(undefined, Validators.required)}
    );
  }

  getVocabularies(): void {
    this.vocabularyWordService.findVocabulariesByColumnId(this.practiceService.practiceColumns[0].id)
      .subscribe(
        res => {
          this.vocabularies = res;
          this.updateComments();
        }
      );
  }

  update(): void {
    if (this.vocabularies.length > 0) this.updateComments();
    else if (this.practiceService.practiceColumns.length > 1) this.updateColumn();
    else this.finishPractice();
  }

  updateComments(): void {
    this.commentService.findVocabularyComments(this.vocabularies[0].id)
      .subscribe(
        res => this.comments = res,
      );
  }

  updateColumn(): void {
    this.practiceService.practiceColumns.splice(0, 1);
    this.practiceService.practiceColumnChanges.next(this.practiceService.practiceColumns[0]);
    this.getVocabularies();
  }

  finishPractice(): void {
    alert("You just finished your practice. Come back later!");
    this.router.navigate(['board']);
  }


  saveComment(): void {
    if(this.commentFormGroup.valid) {
      let comment: Comment = new Comment(this.commentFormGroup.value.comment, new Date(), this.vocabularies[0]);
      this.commentService.saveComment(comment)
        .subscribe(
          res => {
            this.comments.splice(0, 0, res);
            this.vocabularies.splice(0 ,1);
            this.update();
          },
          err => console.log(err),
          () => this.commentFormGroup.reset()
        );
    }
  }



}
