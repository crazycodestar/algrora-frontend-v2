import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ContentContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.common.colors.light.main,
	width: "100%",
	boxSizing: "border-box",
	flexGrow: 1,
}));

export default ContentContainer;
