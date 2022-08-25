import React, { useState } from "react";
import SearchCuisine from "./SearchCuisine/SearchCuisine";
import SearchIntolerances from "./SearchIntolerances/SearchIntolerances";
import SearchType from "./SearchType/SearchType";
import Title from "./Title/Title";
import useRecipeSearch from "./useRecipeSearch";

const HomePage = (): JSX.Element => {

	const [cuisine, setCuisine] = useState("");
	const [intolerance, setIntolerances] = useState("");
	const [type, setType] = useState("");

	const { isLoading, error, data } = useRecipeSearch(cuisine, intolerance, type);

	return (
		<>
			<Title title="YUMMY RECIPES"/>
			<SearchCuisine onChangeCuisine={cuisine => setCuisine(cuisine)}/>
			<SearchIntolerances onChangeIntolerances={intolerance => setIntolerances(intolerance)}/>
			<SearchType onChangeType={type => setType(type)}/>
		</>
	);
};

export default HomePage;