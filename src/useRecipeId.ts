import { useQuery } from "@tanstack/react-query";

export interface RecipeResponse {
	preparationMinutes: number; 
	cookingMinutes: number;
	title: string;
	instructions: string;
	extendedIngredients: Ingredient[];
}

export interface Ingredient {
	image: string;
	original: string;
}

const useRecipeId = (id: string) => useQuery(["recipeId", id], async () => {
	const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=9e1a0ca5a370405f91122c99ffa29aa9`;
	const res = await fetch(url);
	const recipeInformation: RecipeResponse = await res.json();
	return recipeInformation;
});

export default useRecipeId;