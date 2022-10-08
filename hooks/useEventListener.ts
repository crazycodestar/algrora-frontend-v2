import { FC, useEffect } from "react";

interface IUseEventListenerProps<K extends keyof DocumentEventMap> {
	event: K;
	callback(event: DocumentEventMap[K]): void;
}

const useEventListener = <K extends keyof DocumentEventMap>({
	event,
	callback,
}: IUseEventListenerProps<K>) => {
	useEffect(() => {
		document.addEventListener(event, callback);

		return () => {
			document.removeEventListener(event, callback);
		};
	}, []);
};

export default useEventListener;
