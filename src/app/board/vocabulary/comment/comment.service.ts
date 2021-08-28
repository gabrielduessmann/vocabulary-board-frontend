import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Comment} from "./comment.model";

@Injectable()
export class CommentService {

  private url: string = "http://localhost:8080"; // local url
  comments: Comment[];

  constructor(private http: HttpClient) {}

  public findVocabularyComments(vocabularyId: string) {
    return this.http.get<Comment[]>(`${this.url}/vocabulary/${vocabularyId}/comments`);
  }

  public saveComment(comment: Comment) {
    return this.http.post<Comment>(`${this.url}/comment`, comment);
  }
}
