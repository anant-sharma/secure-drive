import Grid from "@material-ui/core/Grid";
import React from "react";
import { NewUploadFab } from "../components/NewUploadFab";
import { PageHead } from "../components/PageHead";
import { SearchBar } from "../components/SearchBar";
import { SideNav } from "../components/SideNav";
import { FilesContainer } from "../containers/FilesContainer";
import { InfoContainer } from "../containers/InfoContainer";
import styles from "../styles/index.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function Home() {
	return (
		<>
			<PageHead />
			<Grid container spacing={0} className={layoutStyles.root}>
				<Grid item sm={1} className={layoutStyles.navContainer}>
					<SideNav />
				</Grid>
				<Grid item sm={11} className={[layoutStyles.container, styles.container].join(" ")}>
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
		</>
	);
}
