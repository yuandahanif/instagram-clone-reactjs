import React from "react";

import "./style.scss";
import { User } from "../../Interfaces/articles";

interface Props {
	user: User | any;
}

const Header: React.FC<Props> = ({ user }) => {
	return (
		<div className='header'>
			<div className='header__container'>
				<img
					className='header__container__logo'
					alt='Instagram Logo'
					src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img>
				<div className='header__container__search'>search</div>
				<div className='header__container__navigation'>user</div>
			</div>
		</div>
	);
};

export default Header;
