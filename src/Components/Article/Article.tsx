import React, { memo } from "react";

import "./Article.css";
import { User, Article as ArticleInterface } from "../../Interfaces";

import ArticleImages from "./ArticleImage";
import ArticleActionBar from "./ArticleActionBar";
import ArticleHeader from "./ArticleHeader";
interface Props {
	user: User;
	article?: ArticleInterface;
}

const Article: React.FC<Props> = memo(({ user, article }) => {
	return (
		<div className='article'>
			<ArticleHeader user={user} />
			<ArticleImages
				images={[
					{ url: "https://picsum.photos/400/300" },
					{ url: "https://picsum.photos/400/300" },
					{ url: "https://picsum.photos/400/300" },
				]}
			/>
			<ArticleActionBar />
			<div className='article__description'>
				<section className='article__descroption__caption'>
					<a href='#' className='article__descroption__caption__like'>
						2.089 likes
					</a>
					<span className='article__descroption__caption__span__container'>
						<a
							href={user.url}
							className='article__descroption__caption__span__container__username'>
							{user.name}
						</a>{" "}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
						delectus nihil ipsum autem unde. Natus esse, excepturi dolorem
						eaque, fugiat facilis, accusantium voluptates odio praesentium eos
						et? Eos, necessitatibus ipsum!
						<br />
						<a
							href='#'
							className='article__descroption__caption__span__container__hashtag'>
							#lorem
						</a>
						<a
							href='#'
							className='article__descroption__caption__span__container__hashtag'>
							#lorem
						</a>
					</span>
					<span className='article__descroption__caption__more '>
						<a href=''>...more</a>
					</span>
				</section>
			</div>
			<div className='article__comment'>
				{/* link view more comment */}
				<span className='article__comment__viewAll'>
					<a href=''>View all 20.123 comments</a>
				</span>
				<div className='article__list__comment'>
					<span className='article__list__comment__username'>
						<a href=''>nama.akun</a>{" "}
					</span>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Repudiandae sed saepe deserunt harum porro quos, officia, velit
						eligendi laudantium quo praesentium aliquid eum illo officiis ex
						repellendus animi enim possimus!
					</span>
				</div>
			</div>
			<a href='#' className='article__description__cratedAt'>
				2 HOURS AGO
			</a>
			<div className='article__description__post__comment'>
				<form className="article__description__post__comment__form">
					<div className='article__description__post__comment__form__inputGroup'>
						<input
							placeholder="Add a comment"
							className='article__description__post__comment__form__inputGroup__input'
							type='text'></input>
						<button className="article__description__post__comment__form__inputGroup__submit" type='submit'>Post</button>
					</div>
				</form>
			</div>
		</div>
	);
});

export default Article;
