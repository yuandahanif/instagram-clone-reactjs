import React from "react";

import { Article as ArticleInterface, User } from "../../Interfaces";
import "./Home.scss";

import { Article, Aside } from "../../Components";

interface Props {
	articles: ArticleInterface[];
	user: User;
}

const Home: React.FC<Props> = ({ articles, user }) => {
	return (
		<div className='home'>
			{/* article */}
			<div className='home__article'>
				{/* loop article */}

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
