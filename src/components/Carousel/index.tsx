import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useStyles from "./styles";

const ReviewCarousel = () => {
  const classes = useStyles();
  const renderArrowPrev = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined,
    hasPrev: any,
    label: string | undefined
  ) => (
    <button
      onClick={onClickHandler}
      disabled={!hasPrev}
      aria-label={label}
      className={classes.arrowButtonPrev}
    >
      <img src={"../../assets/Arrow.svg"} alt="arrow previous" />
    </button>
  );

  const renderArrowNext = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined,
    hasNext: any,
    label: string | undefined
  ) => (
    <button
      onClick={onClickHandler}
      disabled={!hasNext}
      aria-label={label}
      className={classes.arrowButtonNext}
    >
      <img src={"../../assets/ArrowNext.svg"} alt="arrow next" />
    </button>
  );

  return (
    <div className={classes.reviewsWrapper}>
      <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2Freviews%2Freview1.jpg?alt=media&token=ee56b473-13eb-41ea-9fda-fde179eeb749"
            alt="Review 1"
            className={classes.reviewImage}
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2Freviews%2Freview1.jpg?alt=media&token=ee56b473-13eb-41ea-9fda-fde179eeb749"
            alt="Review 2"
            className={classes.reviewImage}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
