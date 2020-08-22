import React from "react";
import Home from "./Views/Home/Home";
import "./App.scss";
import { Header } from "./Components";

function App() {
	const user = {
		user: {
			avatar:
				"https://instagram.fcgk8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75616328_1334445673393712_5971469632094076928_n.jpg?_nc_ht=instagram.fcgk8-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=duAsz-iVaOIAX9IlTVC&oh=793a239b284f7948f842993bb8ca05f4&oe=5F689D3E",
			name: "Yuanda",
			url: "https://www.instagram.com/yuanda.yuu/",
		},
	};
	return (
		<div className='body'>
			<Header user={user} />
			<main className='body__main'>
				{/* story-post  | sidebar  & profile & norification & direct message & explore*/}
				<Home data={user} />

				{/* footer */}
			</main>
		</div>
	);
}

export default App;
