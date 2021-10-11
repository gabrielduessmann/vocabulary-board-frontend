import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VocabularyComponent} from "../board/vocabulary/vocabulary.component";
import {BoardComponent} from "../board/board.component";
import {PracticeComponent} from "../practice/practice.component";
import {PracticeColumnComponent} from "../practice/practice-column/practice-column.component";
import { VocabulariesListComponent } from "../vocabularies-list/vocabularies-list.component";
import { ConfigurationComponent } from "../configuration/configuration.component";

const routes: Routes = [
  {path: '', redirectTo: '/board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent},
  {path: 'vocabulary', component: VocabularyComponent},
  {path: 'vocabulary/:id', component: VocabularyComponent},
  {path: 'practice', component: PracticeComponent},
  {path: 'practice-vocabularies', component: PracticeColumnComponent},
  {path: 'vocabularies-list', component: VocabulariesListComponent},
  {path: 'configuration', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class RoutingModule {

}
