import * as yup from "yup";

const SignUpValidationSchema = yup.object({
	username: yup.string().min(3).max(16).required(),
	email: yup
		.string()
		.email("Field should contain a valid e-mail")
		.max(255)
		.required("E-mail is required"),
	address: yup.string().required(),
	password: yup.string().min(8).max(16).required(),
});

export default SignUpValidationSchema;
