import { OperationVariables, QueryResult } from "@apollo/client";
import { createContext, Dispatch, SetStateAction, useState, FC } from "react";
import { User } from "../graphql/generated/graphql";

export type BackDropData = {
	// userQueryResult?: QueryResult<User, OperationVariables>;
	user?: User;
	isShowing: boolean;
};

export type BackDropContextType = {
	value: BackDropData;
	setValue: Dispatch<SetStateAction<BackDropData>>;
};

const BackDropContext = createContext<BackDropContextType | null>(null);

interface IDropDownProvider {
	children: JSX.Element;
}

export const BackDropProvider: FC<IDropDownProvider> = ({ children }) => {
	const [value, setValue] = useState<BackDropData>({
		isShowing: false,
	});
	return (
		<BackDropContext.Provider value={{ value, setValue }}>
			{children}
		</BackDropContext.Provider>
	);
};

export default BackDropContext;
