import { FC } from "react";
import { FieldArray, FieldArrayRenderProps } from "formik";

interface IFormArrayProps {
	name: string;
	children: (arrayHelper: FieldArrayRenderProps) => JSX.Element;
}

const FormArray: FC<IFormArrayProps> = ({ name, children }) => {
	return (
		<FieldArray name={name} render={(arrayHelper) => children(arrayHelper)} />
	);
};

export default FormArray;
