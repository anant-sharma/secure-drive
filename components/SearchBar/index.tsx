import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styles from "./index.module.css";

export function SearchBar() {
	return (
		<div className={styles.root}>
			<AppBar position="static" color="default" className={styles.bar}>
				<Toolbar disableGutters={true}>
					<div className={styles.search}>
						<div className={styles.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: styles.inputRoot,
								input: styles.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
