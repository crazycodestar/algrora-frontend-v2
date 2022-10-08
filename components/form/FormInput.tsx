import { BaseTextFieldProps, TextField } from "@mui/material";
import { FieldHookConfig, useField } from "formik";
import { FC } from "react";

interface IformInputProps extends BaseTextFieldProps {
	name: string;
}

const FormInput: FC<IformInputProps> = ({ ...props }) => {
	const [field, meta] = useField(props as FieldHookConfig<any>);
	const error = meta.touched && meta.error;
	return (
		<TextField
			{...field}
			{...props}
			error={Boolean(error)}
			helperText={error}
		/>
	);
};

export default FormInput;
