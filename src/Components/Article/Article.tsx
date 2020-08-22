import React, { memo } from "react";

import "./Article.scss";
import { User, Article as ArticleInterface } from "../../Interfaces";

import ArticleHeader from "./ArticleHeader";
import ArticleImages from "./ArticleImage";
import ArticleActionBar from "./ArticleActionBar";
import ArticleDescription from "./ArticleDescription";
interface Props {
	user: User;
	article?: ArticleInterface;
}

const Article: React.FC<Props> = memo(({ user, article }) => {
	return (
		<div className='article'>
			<ArticleHeader user={user} />
			<ArticleImages
				images={[
					{ url: "https://picsum.photos/400/300" },
					{ url: "https://picsum.photos/400/300" },
					{ url: "https://picsum.photos/400/300" },
				]}
			/>
			<ArticleActionBar />
			<ArticleDescription user={user} />
		</div>
	);
});

export default Article;
