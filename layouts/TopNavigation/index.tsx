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
	Menu,
} from "@mui/material";
import {
	FC,
	useLayoutEffect,
	useRef,
	useState,
	MouseEvent,
	useContext,
	useEffect,
} from "react";
import { alpha, styled } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
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
import BackDropContext, {
	BackDropContextType,
} from "../../context/BackDropContext";
import { User } from "../../graphql/generated/graphql";
import { GET_ME } from "../../graphql/user.graphql";
import { useQuery } from "@apollo/client/react/hooks";

const PaddingContainer = styled("div")(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

type IAccountOption = "LOGOUT" | "PROFILE";

const TopNavigation: FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isShowingDropdown, setIsShowingDropdown] = useState<boolean>(true);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const { value, setValue } = useContext(
		BackDropContext
	) as BackDropContextType;

	// const queryResult = useQuery<User>(GET_ME);
	// const { error, loading, data } = queryResult;

	// useEffect(() => {
	// 	console.log("navbar returning response");
	// 	console.log(queryResult);
	// 	setValue((init) => ({ ...init, userQueryResult: queryResult }));
	// }, [queryResult]);

	useLayoutEffect(() => {
		// callback error here
		setIsShowingDropdown(!matches);
		// setIsShowingDropdown(true);true
	}, []);

	const handleShowDropdown = (isClickAway?: boolean) => {
		if (isClickAway)
			return setIsShowingDropdown((current) => (matches ? false : current));

		if (matches) {
			setIsShowingDropdown((current) => !current);
		}
	};
	const handleBackDropShow = () => {
		setValue((init) => ({ ...init, isShowing: true }));
	};
	const handleOption = (option: IAccountOption) => {
		handleClose();
		switch (option) {
			case "LOGOUT":
				setIsLoggedIn(false);
				break;
		}
	};
	const handleAccountDropdown = (event: MouseEvent<HTMLLIElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleIsLoggedIn = () => {
		if (value.user)
			return (
				<Grid xs={12} md={4}>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem color="error" onClick={() => handleOption("LOGOUT")}>
							<Typography variant="button" color="MenuText">
								log out
							</Typography>
						</MenuItem>
					</Menu>
					<MenuItem
						sx={{
							width: {
								md: "fit-content",
							},
							gap: { xs: 1, md: 0 },
						}}
						onClick={(e) => handleAccountDropdown(e)}
					>
						<PersonIcon color="primary" />

						<Typography
							sx={{
								display: {
									xs: "block",
									md: "none",
								},
							}}
							variant="button"
							color="MenuText"
						>
							Sign out
						</Typography>
					</MenuItem>
				</Grid>
			);
		// if (error)
		return (
			<Grid xs={12} md={4}>
				<MenuItem
					sx={{
						width: {
							md: "fit-content",
						},
						gap: { xs: 1, md: 0 },
					}}
					onClick={handleBackDropShow}
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

					<Typography variant="button" color="MenuText">
						Sign in
					</Typography>
				</MenuItem>
			</Grid>
		);
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
										{handleIsLoggedIn()}
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
