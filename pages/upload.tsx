import Grid from "@material-ui/core/Grid";
import React from "react";
import { PageHead } from "../components/PageHead";
import { SideNav } from "../components/SideNav";
import { UploadContainer } from "../containers/UploadContainer";
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/upload.module.css";

export default function Home() {
	return (
		<>
			<PageHead />
			<Grid container spacing={0} className={layoutStyles.root}>
				<Grid item sm={1} className={layoutStyles.navContainer}>
					<SideNav />
				</Grid>
				<Grid item sm={11} className={[layoutStyles.container, styles.container].join(" ")}>
					<UploadContainer />
				</Grid>
			</Grid>
		</>
	);
}
