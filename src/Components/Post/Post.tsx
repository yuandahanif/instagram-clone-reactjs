import React from "react";

import "./Post.css";
import { User, Post as PostInterface} from "../../Interfaces";

interface Props {
  user: User | any;
  post: PostInterface[];
}

const Post: React.FC<Props> = ({ user }) => {
	return (
		<div className="header">
      <img
        className="header__logo"
				alt='Instagram Logo'
				src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
			></img>
      <div className="header__search">
        search
      </div>
      <div className="header__navigation" >
        user
      </div>
		</div>
	);
};

export default Post;
