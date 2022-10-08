import { Box, Typography, Card, Button, IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { FC, useContext, useMemo } from "react";
import { FormFilePicker } from "../../../components/form";
import { CameraAlt } from "@mui/icons-material";
import { IInitialValues } from "../interfaces";
import { FormContext, IFormContext } from "../context";

const Wrapper = styled(Card)(({ theme }) => ({
	// border: `1px solid ${alpha(theme.common.colors.dark.main, 0.3)}`,
	borderRadius: theme.common.borderRadius.sm,
	backgroundColor: theme.palette.secondary.light,
	padding: theme.spacing(2),
	position: "sticky",
	top: 32,
}));

const FatButton = styled(IconButton)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "275px",
	borderRadius: theme.common.borderRadius.sm,
	position: "relative",
}));

const ProductImage = styled("img")(({ theme }) => ({
	position: "absolute",
	top: 0,
	left: 9,
	width: "100%",
	height: "100%",
	borderRadius: theme.common.borderRadius.sm,
	objectFit: "contain",
}));

interface ISummaryBarProps extends Pick<IInitialValues, "image"> {}

const SummaryBar: FC<ISummaryBarProps> = ({ image }) => {
	const imageURL = useMemo(() => {
		if (image) return URL.createObjectURL(image.blob);
	}, [image]);
	const handleSetImage = ({ blob }: { blob: Blob }) => {
		setFieldValue("image.blob", blob);
	};
	const { values, setFieldValue } = useContext(FormContext) as IFormContext;
	return (
		<Wrapper>
			<FormFilePicker
				name="image"
				accept="image/jpeg, image/png"
				onSetFile={handleSetImage}
				render={({ handleSelectFile }) => (
					<FatButton onClick={handleSelectFile}>
						{imageURL ? (
							<ProductImage src={imageURL} alt="unable to read file" />
						) : null}

						<CameraAlt sx={{ zIndex: 99 }} />
					</FatButton>
				)}
			/>

			<Box sx={{ marginBottom: 2 }}>
				<Typography variant="h6" gutterBottom>
					{values.products[0].name}
				</Typography>
				<Typography variant="h6" gutterBottom>
					₦{values.products[0].price}
				</Typography>
				<Typography variant="body1" gutterBottom>
					{values.products[0].description}
				</Typography>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<Button>Cancel</Button>
				<Button type="submit" variant="contained">
					Create Product
				</Button>
			</Box>
			{/* noting for u tags */}
		</Wrapper>
	);
};

export default SummaryBar;
