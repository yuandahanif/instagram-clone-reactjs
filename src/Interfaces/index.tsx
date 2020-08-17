export interface User {
	avatar: string;
	name: string;
	url: string;
	location?: "";
}

export interface Post {
	user: User;
	images: [];
	descriptions: {
		like: number;
		captions: string;
		hashTag: Array<[]>;
		createdAt: number;
	};
};
