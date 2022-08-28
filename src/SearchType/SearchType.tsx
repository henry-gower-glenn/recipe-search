import React, { useState } from "react";
import styles from "./SearchType.module.scss";

export interface SearchTypeProps {
	onChangeType: (type: string) => void;
}

const SearchType = (props: SearchTypeProps): JSX.Element => {

	const [type, setType] = useState("");

	const setTypeWithCallBack = (value: string) => {
		setType(value);
		props.onChangeType(value);
	};

	return (
		<div className={styles.container}>
			<select className={styles.type} value={type} onChange={e => setTypeWithCallBack(e.target.value)}>
				<option value="">--Please choose a type--</option>
				<option value="main course">Main Course</option>
				<option value="side dish">Side Dish</option>
				<option value="dessert">Dessert</option>
				<option value="appetizer">Appetizer</option>
				<option value="salad">Salad</option>
				<option value="bread">Bread</option>
				<option value="breakfast">Breakfast</option>
				<option value="soup">Soup</option>
				<option value="beverage">Beverage</option>
				<option value="sauce">Sauce</option>
				<option value="fingerfood">Fingerfood</option>
				<option value="marinade">Marinade</option>
				<option value="snack">Snack</option>
				<option value="drink">Drink</option>
			</select>
		</div>
	);
};

export default SearchType;