import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";
import {CardService} from "../column/card/card.service";
import {Comment} from "../vocabulary/comment/comment.model";
import {CommentService} from "../vocabulary/comment/comment.service";
import {catchError} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  updateVocabulary: boolean = false;
  vocab: Vocabulary;
  comments: Comment[] = [];
  addRow: boolean = false;
  newCommentFormGroup: FormGroup = this.getNewCommentFormGroup();

  constructor(
    private bsModalRef: BsModalRef,
    private cardService: CardService,
    private commentService: CommentService) {}

  ngOnInit() {
    this.vocab = this.cardService.getModalVocab();
    console.log(this.vocab);
    this.commentService.findVocabularyComments(this.vocab.id)
      .toPromise()
      .then(res => this.comments = res)
      .catch(err => console.log(err));
    console.log(this.comments);
  }

  getNewCommentFormGroup(): FormGroup {
    return new FormGroup({
      'comment': new FormControl(undefined, Validators.required)
    })
  }

  addCommentRow(): void {
    if (this.addRow) this.saveComment();
    else this.addRow = true;
  }

  deleteCommentRow(): void {
    this.addRow = false;
    this.newCommentFormGroup.reset();
  }

  saveComment(): void {
    let form: FormGroup = this.newCommentFormGroup
    if (form.valid) {
      let comment: Comment = new Comment(
        form.value.comment,
        new Date(),
        this.vocab
      );
      this.commentService.saveComment(comment)
        .subscribe(
          res => this.comments.splice(0, 0, res),
          err => console.log(err),
          () => form.reset()
        );
    }
  }


  onClose() {
    this.bsModalRef.hide();
  }


  ngOnDestroy() {
    if (this.updateVocabulary) {
    }

  }


}
