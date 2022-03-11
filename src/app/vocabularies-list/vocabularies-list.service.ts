import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vocabulary } from '../board/vocabulary/vocabulary-word/vocabulary.model';

@Injectable({
  providedIn: 'root'
})
export class VocabulariesListService {

  private url: string = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  public getVocabularies(): Observable<Vocabulary[]> {
    return this.http.get<Vocabulary[]>(`${this.url}/vocabularies`);
  }
}
