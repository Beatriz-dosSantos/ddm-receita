// types/recipe.ts
export interface Recipe {
  id: number;
  name: string;
  image: string;
  time: number;
  ingredients: string[];
  steps: string[];
  category: string;
}

export type Recipes = Recipe[];