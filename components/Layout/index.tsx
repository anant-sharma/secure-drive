import Grid from "@material-ui/core/Grid";
import React from "react";
import { SearchBar } from "../SearchBar";
import { SideNav } from "../SideNav";
import styles from "./index.module.css";

export function Layout() {
	return (
		<Grid container spacing={0} className={styles.root}>
			<Grid item xs={1} className={styles.navContainer}>
				<SideNav />
			</Grid>
			<Grid item xs={11} className={styles.container}>
				<SearchBar />
			</Grid>
		</Grid>
	);
}
