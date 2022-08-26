import { Theme, SxProps } from "@mui/material";

type IStyleSet<T extends string> = {
	[k in T]?: SxProps<Theme>;
};
const set = <T extends string>(s: IStyleSet<T>) => s;

export const styles = set({
	mainContainer: {
		maxWidth: "1200px",
		width: "100%",
		zIndex: "99",
		boxShadow: "none",
		marginLeft: "auto",
		marginRight: "auto",
		backdropFilter: "blur(20px)",
		top: 0,
		left: 0,
		right: 0,
		marginTop: {
			xs: 0,
			md: 2,
		},
		borderRadius: {
			xs: 0,
			md: 2,
		},
	},
	wrapper: {
		paddingLeft: {
			xs: "24px",
			md: "16px",
		},
		paddingRight: {
			xs: "24px",
			md: "16px",
		},
		top: 0,
		display: "flex",
		flexGrow: 1,
		justifyContent: "space-between",
		flexDirection: { xs: "column", md: "row" },
	},
	layerBox: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "space-between",
		display: "flex",
		gap: { xs: 0, md: 1 },
	},
	layerBoxWrapper: {
		alignItems: "center",
		display: "flex",
		gap: 1,
	},
	dropDownContainer: {
		width: {
			xs: "100%",
			md: "fit-content",
		},
		backgroundColor: {
			// xs: alpha("secondary.main", 0.75),
			xs: "secondary.main",
			md: "inherit",
		},
		position: {
			xs: "absolute",
			md: "static",
		},
		top: 56,
		left: 0,
	},
});
