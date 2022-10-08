import * as yup from "yup";

const AddProductValidationSchema = yup.object().shape({
	image: yup.object().required("image is required"),
	products: yup.array().of(
		yup.object({
			name: yup.string().min(3).max(16).required(),
			price: yup.number().min(100).required(),
			description: yup.string().min(10).max(400).required(),
			fields: yup.array().of(
				yup.object({
					name: yup.string().min(3).max(16).required(),
					default: yup.string().required(),
					options: yup.array().of(
						yup.object({
							name: yup.string().min(3).max(16).required(),
							price: yup.number(),
							isPreOrderDefault: yup.boolean(),
						})
					),
				})
			),
		})
	),
});

export default AddProductValidationSchema;
