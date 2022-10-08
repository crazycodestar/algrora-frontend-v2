import { FC } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import SignUp from "../layouts/SignUp";

const signup: FC = () => {
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<Box sx={{ width: "80vw", maxWidth: "400px" }}>
					<SignUp />
				</Box>
			</Box>
		</Box>
	);
};

export default signup;
