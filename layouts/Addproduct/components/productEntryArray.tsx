import { FieldArray } from "formik";
import { Box, Button, Typography } from "@mui/material";
import { FieldArrayRenderProps } from "formik";
//interface
import { IField, IInitialValues } from "../interfaces";
import { FC } from "react";
import { FormInput } from "../../../components/form";
import { generatePath } from "../helpers/index";
import { initialValues } from "..";
import FormArray from "../../../components/form/FormArray";
import fieldEntryArray from "./fieldEntryArray";

const productEntryArray = (
	arrayHelpers: FieldArrayRenderProps,
	values: IInitialValues
) => {
	const handleAddProduct = () => arrayHelpers.push(initialValues.products[0]);
	const handleRemoveProduct = (index: number) => arrayHelpers.remove(index);
	return (
		<Box>
			{values.products.map((product, index) => {
				const rootString = `products.${index}.fields`;
				return (
					<ProductEntry
						heading="products"
						index={index}
						onCreate={handleAddProduct}
						onDelete={handleRemoveProduct}
					>
						<FormArray name={generatePath(`products`, index, "fields")}>
							{(arrayHelpers) =>
								fieldEntryArray(arrayHelpers, product.fields, rootString)
							}
						</FormArray>
					</ProductEntry>
				);
			})}
			<Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
				<Button type="button" onClick={handleAddProduct}>
					Add suplementary product
				</Button>
				<Button variant="contained" type="submit">
					Create Product
				</Button>
			</Box>
		</Box>
	);
};

interface IProductEntryProps {
	children?: JSX.Element;
	heading: string;
	index: number;
	onCreate: () => void;
	onDelete: (index: number) => void;
}

const ProductEntry: FC<IProductEntryProps> = ({
	children,
	heading,
	index,
	onCreate,
	onDelete,
}) => {
	return (
		<Box
			color="primary.main"
			sx={{ display: "flex", flexDirection: "column", gap: 2 }}
		>
			{index ? (
				<Box>
					<Typography variant="button">suplementary product {index}</Typography>
					<Button onClick={() => onDelete(index)} color="error">
						Remove
					</Button>
				</Box>
			) : null}
			<FormInput name={generatePath(heading, index, "name")} label="Name" />
			<FormInput
				name={generatePath(heading, index, "description")}
				label="Description"
				multiline
				rows={4}
			/>
			<FormInput
				name={generatePath(heading, index, "price")}
				label="Price"
				type="number"
			/>
			{children}
		</Box>
	);
};

export default productEntryArray;
