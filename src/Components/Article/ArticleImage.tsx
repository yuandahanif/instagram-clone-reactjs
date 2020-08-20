import React, { createRef, useRef, useCallback, memo } from "react";
// @ts-ignore
import Slider from "infinite-react-carousel";
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

import "./ArticleImage.css";

const PrevArrow: React.FC<any> = ({ onClick }) => (
	<div className='carousel-arrow-container carousel-arrow-prev'>
		<button
			className='carousel-arrow-button'
			data-role='none'
			type='button'
			onClick={onClick}>
			<Icon path={mdiChevronLeft} className='carousel-arrow-icon' size={1} />
		</button>
	</div>
);

const NextArrow: React.FC<any> = ({ onClick }) => (
	<div className='carousel-arrow-container carousel-arrow-next'>
		<button
			className='carousel-arrow-button'
			data-role='none'
			type='button'
			onClick={onClick}>
			<Icon path={mdiChevronRight} className='carousel-arrow-icon' size={1} />
		</button>
	</div>
);

interface Props {
	images: Array<{ url: string }>;
}

// main
const ArticleImages: React.FC<Props> = memo(({ images }) => {
	const imageRef: React.MutableRefObject<any> = useRef(null);

	const prevClick = useCallback(() => {
		imageRef.current.slickPrev();
	}, []);

	const nextClick = useCallback(() => {
		imageRef.current.slickNext();
	}, []);

	return (
		// wTF. the doc is realy fuuc.
		<Slider
			dots={true}
			ref={imageRef}
			prevArrow={<PrevArrow onClick={prevClick} />}
			nextArrow={<NextArrow onClick={nextClick} />}>
			{images!.map((image, idx) => (
				<div className='article__images__container' key={idx.toString()}>
					<img className='article__image' src={image.url} alt='article'></img>
				</div>
			))}
		</Slider>
	);
});

export default ArticleImages;
