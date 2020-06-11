import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

export function NewUploadFab() {
	return (
		<Link href="/upload">
			<Fab color="primary" className={styles.addFab} aria-label="add">
				<AddIcon />
			</Fab>
		</Link>
	);
}
