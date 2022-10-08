import { FC } from "react";
import {
	Typography,
	Unstable_Grid2 as Grid,
	MenuItem,
	Badge,
} from "@mui/material";

interface INavItemProps {
	Icon: JSX.Element;
	count?: number;
	label: string;
}

const NavItem: FC<INavItemProps> = ({ Icon, count, label }) => {
	return (
		<Grid xs={12} md={4}>
			<MenuItem
				sx={{
					gap: { xs: 1, md: 0 },
					width: {
						md: "fit-content",
					},
				}}
			>
				{/* <ShoppingCartIcon color="primary" /> */}
				<Badge badgeContent={count} color="error">
					{Icon}
				</Badge>
				<Typography
					variant="button"
					color="MenuText"
					sx={{
						display: { xs: "block", md: "none" },
					}}
				>
					{label}
				</Typography>
			</MenuItem>
		</Grid>
	);
};

export default NavItem;
