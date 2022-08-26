import {
	Typography,
	Box,
	IconButton,
	Container,
	Unstable_Grid2 as Grid,
	AppBar,
	Toolbar,
	MenuItem,
	useMediaQuery,
	useTheme,
	ClickAwayListener,
	Popover,
} from "@mui/material";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	Album,
	Dashboard,
	MoreVert,
	Search as SearchIcon,
} from "@mui/icons-material";
//components
import NavItem from "./components/NavItem";
import NavItemContainer from "./components/NavItemContainer";
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "./components/Search";
// styles
import { styles } from "./styles/styles";
import Link from "next/link";

const PaddingContainer = styled("div")(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

const TopNavigation: FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isShowingDropdown, setIsShowingDropdown] = useState<boolean>(true);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	useLayoutEffect(() => {
		// callback error here
		// setIsShowingDropdown(!matches);
		setIsShowingDropdown(true);
	}, []);

	const handleShowDropdown = (isClickAway?: boolean) => {
		if (isClickAway)
			return setIsShowingDropdown((current) => (matches ? false : current));

		if (matches) {
			setIsShowingDropdown((current) => !current);
		}
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<PaddingContainer>
			<AppBar
				position="fixed"
				sx={{
					...styles.mainContainer,
					backgroundColor: alpha(theme.palette.secondary.main, 0.75),
				}}
			>
				<Toolbar sx={{ padding: 0 }}>
					<Box sx={styles.wrapper}>
						<Box sx={styles.layerBox}>
							<Box sx={styles.layerBoxWrapper}>
								<Album color="primary" />
								<Typography
									variant="h6"
									color="primary.main"
									sx={{
										display: { xs: "none", md: "block" },
									}}
								>
									Algrora
								</Typography>
							</Box>
							<Search>
								<SearchIconWrapper>
									<SearchIcon color="primary" />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{ "aria-label": "search" }}
								/>
							</Search>
							<IconButton
								color="primary"
								aria-label="options"
								onClick={() => handleShowDropdown()}
								sx={{
									display: {
										xs: "block",
										md: "none",
									},
								}}
							>
								<MoreVert />
							</IconButton>
						</Box>
						{isShowingDropdown && (
							<ClickAwayListener onClickAway={() => handleShowDropdown(true)}>
								<Box sx={styles.dropDownContainer}>
									<NavItemContainer>
										<NavItem
											count={4}
											Icon={<Dashboard color="primary" />}
											label="dashboard"
										/>

										<NavItem
											Icon={<ShoppingCartIcon color="primary" />}
											label="cart"
										/>
										{!isLoggedIn ? (
											<Grid xs={12} md={4}>
												<MenuItem
													sx={{
														width: {
															md: "fit-content",
														},
														gap: { xs: 1, md: 0 },
													}}
												>
													<LoginIcon
														color="primary"
														sx={{
															display: {
																xs: "block",
																md: "none",
															},
														}}
													/>

													<Typography variant="button">Sign in</Typography>
												</MenuItem>
											</Grid>
										) : (
											<Grid xs={12} md={4}>
												<MenuItem
													sx={{
														width: {
															md: "fit-content",
														},
														gap: { xs: 1, md: 0 },
													}}
												>
													<LogoutIcon
														color="error"
														sx={{
															display: {
																xs: "block",
																md: "none",
															},
														}}
													/>

													<Typography color="error" variant="button">
														Sign out
													</Typography>
												</MenuItem>
											</Grid>
										)}
									</NavItemContainer>
								</Box>
							</ClickAwayListener>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</PaddingContainer>
	);
};

export default TopNavigation;
