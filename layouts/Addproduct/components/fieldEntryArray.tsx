import { FieldArrayRenderProps } from "formik";
import { FC } from "react";
import FormArray from "../../../components/form/FormArray";
import { IField, IInitialValues } from "../interfaces";
import { Box, Button, Typography } from "@mui/material";
import { generatePath } from "../helpers";
import { FormInput } from "../../../components/form";
import optionEntryArray from "./optionEntryArray";
import FieldWrapper from "./FieldWrapper";

const fieldEntryArray = (
	arrayHelpers: FieldArrayRenderProps,
	values: Array<IField> | undefined,
	rootString: string
) => {
	const handleAdd = () =>
		arrayHelpers.push({
			name: "",
			default: "0",
			options: [
				{
					name: "",
					price: 0,
					isPreOrderDefault: false,
				},
			],
		});
	const handleRemove = (index: number) => arrayHelpers.remove(index);
	return (
		<Box sx={{ marginBottom: 3 }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					marginBottom: 2,
				}}
			>
				<Typography color="MenuText" variant="body1">
					Fields
				</Typography>
				<Button variant="contained" onClick={handleAdd}>
					Add Field
				</Button>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				{values?.length
					? values.map((field, index) => {
							const headString = generatePath(rootString, index, "options");
							const fieldString = generatePath(rootString, index);
							return (
								<Box>
									<FieldEntry
										index={index}
										heading={rootString}
										onRemove={handleRemove}
									>
										<FormArray name={headString}>
											{(arrayHelpers) =>
												optionEntryArray(
													arrayHelpers,
													field.options,
													field,
													fieldString,
													headString
												)
											}
										</FormArray>
									</FieldEntry>
								</Box>
							);
					  })
					: null}
			</Box>
		</Box>
	);
};

interface IFieldEntryProps {
	children?: JSX.Element;
	heading: string;
	index: number;
	onRemove: (index: number) => void;
}

const FieldEntry: FC<IFieldEntryProps> = ({
	children,
	heading,
	index,
	onRemove,
}) => {
	return (
		<FieldWrapper>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<FormInput
					name={generatePath(heading, index, "name")}
					label="Name"
					sx={{ marginBottom: 2 }}
				/>
				<Button
					variant="contained"
					color="error"
					onClick={() => onRemove(index)}
				>
					Remove
				</Button>
			</Box>
			{children}
		</FieldWrapper>
	);
};

export default fieldEntryArray;
