import Head from "next/head";
import { ThemeProvider } from "@mui/system";
import { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import theme from "./config/theme";
// import client from "./config/graphql";
import BackDropModal from "./layouts/BackDropModal";
import useApollo, { ApolloClientProvider } from "./hooks/useApollo";
import { BackDropProvider } from "./context/BackDropContext";

interface ILayoutProps {
	children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	// const queryResult = useQuery<User>(GET_ME);

	// useEffect(() => {
	// 	setValue((init) => ({ ...init, queryResult }));
	// }, [queryResult]);

	return (
		<BackDropProvider>
			<ApolloClientProvider>
				<div>
					<Head>
						<title>Algrora 2.0</title>
						<meta
							name="description"
							content="This is a simple market place for cu students to sell either new or us:w
							 items to their fellow students for a small profit"
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ThemeProvider theme={theme}>
						<BackDropModal />
						{children}
					</ThemeProvider>
				</div>
			</ApolloClientProvider>
		</BackDropProvider>
	);
};

export default Layout;
