import React, { memo } from "react";

export const ArticleCommentAdd: React.FC = memo(() => {
	return (
		<section className='article__comment__form'>
			<form
				action='#
        '>
				<div className='article__comment__form__inputGroup'>
					<input type='text' name='comment' placeholder='Add a comment...' />
					<button type='submit'>Post</button>
				</div>
			</form>
		</section>
	);
});
