import {StatusEnum} from "./status.enum";
import {Vocabulary} from "../vocabulary/vocabulary-word/vocabulary.model";

export class Column {
  public id: string;
  public title: string;
  public nextUpdate: Date;
  public status: StatusEnum;
  public sprintOrder: number;
  public vocabularies: Vocabulary[];

  constructor() {
  }
}
