import { createMuiTheme, StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import React from "react";
import "../styles/global.css";

const Theme = createMuiTheme({
	typography: {
		fontFamily: `"Poppins", sans-serif`,
	},
});

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<StylesProvider injectFirst>
				<EnsurePage>
					<Component {...pageProps} />
				</EnsurePage>
			</StylesProvider>
		</ThemeProvider>
	);
}

export default App;

interface IEnsurePageState {
	show: boolean;
}

interface IEnsurePageProps {
	children: React.ReactNode;
}
class EnsurePage extends React.Component<IEnsurePageProps, IEnsurePageState> {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	componentDidMount() {
		this.setState({
			show: true,
		});
	}

	render() {
		const { show } = this.state;
		const { children } = this.props;

		if (!show) {
			return null;
		}

		return <>{children}</>;
	}
}
