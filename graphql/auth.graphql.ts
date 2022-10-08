import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation Login($userInput: LoginInput) {
		login(userInput: $userInput) {
			status
			success
			message
			user {
				id
				address
				email
				username
			}
			auth {
				accessToken
			}
		}
	}
`;

export const SIGNUP = gql`
	mutation SignUp($userInput: SignUpInput) {
		signUp(userInput: $userInput) {
			... on SignUpMutationResponse {
				status
				success
				message
			}
		}
	}
`;
