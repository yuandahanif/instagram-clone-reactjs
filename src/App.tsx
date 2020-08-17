import React from "react";
import Home from "./Views/Home/Home";

function App() {
	return (
		<Home
			data={{
				user: {
					avatar:
						"https://instagram.fcgk8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75616328_1334445673393712_5971469632094076928_n.jpg?_nc_ht=instagram.fcgk8-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=6jKqpBYa9xMAX8dn5s9&oh=ec22f9c51424de104f10743abdfe6e9d&oe=5F64A8BE",
					name: "Yuanda",
					url: "https://www.instagram.com/yuanda.yuu/",
				},
			}}
		/>
	);
}

export default App;
