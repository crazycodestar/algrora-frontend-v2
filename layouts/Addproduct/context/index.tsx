import { createContext } from "react";
import { IInitialValues } from "../interfaces";

export type IFormContext = {
	values: IInitialValues;
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean | undefined
	) => void;
};

export const FormContext = createContext<IFormContext | null>(null);
