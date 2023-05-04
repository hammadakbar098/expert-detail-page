import { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State for active item index

  const handlePrev = () => {
    // Decrease active index by 1, wrap to end if necessary
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    // Increase active index by 1, wrap to start if necessary
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ''}`}
            style={{ width: '30%' }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles.carouselDots}>
        {items.map((_, index) => (
          <div
            key={index}
            className={`${styles.carouselDot} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <button className={`${styles.carouselButton} ${styles.carouselButtonPrev}`} onClick={handlePrev}>
        &lt;
      </button>
      <button className={`${styles.carouselButton} ${styles.carouselButtonNext}`} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
