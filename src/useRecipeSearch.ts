import { useQuery } from "@tanstack/react-query";

export interface RecipesResponse {
	recipes: Recipe[];
}

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

const useRecipeSearch = (cuisine: string, intolerance: string, type: string) => useQuery(["recipeSearch", cuisine, intolerance, type], async () => {
	const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&intolerances=${intolerance}&type=${type}`;
	const res = await fetch(url, {
		headers: {
			"x-api-key": "a5a34ba98616493eb4f08755e5543e7d"
		}
	});
	const recipeResponse: RecipesResponse = await res.json();
	return recipeResponse.recipes;
});

export default useRecipeSearch;