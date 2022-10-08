import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Auth = {
  __typename?: 'Auth';
  accessToken: Scalars['String'];
};

export type DeleteProductInput = {
  index?: InputMaybe<Scalars['ID']>;
};

export type DeleteStoreInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GetProductResponse = PaginationResponse & {
  __typename?: 'GetProductResponse';
  next?: Maybe<PaginationInfo>;
  previous?: Maybe<PaginationInfo>;
  products: Array<Product>;
};

export type GetProductsInput = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type GetStoreInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  amount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  isPreOrder: Scalars['Boolean'];
  key: Scalars['String'];
};

export type KeyValuePairInput = {
  amount: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  isPreOrder: Scalars['Boolean'];
  key: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginMutationResponse = ReturnMessage & {
  __typename?: 'LoginMutationResponse';
  auth: Auth;
  message: Scalars['String'];
  status: Scalars['Int'];
  success: Scalars['Boolean'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']>;
  createProduct: ProductMutationResponse;
  createStore: StoreMutationResponse;
  deleteProduct: ProductMutationResponse;
  deleteStore: StoreMutationResponse;
  login: LoginMutationResponse;
  logout: Scalars['Boolean'];
  register?: Maybe<ReturnMessage>;
  requestCreateStore: StoreMutationResponse;
  signUp?: Maybe<ReturnMessage>;
  updateProduct: ProductMutationResponse;
  updateStore: StoreMutationResponse;
};


export type MutationCreateProductArgs = {
  userInput?: InputMaybe<ProductInput>;
};


export type MutationDeleteProductArgs = {
  userInput?: InputMaybe<DeleteProductInput>;
};


export type MutationDeleteStoreArgs = {
  userInput?: InputMaybe<DeleteStoreInput>;
};


export type MutationLoginArgs = {
  userInput?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  userInput?: InputMaybe<RegisterInput>;
};


export type MutationSignUpArgs = {
  userInput?: InputMaybe<SignUpInput>;
};


export type MutationUpdateProductArgs = {
  userInput?: InputMaybe<UpdateProductInput>;
};


export type MutationUpdateStoreArgs = {
  userInput?: InputMaybe<UpdateProductInput>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type PaginationResponse = {
  next?: Maybe<PaginationInfo>;
  previous?: Maybe<PaginationInfo>;
};

export type Product = {
  __typename?: 'Product';
  basePrice: Scalars['Int'];
  hasPreOrder: Scalars['Boolean'];
  imageUri: Scalars['String'];
  isOrder: Scalars['Boolean'];
  name: Scalars['String'];
  productContents: Array<ProductContent>;
};

export type ProductContent = {
  __typename?: 'ProductContent';
  name: Scalars['String'];
  options: Array<ProductContentOption>;
  price: Scalars['Int'];
};

export type ProductContentInput = {
  name: Scalars['String'];
  options: Array<ProductContentOptionsInput>;
  price: Scalars['Int'];
};

export type ProductContentOption = {
  __typename?: 'ProductContentOption';
  name: Scalars['String'];
  options: Array<KeyValuePair>;
};

export type ProductContentOptionsInput = {
  name: Scalars['String'];
  options: Array<KeyValuePairInput>;
};

export type ProductInput = {
  basePrice: Scalars['Int'];
  hasPreOrder: Scalars['Boolean'];
  imageUri: Scalars['String'];
  isOrder: Scalars['Boolean'];
  name: Scalars['String'];
  productContents: Array<ProductContentInput>;
};

export type ProductMutationResponse = ReturnMessage & {
  __typename?: 'ProductMutationResponse';
  message: Scalars['String'];
  product: Product;
  status: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  getAccessToken: Auth;
  getMe: User;
  getMyStore: Store;
  getProducts: GetProductResponse;
  getStore: Store;
};


export type QueryGetProductsArgs = {
  userInput?: InputMaybe<GetProductsInput>;
};


export type QueryGetStoreArgs = {
  userInput?: InputMaybe<GetStoreInput>;
};

export type RegisterInput = {
  email: Scalars['String'];
};

export type ReturnMessage = {
  message: Scalars['String'];
  status: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type SignUpInput = {
  address: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpMutationResponse = ReturnMessage & {
  __typename?: 'SignUpMutationResponse';
  message: Scalars['String'];
  signUpUser: User;
  status: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Store = {
  __typename?: 'Store';
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderExp?: Maybe<Scalars['DateTime']>;
  preOrderExp?: Maybe<Scalars['DateTime']>;
  product: Array<Product>;
};

export type StoreInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  orderExp?: InputMaybe<Scalars['DateTime']>;
  preOrderExp?: InputMaybe<Scalars['DateTime']>;
};

export type StoreMutationResponse = ReturnMessage & {
  __typename?: 'StoreMutationResponse';
  message: Scalars['String'];
  status: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type UpdateProductInput = {
  index?: InputMaybe<Scalars['ID']>;
  productInput?: InputMaybe<ProductInput>;
};

export type UpdateStoreInput = {
  id?: InputMaybe<Scalars['ID']>;
  store?: InputMaybe<StoreInput>;
};

export type User = {
  __typename?: 'User';
  ImageUrl?: Maybe<Scalars['String']>;
  activated: Scalars['Boolean'];
  address: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  imageUri?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  userInput?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginMutationResponse', status: number, success: boolean, message: string, auth: { __typename?: 'Auth', accessToken: string } } };

export type SignUpMutationVariables = Exact<{
  userInput?: InputMaybe<SignUpInput>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'LoginMutationResponse' } | { __typename?: 'ProductMutationResponse' } | { __typename?: 'SignUpMutationResponse', status: number, success: boolean, message: string } | { __typename?: 'StoreMutationResponse' } | null };

export type GetProductsQueryVariables = Exact<{
  userInput?: InputMaybe<GetProductsInput>;
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: { __typename?: 'GetProductResponse', previous?: { __typename?: 'PaginationInfo', page: number, limit: number } | null, next?: { __typename?: 'PaginationInfo', page: number, limit: number } | null, products: Array<{ __typename?: 'Product', name: string, isOrder: boolean, hasPreOrder: boolean, basePrice: number, imageUri: string }> } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'User', id: string, email: string, username: string, activated: boolean, address: string } };


export const LoginDocument = gql`
    mutation Login($userInput: LoginInput) {
  login(userInput: $userInput) {
    status
    success
    message
    auth {
      accessToken
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
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
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const GetProductsDocument = gql`
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

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetMeDocument = gql`
    query GetMe {
  getMe {
    id
    email
    username
    activated
    address
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;