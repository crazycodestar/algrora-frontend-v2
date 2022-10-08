import { ChangeEvent, FC, InputHTMLAttributes, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useField, FieldHookConfig } from "formik";

interface ICRUD {
	handleSelectFile: () => void;
	filedata?: any;
	blob?: string;
}
type blob = { blob: Blob };
interface IFormFilePickerProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	render: (arg0: ICRUD) => JSX.Element;
	accept: string;
	onSetFile: (file: blob) => void;
}

const FormFilePicker: FC<IFormFilePickerProps> = ({
	render,
	accept,
	onSetFile,
	...props
}) => {
	const [field, meta] = useField(props as FieldHookConfig<any>);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const handleSelectFile = () => {
		if (inputRef?.current) inputRef.current.click();
	};
	const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		const image = e.currentTarget.files;
		if (!image || !image!.length || !image[0]) return;
		onSetFile({ blob: image![0] });
	};
	const error = meta.touched && meta.error;
	return (
		<Box>
			{render({ handleSelectFile })}
			{error ? (
				<Typography color="error" variant="overline">
					{error}
				</Typography>
			) : null}
			<input
				{...props}
				{...field}
				value=""
				onChange={handleFieldChange}
				type="file"
				accept={accept}
				style={{ display: "none" }}
				ref={inputRef}
			/>
		</Box>
	);
};

export default FormFilePicker;
