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

	const storyRef = useRef<HTMLUListElement>(null);
	const [lastWidth, setLastWidth] = useState(0);
	const [storyPart, setStoryPart] = useState(0);
	const [storyCurrentPart, setStoryCurrentPart] = useState(0);
	const [storyCurrentTransform, setStoryCurrentTransform] = useState(0);

	useEffect(() => {
		// ambil full width nya.
		const width = storyRef.current?.getBoundingClientRect().width;
		if (width) {
			const widthPart = Math.floor(width / 320);

			// bagi dengan 320 hasilnya berapa part? dan tampung
			setStoryPart(widthPart);

			// ambil width sisa hasil bagi.
			setLastWidth(width % widthPart);
		}
	}, []);

	const handelNext = useCallback(() => {
		const elm = storyRef.current;

		console.log("handelNext -> storyPart", storyPart);
		console.log("handelNext -> storyCurrentPart", storyCurrentPart);

		// apakah ini last next?
		if (storyPart > storyCurrentPart) return;
		const isLast = storyPart === storyCurrentPart;

		if (elm) {
			// tidak? maka transisi sekarang - 320
			const transform = isLast
				? storyCurrentTransform - lastWidth
				: storyCurrentTransform - 320;

			elm.style.transform = `translateX(${transform})`;
			// iya? maka transisi sekarang - lastWidth

			setStoryCurrentPart((state) => state + 1);
			setStoryCurrentTransform(transform);
		}
	}, []);

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
