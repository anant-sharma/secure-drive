import React from "react";
import { Dropzone } from "../../components/Dropzone";

export function UploadContainer() {
	const handleFileSelect = (file) => {
		console.log(file);
	};

	return (
		<>
			<Dropzone onFileSelect={handleFileSelect} />
		</>
	);
}
