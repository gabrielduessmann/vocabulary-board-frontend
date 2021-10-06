import { Column } from "../../column/column.model";

export class Vocabulary {
  public id: string
  public word: string;
  public description: string
  public creationDate: Date
  public column: Column

  constructor(word: string, description: string, date: Date) {
    this.word = word;
    this.description = description;
    this.creationDate = date;
  }
}
