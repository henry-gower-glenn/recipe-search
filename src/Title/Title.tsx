import React from "react";
import styles from "./Title.module.scss";

export interface TitleProps {
	title: string;
}

const Title = (props: TitleProps): JSX.Element => {

	return (
		<div className={styles.title}>
			<div>{props.title}</div>
		</div>
	);
};

export default Title;