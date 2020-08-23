import React, { memo } from "react";

import "./Article.scss";
import { Article as ArticleInterface } from "../../Interfaces";

import ArticleHeader from "./ArticleHeader";
import ArticleImages from "./ArticleImage";
import ArticleActionBar from "./ArticleActionBar";
import ArticleDescription from "./ArticleDescription";
import { ArticleCommentAdd } from "./ArticleCommentAdd";
interface Props {
	article: ArticleInterface;
}

const Article: React.FC<Props> = memo(({ article }) => {
	const isMultipleImage: boolean = article.images.length > 1 ? true : false;
	return (
		<div className='article'>
			<ArticleHeader user={article.user} />
			<ArticleImages images={article.images} />
			<ArticleActionBar
				multipleImage={isMultipleImage}
				isLoved={article.isLoved}
			/>
			<ArticleDescription
				comments={article.comments}
				description={article.descriptions}
				user={article.user}
			/>
			<ArticleCommentAdd />
		</div>
	);
});

export default Article;
