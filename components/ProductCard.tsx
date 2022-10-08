import { FC } from "react";

import {
	CardContent,
	Typography,
	CardMedia,
	Card,
	Chip,
	Unstable_Grid2 as Grid,
	Box,
	Avatar,
	ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import { blue } from "@mui/material/colors";

const theme = createTheme({
	components: {
		Banner: {
			styleOverrides: {
				root: {
					backgroundColor: "blue",
					color: "white",
				},
				primary: {
					backgroundColor: "dodgerblue",
					// color: "red",
				},
			},
			variants: [
				{
					props: { color: "primary" },
					style: {
						backgroundColor: blue,
					},
				},
			],
		},
	},
});
interface IBannerProps {
	color: "primary" | "secondary";
}

const Banner = styled("div", {
	shouldForwardProp: (prop) => prop !== "color",
	name: "Banner",
	slot: "Root",
	overridesResolver: (props, styles) => [
		styles.root,
		props.color === "primary" && styles.primary,
	],
})<IBannerProps>(({ theme }) => ({
	padding: theme.spacing(0.5, 1),
	margin: theme.spacing(1, 0),
	position: "absolute",
	paddingLeft: theme.spacing(2),
	// color: theme.palette.common.white,
	// backgroundColor: theme.palette.primary.main,
	bottom: 0,
	left: 0,
}));

const ProductCard: FC = () => {
	const imgAddress =
		"https://images.unsplash.com/photo-1661105665239-17a46dbda331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
	return (
		<Card sx={{ maxWidth: "345px" }}>
			<Box sx={{ position: "relative" }}>
				<CardMedia
					component="img"
					height="154"
					image={imgAddress}
					alt="image"
				/>
				<ThemeProvider theme={theme}>
					<Banner color="primary">
						<Typography variant="subtitle2">order</Typography>
					</Banner>
				</ThemeProvider>
			</Box>
			<CardContent
				sx={{
					paddingBottom: "auto",
					"&.MuiCardContent-root:last-child": { paddingBottom: "16px" },
				}}
			>
				<Typography variant="body1" sx={{ lineHeight: "100%" }}>
					Product name
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						marginTop: 1,
						gap: 1,
					}}
				>
					<Avatar sx={{ width: "24px", height: "24px" }} />
					<Typography variant="subtitle1">erin yeager</Typography>
				</Box>
				<Typography gutterBottom variant="h6">
					₦500
				</Typography>
				<Typography gutterBottom variant="overline">
					Preorder avaliable
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
