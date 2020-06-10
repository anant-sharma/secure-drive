import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import { FileUploadDialog } from "../FileUploadDialog";
import styles from "./index.module.css";

export function NewUploadFab() {
	const [openUploadFile, setOpenUploadFile] = React.useState(false);

	const handleClickOpen = () => {
		setOpenUploadFile(true);
	};

	const handleClose = () => {
		setOpenUploadFile(false);
	};
	return (
		<>
			<Fab color="primary" className={styles.addFab} aria-label="add" onClick={handleClickOpen}>
				<AddIcon />
			</Fab>
			<FileUploadDialog open={openUploadFile} onClose={handleClose} />
		</>
	);
}
