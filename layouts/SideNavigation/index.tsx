import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import {
	openedMixin,
	closedMixin,
	drawerWidth,
	openedContainerMixin,
	closedContainerMixin,
	DrawerHeader,
} from "../common/styles";
import { useMediaQuery } from "@mui/material";

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedContainerMixin(theme),
	}),
	...(!open && {
		...closedContainerMixin(theme),
	}),
	".MuiDrawer-paper": {
		marginLeft: theme.spacing(2),
		backgroundColor: theme.common.colors.light.main,
		borderRight: "none",
		marginTop: theme.spacing(2),
		borderRadius: theme.common.borderRadius.sm,
		height: `calc(100% - ${theme.spacing(4)})`,
		...(open && {
			...openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
		}),
	},
}));

interface ISideNavigationProps {
	open: boolean;
	onSideNavigationToggle: (path: boolean) => void;
}

const SideNavigation: React.FC<ISideNavigationProps> = ({
	open,
	onSideNavigationToggle,
}) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const handleDrawerOpen = () => {
		onSideNavigationToggle(true);
	};

	const handleDrawerClose = () => {
		onSideNavigationToggle(false);
	};

	return (
		<Drawer
			variant={matches ? "permanent" : "temporary"}
			anchor={matches ? undefined : "left"}
			onClose={handleDrawerClose}
			open={open}
		>
			<DrawerHeader>
				{open ? (
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				) : (
					<IconButton onClick={handleDrawerOpen}>
						<MenuIcon />
					</IconButton>
				)}
			</DrawerHeader>
			<Divider />
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default SideNavigation;
