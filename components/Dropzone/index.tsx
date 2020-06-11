import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./index.module.css";

export function Dropzone() {
	const onDrop = useCallback((acceptedFiles) => {
		console.log(acceptedFiles);
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className={styles.root} {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p className={styles.text}>Drop the files here ...</p>
			) : (
				<p className={styles.text}>Drag 'n' drop some files here, or click to select files</p>
			)}
		</div>
	);
}
