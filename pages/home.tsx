import {
	Box,
	Container,
	Skeleton,
	Unstable_Grid2 as Grid,
} from "@mui/material";
import { FC } from "react";
import ProductList from "../layouts/ProductList";
import TopNavigation from "../layouts/TopNavigation/index";
import { useQuery, gql } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/home.graphql";
import {
	GetProductResponse,
	QueryGetProductsArgs,
} from "../graphql/generated/graphql";

const Home: FC = () => {
	const { data, loading, error } = useQuery<
		GetProductResponse,
		QueryGetProductsArgs
	>(GET_PRODUCTS, {
		variables: {
			userInput: {
				page: 1,
				limit: 0,
			},
		},
	});

	const renderSkeleton = () => {
		const skeletonArray: JSX.Element[] = [];
		for (let i = 0; i < 20; ++i) {
			skeletonArray.push(
				<Grid xs={6} md={3}>
					<Skeleton height={154} variant="rectangular" />
					<Skeleton />
					<Skeleton width="60%" />
				</Grid>
			);
		}
		return (
			<Grid container spacing={2}>
				{skeletonArray}
			</Grid>
		);
	};

	const ProductRender = () => {
		if (loading) return renderSkeleton();
		if (!data?.products?.length)
			return (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					no products
				</Box>
			);
		return <ProductList />;
	};

	return (
		<Box>
			<TopNavigation />
			<pre>{JSON.stringify(data, null, 2)}</pre>

			<Container sx={{ marginTop: 13, marginBottom: 2 }}>
				{ProductRender()}
			</Container>
		</Box>
	);
};

export default Home;
