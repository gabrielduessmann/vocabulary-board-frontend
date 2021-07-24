export class Vocabulary {
  public id: string
  public word: string;
  public description: string

  constructor(word: string, description: string) {
    this.word = word;
    this.description = description;
  }
}
