import Grid from "@material-ui/core/Grid";
import React from "react";
import { FilesContainer } from "../../containers/FilesContainer";
import { InfoContainer } from "../../containers/InfoContainer";
import { NewUploadFab } from "../NewUploadFab";
import { SearchBar } from "../SearchBar";
import { SideNav } from "../SideNav";
import styles from "./index.module.css";

export function Layout() {
	return (
		<Grid container spacing={0} className={styles.root}>
			<Grid item sm={1} className={styles.navContainer}>
				<SideNav />
			</Grid>
			<Grid item sm={11} className={styles.container}>
				<SearchBar />
				<Grid container spacing={0}>
					<Grid item sm={9}>
						<FilesContainer />
					</Grid>
					<Grid item sm={3}>
						<InfoContainer />
					</Grid>
				</Grid>
				<NewUploadFab />
			</Grid>
		</Grid>
	);
}
