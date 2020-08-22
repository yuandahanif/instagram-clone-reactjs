import React, { memo } from "react";

import "./Article.scss";
import { User, Article as ArticleInterface } from "../../Interfaces";

interface Props {
	user: User;
	article?: ArticleInterface;
}

const HashTag: React.FC = memo(({ children }) => {
	return (
		<a href='#' className='hashtag'>
			{children}
		</a>
	);
});

const Comment: React.FC = () => {
	return (
		<div className='comment'>
			<Username> nama.akun </Username>
			<span className='comment__section'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
				sed saepe deserunt harum porro quos,
			</span>
		</div>
	);
};

const Username: React.FC = ({ children }) => {
	return (
		<span className='username'>
			<a href='#'>{children ? children : "yuanda.yuu"}</a>
		</span>
	);
};

const ArticleDescription: React.FC<Props> = memo(({ user, article }) => {
	return (
		<div className='article__description'>
			{/* caption */}

			<div className='article__description__caption'>
				{/* love count */}
				<span className='article__description__caption__loveCount'>
					<a href=''>124.123 likes</a>
				</span>
				{/* username + caption*/}
				<Username />
				<span className='article__description__caption__caption'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero
					saepe reiciendis corrupti aliquam modi quibusdam eius voluptas beatae
					quas, mollitia, dignissimos necessitatibus. Porro suscipit impedit
					quos quaerat, consequuntur natus?
					<br />
					<br />
					<HashTag>#lorem</HashTag>
					<HashTag>#ipsum</HashTag>
				</span>
			</div>

			{/* comment */}
			<div className='article__description__comment'>
				{/* view all comment */}
				<div className='article__description__comment__viewAll'>
					<a href=''>View all 201.231 commens</a>
				</div>

				{/* list comment */}
				<div className='article__description__comment__list'>
					{/* username + comment + emmot love */}
					<Comment />
					<Comment />
				</div>

				{/* createdAt */}
				<div className='article__description__comment__createdAt'>
					<a href='#'>22 HOURS AGO</a>
				</div>
			</div>

			{/* post comment */}
			<section className='article__description__form'>
				<form
					action='#
        '>
					<div className='article__description__form__inputGroup'>
						<input type='text' name='comment' placeholder="Add a comment..." />
						<button type='submit'>Post</button>
					</div>
				</form>
			</section>
			{/* input + button */}
		</div>
	);
});

export default ArticleDescription;
