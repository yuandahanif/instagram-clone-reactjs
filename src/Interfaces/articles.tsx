// articles
export interface User {
	avatar: string;
	name: string;
	username: string;
	url: string;
	location?: {
		name: string;
		url: string;
	};
}

export interface Comments {
	id: string;
	user: User;
	comment: string;
	isLoved: boolean;
}

export interface ArticleDescription {
	love: number;
	captions?: string;
	createdAt: number;
}

export interface Article {
	id: string;
	user: User;

	isLoved: boolean;

	images: {
		url: string;
	}[];

	descriptions: ArticleDescription;

	comments: Comments[];
}
