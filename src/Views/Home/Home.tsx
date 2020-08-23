import React from "react";

import { Article as ArticleInterface } from "../../Interfaces";
import "./Home.css";

import { Article } from "../../Components";

interface Props {
	articles: ArticleInterface[];
}

const Home: React.FC<Props> = ({ articles }) => {
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
				<p>yuanda.yuu</p>
			</aside>
		</div>
	);
};

export default Home;
