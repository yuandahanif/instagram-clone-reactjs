import React from "react";

import { User, Article as ArticleInterface } from "../../Interfaces";
import "./Home.css";

import { Article } from "../../Components";

interface Props {
	data: {
		user: User | any;
		// article?: ArticleInterface[];
	};
}

const Home: React.FC<Props> = ({ data }) => {
	return (
		<div className='home'>
			{/* article */}
			<div className='home__article'>
				<Article user={data.user} article={[]} />
				<Article user={data.user} article={[]} />
			</div>
			{/* aside */}
			<aside className='home__aside'>
				<p>yuanda.yuu</p>
			</aside>
		</div>
	);
};

export default Home;
