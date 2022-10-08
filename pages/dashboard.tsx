import { Box, Container } from "@mui/system";
import { IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";
import SideNavigation from "../layouts/SideNavigation";
import ContentContainer from "../components/ContentContainer";
import { Menu } from "@mui/icons-material";
import AddProduct from "../layouts/Addproduct";

const Dashboard: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleSideNavigationToggle = (path?: boolean) => {
		setIsOpen((current) => (path ? path : !current));
	};
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: "secondary.main",
				// backgroundColor: "red",
				display: "flex",
				padding: 2,
				minHeight: "100vh",
			}}
		>
			<SideNavigation
				open={isOpen}
				onSideNavigationToggle={(path) => handleSideNavigationToggle(path)}
			/>
			<ContentContainer>
				<Toolbar>
					<IconButton
						sx={{
							display: {
								sx: "block",
								md: "none",
							},
						}}
						onClick={() => handleSideNavigationToggle()}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6">Header</Typography>
				</Toolbar>
				<AddProduct />
			</ContentContainer>
		</Box>
	);
};

export default Dashboard;
