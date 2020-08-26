import React, { useRef, useCallback, memo } from "react";
// @ts-ignore
import Slider from "infinite-react-carousel";
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";


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

	if (images.length === 1) {
		return (
			<div className='article__images__container'>
				<img
					className='article__images__container__image'
					src={images[0].url}
					alt='article'></img>
			</div>
		);
	}

	const prevClick = useCallback(() => {
		imageRef.current.slickPrev();
	}, []);

	const nextClick = useCallback(() => {
		imageRef.current.slickNext();
	}, []);

	return (
		<Slider
			className='article__images__carousel'
			dots={true}
			ref={imageRef}
			prevArrow={<PrevArrow onClick={prevClick} />}
			nextArrow={<NextArrow onClick={nextClick} />}>
			{images!.map((image, idx) => (
				<div className='article__images__container' key={idx.toString()}>
					<img
						className='article__images__container__image'
						src={image.url}
						alt='article'></img>
				</div>
			))}
		</Slider>
	);
});

export default ArticleImages;
