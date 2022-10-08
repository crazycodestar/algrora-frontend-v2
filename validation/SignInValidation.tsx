import * as yup from "yup";

const SignInValidationSchema = yup.object({
	username: yup.string().min(3).max(16).required(),
	password: yup.string().min(8).max(16).required(),
});

export default SignInValidationSchema;
