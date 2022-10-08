import { FC } from "react";
import { Formik, Form } from "formik";
import AddProductValidationSchema from "../../validation/AddProductValidation";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import FormArray from "../../components/form/FormArray";
import { IInitialValues } from "./interfaces";
import productEntryArray from "./components/productEntryArray";
import SummaryBar from "./components/SummaryBar";
import { FormContext } from "./context";

export const initialValues: IInitialValues = {
	baseName: "",
	image: null,
	products: [
		{
			name: "",
			price: 0,
			description: "",
		},
	],
};

const AddProduct: FC = () => {
	return (
		<Box sx={{ paddingRight: 2, paddingLeft: 2, width: "100%" }}>
			<Formik
				initialValues={initialValues}
				validationSchema={AddProductValidationSchema}
				onSubmit={(data) => {
					alert(data);
				}}
			>
				{({ values, errors, touched, setFieldValue }) => {
					return (
						<Form>
							<FormContext.Provider value={{ values, setFieldValue }}>
								<Grid container spacing={2} sx={{ width: "100%" }}>
									<Grid xs={12} md={8}>
										<FormArray name="products">
											{(arrayHelper) => productEntryArray(arrayHelper, values)}
										</FormArray>
										{/* <pre>{JSON.stringify(values, null, 2)}</pre>
									<pre>{JSON.stringify(errors, null, 2)}</pre>
									<pre>{JSON.stringify(touched, null, 2)}</pre> */}
									</Grid>
									<Grid xs={12} md={4}>
										<SummaryBar image={values.image} />
									</Grid>
								</Grid>
							</FormContext.Provider>
						</Form>
					);
				}}
			</Formik>
		</Box>
	);
};

export default AddProduct;
