const generatePath = (root: string, ...others: Array<string | number>) => {
	let main = root;
	others.forEach((branch) => (main += `.${branch}`));
	return main;
};

export { generatePath };
