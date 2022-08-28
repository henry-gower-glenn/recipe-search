import React, { useState } from "react";
import SearchCuisine from "./SearchCuisine/SearchCuisine";
import SearchIntolerances from "./SearchIntolerances/SearchIntolerances";
import SearchType from "./SearchType/SearchType";
import Title from "./Title/Title";
import useRecipeSearch from "./useRecipeSearch";
import Loader from "./assets/Loader.gif";
import styles from "./HomePage.module.scss";
import RecipeHolder from "./RecipeHolder/RecipeHolder";

const HomePage = (): JSX.Element => {

	const [cuisine, setCuisine] = useState("");
	const [intolerance, setIntolerances] = useState("");
	const [type, setType] = useState("");

	const { isLoading, error, data } = useRecipeSearch(cuisine, intolerance, type);
	
	return (
		<div className={styles.container}>
			<Title title="YUMMY RECIPES"/>
			<div className={styles.search}>
				<SearchCuisine onChangeCuisine={cuisine => setCuisine(cuisine)}/>
				<SearchIntolerances onChangeIntolerances={intolerance => setIntolerances(intolerance)}/>
				<SearchType onChangeType={type => setType(type)}/>
			</div>
			{isLoading ? <img className={styles.loader} src={Loader}></img> : <></>}
			{error ? <div className={styles.error}>{(error as Error).message}</div> : <></>}
			{data ? <RecipeHolder recipe={data}/> : <></>}
		</div>
	);
};

export default HomePage;