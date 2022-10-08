import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	HttpLink,
	from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { LoginMutationResponse } from "../graphql/generated/graphql";

const URI = "http://localhost:8000/graphql";
type errorNames = "NOT_FOUND_ERROR" | "FORBIDDEN";
let token: string;

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
		const login = (data.data as { login: LoginMutationResponse }).login;
		console.log("login");
		console.log(login);
		operation.setContext({ authorization: login.auth.accessToken });
		return data;
	});
});

const httpLink = new HttpLink({ uri: URI });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([errorLink, authLink, httpLink]),
});

export default client;
