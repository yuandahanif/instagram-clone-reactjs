import React, { memo } from "react";

import { User } from "../../Interfaces/articles";
import "./style.scss";

interface Props {
	user: User;
}
const SuggestedUser: React.FC = memo(() => {
	return (
		<div className='aside__suggestion__list__item'>
			<img
				src='https://picsum.photos/64'
				alt='avatar'
				className='aside__suggestion__list__item__avatar'
			/>
			<div className='aside__suggestion__list__item__description'>
				<a href='#'>nama.akun</a>
				<span>Followed by nama.akun.2</span>
			</div>
			<a href='' className='aside__suggestion__list__item__follow'>
				Follow
			</a>
		</div>
	);
});

const Aside: React.FC<Props> = ({ user }) => {
	return (
		<div className='aside'>
			{/* profile */}
			<div className='aside__profile'>
				{/* avatar */}
				<img
					src={user.avatar}
					alt={user.username}
					className='aside__profile__avatar'
				/>
				<div className='aside__profile__description'>
					{/* username */}
					<a href='#' className='aside__profile__description__username'>
						{user.username}
					</a>
					{/* name */}
					<a href='#' className='aside__profile__description__name'>
						{user.name}
					</a>
				</div>
			</div>

			{/* suggests */}
			<div className='aside__suggestion'>
				<div className='aside__suggestion__header'>
					<span>Suggestions For You</span>
					<a href='#'>See All</a>
				</div>
				<div className='aside__suggestion__list'>
					{/* list item */}
					<SuggestedUser />
					<SuggestedUser />
				</div>
			</div>

			{/* footer */}
			<div className='aisde__footer'>
				<nav className='aside__footer__nav'>
					<a href=''>About</a>
					<a href=''>Help</a>
					<a href=''>Press</a>
					<a href=''>API</a>
					<a href=''>Jobs</a>
					<a href=''>Privacy</a>
					<a href=''>Terms</a>
					<a href=''>Locations</a>
					<a href=''>Top Accounts</a>
					<a href=''>Hashtag</a>
					<a href=''>Language</a>
				</nav>
				<span className='aside__footer__copyright'>
					© 2020 Instagram from Facebook
				</span>
			</div>
		</div>
	);
};

export default Aside;
