// Layouts
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListComponent} from "./list/list.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import { ProduitComponent } from "./produit/produit.component";
import { UserComponent } from "./user/user.component";

export const routes: Routes = [

  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'formulaire',
    component: FormulaireComponent
  },
  {
    path: 'product',
    component: ProduitComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRouting {
}
