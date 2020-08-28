import React, {
	useRef,
	useState,
	memo,
	forwardRef,
	useCallback,
	useEffect,
} from "react";
import { User } from "../../Interfaces/articles";

import "./style.scss";

interface Props {
	stories?: StoryProps[];
}

interface StoryProps {
	user: User;
	viewed: number;
	data: {
		url: String;
		tag?: [];
		mentions?: [];
	}[];
}

interface ListProps {
	ref?: React.Ref<any>;
	stories?: StoryProps;
}

const StoryItem: React.FC<ListProps> = memo(
	forwardRef(({ stories }, ref) => {
		return (
			<li>
				<a href='#'>
					<div className='story__list__item'>
						<div className='story__list__item__image'>
							<img src='https://icsum.photos/200' alt='story' />
						</div>
						<span className='story__list__item__profileName'>Nama.akun</span>
					</div>
				</a>
			</li>
		);
	})
);

const Story: React.FC<Props> = () => {
	let arr = Array(10).fill("arr");

	const [storyWidth, setStoryWidth] = useState<null | undefined | number>(0);
	const storyRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const elm = storyRef.current;
		setStoryWidth(elm?.getBoundingClientRect().width);
		console.log("storyRef", elm);
		return () => {};
	}, []);

	const handelNext = useCallback(() => {}, [storyRef]);

	return (
		<div className='story'>
			{/* ukuran 72 x 122  | px 4 | per slide -+ 320px | story width/320*/}

			<div className='story__container'>
				<ul className='story__list' ref={storyRef}>
					{arr.map((v, idx) => (
						<StoryItem key={idx} />
					))}
				</ul>
			</div>
			<div className='story__button next'>
				<button onClick={handelNext}>next</button>
			</div>
		</div>
	);
};

export default Story;
