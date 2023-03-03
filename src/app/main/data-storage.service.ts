import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipe/recipe';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) { }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.
      put(
        'https://ng-course-recipe-book-bdd62-default-rtdb.firebaseio.com/recipes.json', 
        recipes)
      .subscribe(
      (response => {
        console.log(response);
      })
    );
  }

  // fetchRecipes() {
  //   return this.http.get<Recipe[]>(
  //     'https://ng-course-recipe-book-bdd62-default-rtdb.firebaseio.com/recipes.json', 
  //   )
  //   .pipe(
  //     map(recipes => {
  //       return recipes.map(recipe => {
  //         return {
  //           ...recipe,
  //           ingredients: recipe.ingredients ? recipe.ingredients : []
  //         };
  //       });
  //     }),
  //     tap(recipes => {
  //       this.recipeService.setRecipes(recipes);
  //     })
  //   );
  // }

}
