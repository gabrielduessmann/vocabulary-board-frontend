import {Vocabulary} from "../vocabulary-word/vocabulary.model";

export class Comment {
  public id: string;
  public comment: string;
  public commentedDate: Date;
  public vocabulary: Vocabulary

  constructor(comment: string, commentedDate: Date, vocabulary: Vocabulary) {
    this.comment = comment;
    this.commentedDate = commentedDate,
    this.vocabulary = vocabulary
  }
}
