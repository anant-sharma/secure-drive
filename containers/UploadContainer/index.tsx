import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function UploadContainer() {
	return (
		<>
			<div>This is Upload Container</div>
			<MyDropzone />
		</>
	);
}

function MyDropzone() {
	const onDrop = useCallback((acceptedFiles) => {
		console.log(acceptedFiles);
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag 'n' drop some files here, or click to select files</p>
			)}
		</div>
	);
}
