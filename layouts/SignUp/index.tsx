import { useMutation } from "@apollo/client";
import { Alert, Button, Typography, Box } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { FC, useEffect, useState } from "react";
import { FormInput } from "../../components/form";
import { SIGNUP } from "../../graphql/auth.graphql";
import { LoadingButton } from "@mui/lab";
import {
	MutationSignUpArgs,
	SignUpMutationResponse,
} from "../../graphql/generated/graphql";
import SignUpValidationSchema from "../../validation/SignUpValidation";

type initialValues = {
	username: string;
	email: string;
	address: string;
	password: string;
};

const SignUp: FC = () => {
	const [signUp, { data, loading, error }] = useMutation<
		SignUpMutationResponse,
		MutationSignUpArgs
	>(SIGNUP);

	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (error) setErrorMessage(error.message);
	}, [error]);

	const handleCloseError = () => setErrorMessage(null);

	useEffect(() => {
		if (!data) return;
		console.log(data);
	}, [data]);

	const initialValues: initialValues = {
		username: "",
		email: "",
		address: "",
		password: "",
	};

	const handleSubmit = (
		values: initialValues,
		{ setSubmitting }: FormikHelpers<initialValues>
	) => {
		const { address, username, email, password } = values;
		setSubmitting(true);
		signUp({
			variables: {
				userInput: {
					address,
					username,
					email,
					password,
				},
			},
		});
		setSubmitting(false);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Typography variant="h5" gutterBottom>
				Sign up
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={SignUpValidationSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
							{errorMessage && (
								<Alert severity="error" onClose={handleCloseError}>
									{errorMessage}
								</Alert>
							)}
							<FormInput name="username" label="Username" />
							<FormInput name="email" label="Email" />
							<FormInput name="address" label="Address(e.g. Hall A000)" />
							<FormInput name="password" type="password" label="Password" />
							<Box sx={{ display: "flex", justifyContent: "right" }}>
								<Button type="button">Sign In</Button>
								<LoadingButton
									loading={loading}
									loadingPosition="start"
									type="submit"
									variant="contained"
								>
									Sign Up
								</LoadingButton>
							</Box>
						</Box>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default SignUp;
