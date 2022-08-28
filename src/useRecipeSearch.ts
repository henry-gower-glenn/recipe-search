import { useQuery } from "@tanstack/react-query";

export interface RecipesResponse {
	results: Recipe[];
}

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

const useRecipeSearch = (cuisine: string, intolerance: string, type: string) => useQuery(["recipeSearch", cuisine, intolerance, type], async () => {
	const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&intolerances=${intolerance}&type=${type}&apiKey=9e1a0ca5a370405f91122c99ffa29aa9`;
	if (cuisine === "" && intolerance === "" && type === "") {
		return [];
	}
	const res = await fetch(url);
	const recipeDetails: RecipesResponse = await res.json();
	return recipeDetails.results;
});

export default useRecipeSearch;