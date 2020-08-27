import React, { memo } from "react";
// @ts-ignore
import { Icon } from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";

import { User } from "../../Interfaces/articles";

interface Props {
	user: User;
}

export const UserAvatar: React.FC<Props> = memo(({ user }) => {
	return (
		<div className='article__author__avatar'>
			<img
				className='article__author__avatar__image'
				src={user.avatar}
				alt={user.username}
			/>
		</div>
	);
});

const ArticleHeader: React.FC<Props> = memo(({ user }) => {
	return (
		<div className='article__author'>
			<UserAvatar user={user} />
			<div className='article__author__description'>
				<div className='article__author__description__name'>
					<a className='article__author__description__name__name' href='#'>
						{user.username}
					</a>
					<a
						className='article__author__description__name__location'
						href={user.location?.url}>
						{user.location?.name}
					</a>
				</div>
				<div className='article__author__description__option'>
					<Icon path={mdiDotsHorizontal} size={1} />
				</div>
			</div>
		</div>
	);
});

export default ArticleHeader;
