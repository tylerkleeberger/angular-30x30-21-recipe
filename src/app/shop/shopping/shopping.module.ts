import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from '../shopping-list-editor/shopping-list-editor.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/main/shared.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditorComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([])
  ]
})
export class ShoppingModule { }
