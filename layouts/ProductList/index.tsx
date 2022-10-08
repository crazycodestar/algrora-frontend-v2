import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { FC } from "react";
import ProductCard from "../../components/ProductCard";

const ProductList: FC = () => {
	return (
		<Grid container spacing={2}>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
			<Grid xs={6} md={3}>
				<ProductCard />
			</Grid>
		</Grid>
	);
};

export default ProductList;
