import React from "react";
import { Link } from "react-router-dom";
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
				<Link to={`/recipe/${x.id}`}>
					<img src={x.image} alt="Image"/>
				</Link>
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