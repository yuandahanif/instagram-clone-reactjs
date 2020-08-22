import React, { memo } from "react";
// @ts-ignore
import { Icon } from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";

import "./Article.scss";
import { User } from "../../Interfaces";

interface Props {
	user: User;
}

const ArticleHeader: React.FC<Props> = memo(({ user }) => {
	return (
		<div className='article__author'>
			<div className='article__author__avatar'>
				<img
					className='article__author__avatar__image'
					src='https://picsum.photos/400/300'
					alt={user.name}
				/>
			</div>
			<div className='article__author__description'>
				<div className='article__author__description__name'>
					<a className='article__author__description__name__name' href='#'>
						{user.name}
					</a>
					<a className='article__author__description__name__location' href='#'>
						Isekai, another isekai
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
