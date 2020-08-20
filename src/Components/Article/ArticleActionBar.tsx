import React, { memo, useRef, useState, useCallback } from "react";
import { useSpring, animated, config } from "react-spring";
import { Icon } from "@mdi/react";
import {
	mdiHeart,
	mdiHeartOutline,
	mdiMessageOutline,
	mdiSendOutline,
	mdiBookmark,
	mdiBookmarkOutline,
} from "@mdi/js";

import "./ArticleActionBar.css";

interface Props {
	like?: number;
}

const ArticleActionBar: React.FC<Props> = memo(({ like }) => {
	const loveRef: React.MutableRefObject<null> = useRef(null);
	const [isLoved, setIsLoved] = useState(false);

	// const onLoveClick = useCallback(() => {
	// 	() => {
	//     console.log('haha');

	// 		setIsLoved(!isLoved);
	// 	};
	// }, []);
	const loveSpring = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		onStart: () => console.log("its runing"),
		config: config.slow,
	});

	return (
		<section className='article__actionBar'>
			<span className='article__actionBar__icon__container'>
				<button
					ref={loveRef}
					onClick={() => {
						setIsLoved(!isLoved);
					}}
					className='article__actionBar__icon__container__button'>
					{isLoved ? (
						<animated.div style={loveSpring}>
							<Icon
								className='article__actionBar__icon__container__button__icon'
								path={mdiHeart}
								size={1.2}
							/>
						</animated.div>
					) : (
						<Icon
							className='article__actionBar__icon__container__button__icon'
							path={mdiHeartOutline}
							size={1.2}
						/>
					)}
				</button>
			</span>

			<span className='article__actionBar__icon__container'>
				<button className='article__actionBar__icon__container__button'>
					<Icon
						className='article__actionBar__icon__container__button__icon'
						path={mdiMessageOutline}
						size={1.2}
					/>
				</button>
			</span>

			<span className='article__actionBar__icon__container'>
				<button className='article__actionBar__icon__container__button'>
					<Icon
						className='article__actionBar__icon__container__button__icon send__icon'
						path={mdiSendOutline}
						size={1.2}
					/>
				</button>
			</span>

			<span className='article__actionBar__icon__container bookmark__icon'>
				<button className='article__actionBar__icon__container__button'>
					<Icon
						className='article__actionBar__icon__container__button__icon '
						path={mdiBookmarkOutline}
						size={1.2}
					/>
				</button>
			</span>
		</section>
	);
});

export default ArticleActionBar;
