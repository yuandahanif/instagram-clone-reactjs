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
import { stat } from "fs";

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
	let arr = Array(30).fill("arr");

	const [storyWidth, setStoryWidth] = useState<null | undefined | number>(0);
	const storyRef = useRef<HTMLUListElement>(null);
	const [storyPart, setStoryPart] = useState(0);
	const [storyCurrentPart, setStoryCurrentPart] = useState(0);
	const [storyCurrentTransition, setStoryCurrentTransition] = useState(0);

	useEffect(() => {
		const elm = storyRef.current?.getBoundingClientRect().width;

		if (typeof elm !== "undefined") {
			setStoryWidth(elm);
			setStoryPart(Math.floor(elm / 320));
		}

		return () => {
			setStoryWidth(0);
		};
	}, [storyRef]);

	const handelNext = useCallback(() => {
		const elm = storyRef.current;

		if (elm !== null) {
			const transition = storyPart > storyCurrentPart;

			console.log("handelNext -> storyPart", storyPart);
			console.log("handelNext -> storyCurrentPart", storyCurrentPart);
			console.log("storyWidth", storyWidth);

			elm.style.transform = `translateX(${
				transition
					? storyCurrentTransition - 320
					: storyCurrentTransition - (storyWidth % storyPart)
			}px)`;

			console.log(
				"handelNext -> storyCurrentTransition",
				storyCurrentTransition
			);

			setStoryCurrentTransition((state) => (state -= 320));
			setStoryCurrentPart((state) => (state += 1));
		}
	}, [storyWidth]);

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
