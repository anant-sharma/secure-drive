import { createMuiTheme, StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
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
				<Component {...pageProps} />
			</StylesProvider>
		</ThemeProvider>
	);
}

export default App;
