import React, { useState } from "react";
import styles from "./SearchIntolerances.module.scss";

export interface SearchIntolerancesProps {
	onChangeIntolerances: (intolerance: string) => void;
}

const SearchIntolerances = (props: SearchIntolerancesProps): JSX.Element => {

	const [intolerances, setIntolerance] = useState("");

	const setToleranceWithCallBack = (value: string) => {
		setIntolerance(value);
		props.onChangeIntolerances(value);
	};

	return (
		<div className={styles.container}>
			<select className={styles.intolerances} value={intolerances} onChange={e => setToleranceWithCallBack(e.target.value)}>
				<option value="Dairy">Dairy</option>
				<option value="Egg">Egg</option>
				<option value="Gluten">Gluten</option>
				<option value="Grain">Grain</option>
				<option value="Peanut">Peanut</option>
				<option value="Seafood">Seafood</option>
				<option value="Sesame">Sesame</option>
				<option value="Shellfish">Shellfish</option>
				<option value="Soy">Soy</option>
				<option value="Sulfite">Sulfite</option>
				<option value="Tree Nut">Tree Nut</option>
				<option value="Wheat">Wheat</option>
			</select>
		</div>
	);
};

export default SearchIntolerances;