import { Unstable_Grid2 as Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledGridItem = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
}));

export default StyledGridItem;
