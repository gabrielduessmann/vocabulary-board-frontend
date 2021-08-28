import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VocabularyComponent } from './board/vocabulary/vocabulary.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColumnComponent } from './board/column/column.component';
import { CardComponent } from './board/column/card/card.component';
import {BoardComponent} from "./board/board.component";
import {RoutingModule} from "./routing/routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VocabularyWordComponent } from './board/vocabulary/vocabulary-word/vocabulary-word.component';
import { ModalComponent } from './board/modal/modal.component';
import {BsModalService} from "ngx-bootstrap/modal";
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./board/vocabulary/comment/comment.service";


@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    HeaderComponent,
    ColumnComponent,
    CardComponent,
    BoardComponent,
    VocabularyWordComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BsModalService, CommentService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
