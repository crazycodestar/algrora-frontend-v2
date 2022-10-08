import { FC } from "react";
import { FieldArrayRenderProps } from "formik";
import { IOption, IField } from "../interfaces";
import {
	Box,
	Button,
	Unstable_Grid2 as Grid,
	IconButton,
	Typography,
} from "@mui/material";
import { generatePath } from "../helpers";
import { FormInput, FormArray, FormCheckbox } from "../../../components/form";
import { Remove } from "@mui/icons-material";
import StyledGridItem from "./StyledGridItem";

const optionEntryArray = (
	arrayHelpers: FieldArrayRenderProps,
	values: Array<IOption> | undefined,
	field: IField,
	fieldString: string,
	rootString: string
) => {
	const handleAdd = () =>
		arrayHelpers.push({
			name: "",
			price: 0,
			isPreOrderOption: false,
		});

	const handleRemove = (index: number) => arrayHelpers.remove(index);
	return (
		<Box>
			<Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
				{optionHeadings()}
				{values?.length
					? values.map((option, index) => {
							return (
								<Box>
									<OptionEntry
										index={index}
										heading={rootString}
										onRemove={handleRemove}
										option={option}
										field={field}
										fieldString={fieldString}
									/>
								</Box>
							);
					  })
					: null}
			</Box>
			<Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
				<Button onClick={handleAdd}>Add option</Button>
			</Box>
		</Box>
	);
};

interface IOptionEntryProps {
	heading: string;
	index: number;
	onRemove: (index: number) => void;
	option: IOption;
	field: IField;
	fieldString: string;
}

const OptionEntry: FC<IOptionEntryProps> = ({
	heading,
	index,
	onRemove,
	option,
	field,
	fieldString,
}) => {
	return (
		<Grid container>
			<StyledGridItem xs={12 / 5}>
				<FormInput name={generatePath(heading, index, "name")} label="Option" />
			</StyledGridItem>
			<StyledGridItem xs={12 / 5}>
				<FormInput
					disabled={!index}
					name={generatePath(heading, index, "price")}
					type="number"
					label="Price(Optional)"
				/>
			</StyledGridItem>
			<StyledGridItem xs={12 / 5}>
				<FormCheckbox
					checked={field.default === index.toString()}
					type={"radio"}
					value={`${index}`}
					disabled
					name={generatePath(fieldString, "default")}
				/>
			</StyledGridItem>
			<StyledGridItem xs={12 / 5}>
				<FormCheckbox
					disabled={field.default === index.toString()}
					checked={option.isPreOrderOption}
					name={generatePath(heading, index, "isPreOrderOption")}
				/>
			</StyledGridItem>
			<StyledGridItem xs={12 / 5}>
				<Box>
					<IconButton
						onClick={() => onRemove(index)}
						color="error"
						disabled={index ? false : true}
					>
						<Remove />
					</IconButton>
				</Box>
			</StyledGridItem>
		</Grid>
	);
};

const optionHeadings = () => (
	<Grid container>
		<Grid xs={12 / 5}>
			<Typography variant="overline">Option</Typography>
		</Grid>
		<Grid xs={12 / 5}>
			<Typography variant="overline">Price (Optional)</Typography>
		</Grid>
		<StyledGridItem xs={12 / 5}>
			<Typography variant="overline">Default</Typography>
		</StyledGridItem>
		<StyledGridItem xs={12 / 5}>
			<Typography variant="overline">PreOrder only</Typography>
		</StyledGridItem>
		<StyledGridItem xs={12 / 5}>
			<Typography variant="overline">Remove</Typography>
		</StyledGridItem>
	</Grid>
);

export default optionEntryArray;
