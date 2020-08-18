import React from "react";
import Home from "./Views/Home/Home";
import "./App.css";
import { Header } from "./Components";

function App() {
	const user = {
		user: {
			avatar:
				"https://instagram.fcgk8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75616328_1334445673393712_5971469632094076928_n.jpg?_nc_ht=instagram.fcgk8-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=6jKqpBYa9xMAX8dn5s9&oh=ec22f9c51424de104f10743abdfe6e9d&oe=5F64A8BE",
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
