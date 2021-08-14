import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VocabularyComponent} from "../board/vocabulary/vocabulary.component";
import {BoardComponent} from "../board/board.component";

const routes: Routes = [
  {path: '', redirectTo: '/board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent},
  {path: 'vocabulary', component: VocabularyComponent},
  {path: 'vocabulary/:id', component: VocabularyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class RoutingModule {

}
