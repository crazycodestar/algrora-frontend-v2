import { FC } from "react";
import { Unstable_Grid2 as Grid } from "@mui/material";

interface INavItemContainer {
	children: JSX.Element[];
}

const NavItemContainer: FC<INavItemContainer> = ({ children }) => {
	return (
		<Grid container sx={{ flexGrow: 1 }}>
			{children}
		</Grid>
	);
};

export default NavItemContainer;
