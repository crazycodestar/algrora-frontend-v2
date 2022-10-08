import { Switch, SwitchProps } from "@mui/material";
import { FC } from "react";
import { FieldAttributes, useField, FieldHookConfig } from "formik";

interface IFormCheckbox extends SwitchProps {
	name: string;
}

const FormCheckbox: FC<IFormCheckbox> = ({ ...props }) => {
	const [field, meta] = useField(props as FieldHookConfig<{}>);

	return <Switch {...field} {...props} />;
};

export default FormCheckbox;
