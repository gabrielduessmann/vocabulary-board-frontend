export class Vocabulary {
  public id: string
  public word: string;
  public description: string
  public creationDate: Date

  constructor(word: string, description: string, date: Date) {
    this.word = word;
    this.description = description;
    this.creationDate = date;
  }
}
