import { useState } from "react";
import styles from "./reviews-slider.module.css";

export default function ReviewsSlider({ reviews, className }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNext() {
    setCurrentSlide((curr) => curr + 1);
  }

  function handlePrev() {
    setCurrentSlide((curr) => curr - 1);
  }

  return (
    <div className={`${styles.slider} common-border-radius`}>
      <div className={styles.slides}>
        {reviews.map(({ reviewer, ocupation, review }, idx) => (
          <ReviewCard
            key={idx}
            currentSlide={currentSlide}
            name={reviewer}
            ocupation={ocupation}
            review={review}
          />
        ))}
      </div>

      <div className={styles.tools}>
        <button
          onClick={handlePrev}
          className={`${styles.arrow} ${styles.left}`}
          disabled={currentSlide === 0 && true}
        >
          <img src="icons/arrow-left.svg" alt="arrow left" />
        </button>

        <div className={styles.dots}>
          {reviews.map((_, idx) => (
            <div
              className={`${styles.dot} ${
                idx === currentSlide ? styles.active : ""
              }`}
              onClick={() => setCurrentSlide(idx)}
            >
              <img
                src={`icons/${idx === currentSlide ? "active-dot" : "dot"}.svg`}
                alt="dot"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`${styles.arrow} ${styles.right}`}
          disabled={currentSlide === reviews.length - 1}
        >
          <img src="icons/arrow-right.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ currentSlide, name, ocupation, review }) {
  return (
    <div
      className={styles.card}
      style={{
        transform: `translateX(${
          currentSlide === 0
            ? "0"
            : `calc(-${currentSlide * 100}% - ${currentSlide} * 3.125rem)`
        })`,
      }}
    >
      <div className={`${styles.review} common-border-radius`}>
        <p>{`"${review}"`}</p>
      </div>

      <div className={styles.reviewer}>
        <h4>{name}</h4>
        <p>{ocupation}</p>
      </div>
    </div>
  );
}
