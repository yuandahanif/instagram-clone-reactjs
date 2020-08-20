import React, { memo } from "react";
// @ts-ignore
import { Icon } from "@mdi/react";
import {
	mdiDotsHorizontal,
} from "@mdi/js";

import "./Article.css";
import { User, Article as ArticleInterface } from "../../Interfaces";

import ArticleImages from "./ArticleImage";
import ArticleActionBar from "./ArticleActionBar";
interface Props {
	user: User | any;
	article?: ArticleInterface;
}

const Article: React.FC<Props> = memo(({ user }) => {
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
			<ArticleImages
				images={[
					{ url: "https://picsum.photos/400/300" },
					{ url: "https://picsum.photos/400/300" },
					{ url: "https://picsum.photos/400/300" },
				]}
			/>
			<ArticleActionBar />
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
});

export default Article;
