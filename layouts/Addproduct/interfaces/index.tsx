export interface IOption {
	name: string;
	price?: number;
	isPreOrderOption: boolean;
}

export interface IField {
	name: string;
	default: string;
	options: Array<IOption>;
}

export interface IInitialValues {
	baseName: string;
	image: {
		blob: Blob;
	} | null;
	products: Array<{
		name: string;
		price: number;
		description: string;
		fields?: Array<IField>;
	}>;
}
