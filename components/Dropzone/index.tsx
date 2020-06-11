import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./index.module.css";

interface IDropzone {
	children?: React.ReactNode;
	onFileSelect?: Function;
}

export function Dropzone(props: IDropzone) {
	const { children = null, onFileSelect = () => {} } = props;

	const onDrop = useCallback((acceptedFiles) => {
		onFileSelect(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className={styles.root} {...getRootProps()}>
			<div className={styles.dzone}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p className={styles.text}>Drop the files here ...</p>
				) : (
					<p className={styles.text}>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
			{children}
		</div>
	);
}
