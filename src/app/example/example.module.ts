import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {ExampleRouting} from "./example.routing";
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from "@angular/material";
  import { MatIconModule } from '@angular/material/icon';
  import {MatButtonModule} from '@angular/material/button';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    ExampleRouting,
    SharedModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule


  ],
  declarations: [ListComponent, FormulaireComponent,ProduitComponent, UserComponent]
})
export class ExampleModule {
}
