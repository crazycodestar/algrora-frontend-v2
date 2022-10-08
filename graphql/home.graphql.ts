import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query GetProducts($userInput: GetProductsInput) {
		getProducts(userInput: $userInput) {
			previous {
				page
				limit
			}
			next {
				page
				limit
			}
			products {
				name
				isOrder
				hasPreOrder
				basePrice
				imageUri
			}
		}
	}
`;
