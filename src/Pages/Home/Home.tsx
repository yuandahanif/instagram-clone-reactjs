import React from "react";

import { Article as ArticleInterface, User } from "../../Interfaces/articles";

import "./style.scss";

import { Article, Aside, Story } from "../../Components";

interface Props {
	articles: ArticleInterface[];
	user: User;
}

const Home: React.FC<Props> = ({ articles, user }) => {
	return (
		<div className='home'>
			{/* article */}
			<div className='home__article'>
				<Story />

				{articles.map((article) => (
					<Article key={article.id} article={article} />
				))}
			</div>

			{/* aside */}
			<aside className='home__aside'>
				<Aside user={user} />
			</aside>
		</div>
	);
};

export default Home;
