import React from "react";
import moment from "moment";

import { Article, User } from "./Interfaces/index";

import Home from "./Views/Home/Home";
import "./App.scss";
import { Header } from "./Components";

const getDate = (): number => {
	return moment().millisecond();
};

function App() {
	const user: User = {
		avatar: "https://picsum.photos/32",
		name: "yuanda.yuu",
		url: "https://www.instagram.com/yuanda.yuu/",
	};

	const articles: Article[] = [
		{
			id: "1",
			user: { ...user, location: { name: "isekai, isekai", url: "#" } },
			images: [
				{ url: "https://picsum.photos/400/300" },
				{ url: "https://picsum.photos/400/300" },
				{ url: "https://picsum.photos/400/300" },
			],
			isLoved: true,
			descriptions: {
				love: 17,
				captions:
					"lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sed #ipsum saepe deserunt harum porro quos \n #lorem",
				createdAt: getDate(),
			},
			comments: [],
		},
		{
			id: "2",
			user: user,
			images: [{ url: "https://picsum.photos/400/300" }],
			isLoved: false,
			descriptions: {
				love: 1123,
				captions:
					"lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae @yuanda.yuu sed saepe deserunt @lisaa__ harum porro quos @yuanda",
				createdAt: getDate(),
			},
			comments: [
				{
					id: "1",
					comment: "lorem lah, apa lagi.",
					isLoved: false,
					user,
				},
				{
					id: "2",
					comment: "lorem dong, ipsum.",
					isLoved: false,
					user,
				},
				{
					id: "3",
					comment: "lorem gang, lorem ipsum.",
					isLoved: false,
					user,
				},
			],
		},
	];
	return (
		<div className='body'>
			<Header user={user} />
			<main className='body__main'>
				{/* story-post  | sidebar  & profile & norification & direct message & explore*/}
				<Home articles={articles} />

				{/* footer */}
			</main>
		</div>
	);
}

export default App;
