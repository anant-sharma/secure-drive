import Head from "next/head";

interface IPageHead {
	title?: String;
	children?: React.ReactNode;
}

export function PageHead(props: IPageHead) {
	const { title = "Secure Drive", children = null } = props;

	return (
		<Head>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
			/>
			{children && children}
		</Head>
	);
}
