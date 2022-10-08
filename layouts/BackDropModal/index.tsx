import { Modal } from "@mui/material";
import { FC, useContext } from "react";
import SignInPopOver from "../SignInPopOver/indes";
import BackDropContext, {
	BackDropContextType,
} from "../../context/BackDropContext";

const BackDropModal: FC = () => {
	const { value, setValue } = useContext(
		BackDropContext
	) as BackDropContextType;

	const handleClose = () => {
		if (value.userQueryResult) {
			console.log("refetching");
			value.userQueryResult.refetch();
		}
		setValue((init) => ({ ...init, isShowing: false }));
	};
	return (
		<Modal
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			open={Boolean(value?.isShowing)}
			onClose={handleClose}
		>
			<SignInPopOver onClose={handleClose} />
		</Modal>
	);
};

export default BackDropModal;
