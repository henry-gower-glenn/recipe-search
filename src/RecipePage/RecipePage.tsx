import React from "react";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";
import useRecipeId from "../useRecipeId";
import styles from "./RecipePage.module.scss";
import Loader from "../assets/Loader.gif";

const RecipePage = (): JSX.Element => {
	const { id } = useParams();
	if (!id) {
		return <></>;
	}

	const { isLoading, error, data } = useRecipeId(id);

	const ingredients = !data ? <></> : data.extendedIngredients.map((x, i) => {
		return (
			<div key={i}>
				<div>{x.original}</div>
				<img src={"https://spoonacular.com/cdn/ingredients_250x250/" + x.image} alt="Image"/>
			</div>
		);
	});

	return (
		<div className={styles.container}>
			{data ? <Title title={data.title}/> : <></>}
			<div className={styles.time}>
				{data ? <div className={styles.preparationMinutes}>Preparation Minutes = {data.preparationMinutes}</div> : <></>}
				{data ? <div className={styles.cookingMinutes}>Cooking Minutes = {data.cookingMinutes}</div> : <></>}
			</div>
			<div className={styles.ingredients}>
				{ingredients}
			</div>
			{data ? <div className={styles.instructions} dangerouslySetInnerHTML={{__html: data.instructions}}></div> : <></>}
			{isLoading ? <img className={styles.loader} src={Loader}></img> : <></>}
			{error ? <div className={styles.error}>{(error as Error).message}</div> : <></>}
		</div>
	);
};

export default RecipePage;