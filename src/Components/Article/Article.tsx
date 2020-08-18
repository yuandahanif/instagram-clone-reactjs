import React from "react";
import { Icon } from "@mdi/react";
import {
	mdiDotsHorizontal,
	mdiHeart,
	mdiHeartOutline,
	mdiMessageOutline,
	mdiSendOutline,
	mdiBookmark,
	mdiBookmarkOutline,
} from "@mdi/js";

import "./Article.css";
import { User, Article as ArticleInterface } from "../../Interfaces";

interface Props {
	user: User | any;
	article: ArticleInterface[];
}

const Article: React.FC<Props> = ({ user }) => {
	return (
		<div className='article'>
			<div className='article__author'>
				<div className='article__author__avatar'>
					<img
						className='article__author__avatar__image'
						src='https://picsum.photos/200'
						alt='username'
					/>
				</div>
				<div className='article__author__description'>
					<div className='article__author__description__name'>
						<a className='article__author__description__name__name' href='#'>
							yuanda
						</a>
						<a
							className='article__author__description__name__location'
							href='#'>
							Isekai, another isekai
						</a>
					</div>
					<div className='article__author__description__option'>
						<Icon path={mdiDotsHorizontal} size={1} />
					</div>
				</div>
			</div>
			<div className='article__images__container'>
				<img
					className='article__image'
					src='https://picsum.photos/400/300'
					alt='article'></img>
				{/* gambar */}
			</div>
			<div className='article__actionBar'>{/* like share dll */}</div>
			<div className='article__description'>
				<div className='article__descroption__caption'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
						delectus nihil ipsum autem unde. Natus esse, excepturi dolorem
						eaque, fugiat facilis, accusantium voluptates odio praesentium eos
						et? Eos, necessitatibus ipsum!
					</p>
				</div>
			</div>
			<div className='article__comment'>
				{/* link view more comment */}
				<div className='article__list__comment'>
					<div>{/* nama komen dan like komen */}</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
