import React, { memo } from "react";
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

const captionParrser = (
	caption: string | undefined,
	hashtag: { name: string; url: string }[]
) => {
	// tampil di caption max 13 kata.
	// untuk hashtag _#_hashtag_#_
	let captionArray = caption?.split(" ");
	let shortCaption = captionArray?.slice(0, 13);

	let realCaption;
	if (hashtag.length > 0) {
		console.log("hashtag", hashtag);
		realCaption = reactStringReplace(caption, "_#_hashtag_#_", (match, i) =>
			// <HashTag link={hashtag[i].url}>{hashtag[i].name}</HashTag>
			{
				console.log("i =>>>>> ", i);
				return "asdad";
			}
		);
	} else {
		realCaption = caption;
	}

	return { shortCaption, realCaption };
};

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
						{description.captions}
						{console.log(
							captionParrser(description.captions, description.hashTag)
						)}
					</span>
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
