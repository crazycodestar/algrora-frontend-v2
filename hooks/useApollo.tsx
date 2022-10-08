import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	HttpLink,
	from,
	ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useContext, FC } from "react";
import BackDropContext, {
	BackDropContextType,
} from "../context/BackDropContext";
import { LoginMutationResponse } from "../graphql/generated/graphql";

const URI = "http://localhost:8000/graphql";
type errorNames = "NOT_FOUND_ERROR" | "FORBIDDEN";
let token: string;

const useApollo = () => {
	const { value, setValue } = useContext(
		BackDropContext
	) as BackDropContextType;

	const interceptor = new ApolloClient({
		uri: URI,
		cache: new InMemoryCache(),
	});

	type graphQlErrorExtensions = {
		code: errorNames;
		exception: {
			name: string;
		};
	};

	const contextViewer = setContext((_, { ...data }) => {
		console.log("contextviewer");
		console.log(data);
		return {};
	});

	const errorLink = onError(({ graphQLErrors, operation }) => {
		console.log("errorLink");
		console.log(graphQLErrors);
		graphQLErrors?.forEach((graphQlError) => {
			const graphQlErrorExtensions =
				graphQlError.extensions as graphQlErrorExtensions;
			if (graphQlErrorExtensions.code === "FORBIDDEN") {
				console.log(operation);
			}
		});
	});

	const authLink = new ApolloLink((operation, forward) => {
		console.log("initial operation");
		console.log(operation);
		return forward(operation).map((data) => {
			console.log("data checking", data);
			if (data.data && "login" in data.data) {
				const login = (data.data as { login: LoginMutationResponse }).login;
				// continuer here
				console.log("login");
				console.log(login);
				console.log("login.user", login.user);
				setValue((init) => ({ ...init, user: login.user }));
				operation.setContext({ authorization: login.auth.accessToken });
			}
			return data;
		});
	});

	const httpLink = new HttpLink({ uri: URI });

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: from([errorLink, authLink, contextViewer, httpLink]),
	});

	return client;
};

interface IApolloClientProviderContext {
	children: JSX.Element;
}

export const ApolloClientProvider: FC<IApolloClientProviderContext> = ({
	children,
}) => {
	const client = useApollo();
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default useApollo;
