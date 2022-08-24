import { useQuery } from "@tanstack/react-query";

export interface RecipeResponse {
	recipes: Recipe[];
}

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

const useRecipeSearch = (cuisine: string, intolerances: string, type: string) => useQuery(["recipeSearch", cuisine, intolerances, type], async () => {
	const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&intolerances=${intolerances}&type=${type}`;
	const res = await fetch(url, {
		headers: {
			"x-api-key": "a5a34ba98616493eb4f08755e5543e7d"
		}
	});
	const recipeInformation: RecipeResponse = await res.json();
	return recipeInformation;
});

export default useRecipeSearch;