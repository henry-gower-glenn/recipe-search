import React, { useState } from "react";
import styles from "./SearchCuisine.module.scss";

export interface SearchCuisineProps {
	onChangeCuisine: (cuisine: string) => void;
}

const SearchCuisine = (props: SearchCuisineProps): JSX.Element => {

	const [cuisine, setCuisine] = useState("");

	const setCuisineWithCallBack = (value: string) => {
		setCuisine(value);
		props.onChangeCuisine(value);
	};

	return (
		<div className={styles.container}>
			<select className={styles.cuisine} value={cuisine} onChange={e => setCuisineWithCallBack(e.target.value)}>
				<option value="African">African</option>
				<option value="American">American</option>
				<option value="British">British</option>
				<option value="Cajun">Cajun</option>
				<option value="Carribean">Carribean</option>
				<option value="Chinese">Chinese</option>
				<option value="Eastern European">Eastern European</option>
				<option value="European">European</option>
				<option value="French">French</option>
				<option value="German">German</option>
				<option value="Greek">Greek</option>
				<option value="Indian">Indian</option>
				<option value="Irish">Irish</option>
				<option value="Italian">Italian</option>
				<option value="Japanese">Japanese</option>
				<option value="Jewish">Jewish</option>
				<option value="Korean">Korean</option>
				<option value="Latin American">Latin American</option>
				<option value="Mediterranean">Mediterranean</option>
				<option value="Mexican">Mexican</option>
				<option value="Middle Eastern">Middle Eastern</option>
				<option value="Nordic">Nordic</option>
				<option value="Southern">Southern</option>
				<option value="Spanish">Spanish</option>
				<option value="Thai">Thai</option>
				<option value="Vietnamese">Vietnamese</option>
			</select>
		</div>
	);
};

export default SearchCuisine;