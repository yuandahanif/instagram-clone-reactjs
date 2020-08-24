import React, { memo, useState, useCallback } from "react";
// import reactElementToJSXString from "react-element-to-jsx-string";
import reactStringReplace from "react-string-replace";
import moment from "moment";

import "./Article.scss";
import {
	ArticleDescription as description,
	Comments,
	User,
} from "../../Interfaces";

interface Props {
	description: description;
	comments: Comments[];
	user: User;
}

// * get date
const getDate = (date: any) => moment(date, "YYYYMMDD").fromNow();

// * caption parser
const captionParrser = (caption: string | undefined) => {
	let realCaption;

	// line break
	realCaption = reactStringReplace(caption, "/n", () => "<br/>");

	// Match @-mentions
	realCaption = reactStringReplace(
		realCaption,
		/@([-a-zA-Z0-9._]{3,25})/g,
		(match, i) => (
			<HashTag key={match + i} link={`https://www.instagram.com/${match}`}>
				@{match}
			</HashTag>
		)
	);

	// Match hashtags
	realCaption = reactStringReplace(realCaption, /#(\w+)/g, (match, i) => (
		<HashTag
			key={match + i}
			link={`https://www.instagram.com/explore/tags/${match}/`}>
			#{match}
		</HashTag>
	));

	// tampil di caption max 13 kata.
	let captionArray = caption?.split(" ");
	let shortCaption = captionArray?.slice(0, 13).join(" ");

	return { shortCaption, realCaption };
};

const MoreButton: React.FC<{
	onClick: any;
}> = memo(({ onClick }) => {
	return (
		<span className='moreButton'>
			<button onClick={onClick}>...more</button>
		</span>
	);
});

const HashTag: React.FC<{ link: string }> = memo(({ children, link }) => {
	return (
		<a href={link} className='hashtag'>
			{children}
		</a>
	);
});

const Comment: React.FC<{ comment: Comments }> = ({ comment }) => {
	return (
		<div className='comment'>
			<Username user={comment.user} />
			<span className='comment__section'>{comment.comment}</span>
		</div>
	);
};

const Username: React.FC<{ user: User }> = ({ user }) => {
	return (
		<span className='username'>
			<a href={user.url}>{user.name}</a>
		</span>
	);
};

// * Main

const ArticleDescription: React.FC<Props> = memo(
	({ comments, description, user }) => {
		const { realCaption, shortCaption } = captionParrser(description.captions);
		const [displayFullCaption, setDisplayFullCaption] = useState(false);
		const onMoreButtonClick = useCallback(() => {
			setDisplayFullCaption(true);
		}, []);

		return (
			<div className='article__description'>
				{/* caption */}

				<div className='article__description__caption'>
					{/* love count */}
					<span className='article__description__caption__loveCount'>
						<a href='#'>124.123 likes</a>
					</span>
					{/* username + caption*/}
					<Username user={user} />
					<span className='article__description__caption__caption'>
						{displayFullCaption ? realCaption : shortCaption}
						{/* {console.log(captionParrser(description.captions))} */}
					</span>
					{!displayFullCaption && <MoreButton onClick={onMoreButtonClick} />}
				</div>

				{/* comment */}
				<div className='article__description__comment'>
					{/* view all comment */}
					{comments?.length >= 2 && (
						<div className='article__description__comment__viewAll'>
							<a href=''>View all {comments?.length} commens</a>
						</div>
					)}

					{/* list comment */}
					<div className='article__description__comment__list'>
						{/* username + comment + emmot love */}
						{comments?.slice(0, 2).map((comment) => (
							<Comment key={comment.id} comment={comment} />
						))}
					</div>

					{/* createdAt */}
					<div className='article__description__comment__createdAt'>
						<a href='#'>{getDate(description.createdAt)}</a>
					</div>
				</div>
			</div>
		);
	}
);

export default ArticleDescription;
