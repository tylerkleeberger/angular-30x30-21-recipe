import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../main/shared.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-detail/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
    ],
    imports: [
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
    ],
    exports: [

    ]
})
export class RecipesModule {

}