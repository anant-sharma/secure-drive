import Head from "next/head";

export function PageHead() {
	return (
		<Head>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<title>Secure Drive</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
			/>
		</Head>
	);
}
