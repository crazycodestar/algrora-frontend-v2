import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";

const FieldWrapper = styled(Box)(({ theme }) => ({
	border: `1px solid ${alpha(theme.common.colors.dark.main, 0.5)}`,
	padding: theme.spacing(2),
	borderRadius: theme.common.borderRadius.sm,
}));

export default FieldWrapper;
