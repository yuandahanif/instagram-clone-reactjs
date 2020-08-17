import React from "react";
import { Icon } from "@mdi/react";
import { mdiHeart } from "@mdi/js";

import { User, Post as PostInterface } from "../../Interfaces";
import "./Style.css";

import { Header, Post } from "../../Components";

interface Props {
	data: {
		user: User | any;
		posts?: PostInterface[];
	};
}

const Home: React.FC<Props> = ({ data }) => {
	return (
		<div className='container'>
			{/* {data.user?.name} */}
			<Header user={data.user} />
			{/* <Icon path={mdiHeart} /> */}
			{/* header */}
			{/* story  | sidebar */}
			{/* posts */}
		</div>
	);
};

export default Home;
