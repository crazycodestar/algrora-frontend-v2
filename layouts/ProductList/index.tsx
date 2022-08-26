import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { FC } from "react";
import ProductCard from "../../components/ProductCard";

const ProductList: FC = () => {
	return (
		<Container sx={{ marginTop: 13, marginBottom: 2 }}>
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
		</Container>
	);
};

export default ProductList;
