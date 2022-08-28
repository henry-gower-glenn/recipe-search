import React from "react";
import { Recipe } from "../useRecipeSearch";
import styles from "./RecipeHolder.module.scss";

export interface RecipeHolderProps {
	recipe: Recipe[];
}

const RecipeHolder = (props: RecipeHolderProps): JSX.Element => {

	const recipes = props.recipe.map((x, i) => {
		return (
			<div key={i}>
				<div className={styles.title}>{x.title}</div>
				<a href={`https://api.spoonacular.com/recipes/${x.id}/information`}>
					<img src={x.image} alt="Image"/>
				</a>
			</div>
		);
	});

	return (
		<div className={styles.recipes}>
			{recipes}
		</div>
	);
};

export default RecipeHolder;