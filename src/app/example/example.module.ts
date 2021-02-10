import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {ExampleRouting} from "./example.routing";
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
  import { MatIconModule } from '@angular/material/icon';
  import {MatButtonModule} from '@angular/material/button';
import { UserComponent } from './user/user.component';
import { AllProductComponent } from './all-product/all-product.component';

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
  declarations: [ListComponent, FormulaireComponent,ProduitComponent, UserComponent, AllProductComponent]
})
export class ExampleModule {
}
