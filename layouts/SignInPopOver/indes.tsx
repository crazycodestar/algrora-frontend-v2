import { useMutation } from "@apollo/client";
import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { useTheme, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form, Formik, FormikHelpers } from "formik";
import { FC, useEffect, useState } from "react";
import { FormInput } from "../../components/form";
import { LOGIN } from "../../graphql/auth.graphql";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import {
	LoginMutationResponse,
	MutationLoginArgs,
} from "../../graphql/generated/graphql";
import SignInValidationSchema from "../../validation/SignInValidation";

const PopOver = styled(Box)(({ theme }) => ({
	minWidth: "450px",
	padding: theme.spacing(2),
	borderRadius: theme.common.borderRadius.sm,
	backgroundColor: theme.common.colors.light.main,
}));

type initialValues = {
	username: string;
	password: string;
};

interface ISignInPopOver {
	onClose: () => void;
}

const SignInPopOver: FC<ISignInPopOver> = ({ onClose }) => {
	const [login, { data, loading, error }] = useMutation<
		LoginMutationResponse,
		MutationLoginArgs
	>(LOGIN);

	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (error) setErrorMessage(error.message);
	}, [error]);

	const handleCloseError = () => setErrorMessage(null);

	useEffect(() => {
		if (!data) return;
		console.log(data);
		onClose();
	}, [data]);

	const initialValues: initialValues = {
		username: "",
		password: "",
	};

	const handleSubmit = (
		values: initialValues,
		{ setSubmitting }: FormikHelpers<initialValues>
	) => {
		setSubmitting(true);
		login({
			variables: {
				userInput: {
					...values,
				},
			},
		});
		setSubmitting(false);
	};

	return (
		<PopOver>
			<Typography variant="h5" gutterBottom>
				Sign in
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={SignInValidationSchema}
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
							<FormInput name="username" label="Username or Email" />
							<FormInput name="password" type="password" label="Password" />
							<Box sx={{ display: "flex", justifyContent: "right" }}>
								<Button type="button">Sign Up</Button>
								<LoadingButton
									loading={loading}
									loadingPosition="start"
									type="submit"
									variant="contained"
								>
									Sign in
								</LoadingButton>
							</Box>
						</Box>
					</Form>
				)}
			</Formik>
		</PopOver>
	);
};

export default SignInPopOver;
