import { availableCountries } from "../../constants/constants";
import { useSlider,Slider } from "../../hooks/useSlider";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";
import styles from "./index.module.scss";
import { Carousel as MobileCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CountriesSlider = () => {

  const {handlePrevClick,handleNextClick,activeSlide,slider}=useSlider(availableCountries,4)

  return (
    <div className={styles.carouselContainer}>
      <MobileCarousel
        width={350}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={activeSlide}
        infiniteLoop={true}
        showStatus={false}
        swipeable={false}
      >
        {slider.map((item: Slider, index: number) => (
          <div key={index}>
            <img src={item.country} alt={`COUNTRY`} />
          </div>
        ))}
      </MobileCarousel>

      <div className={styles.buttonContainer}>
        <PrevButton onClick={handlePrevClick} />
        <NextButton onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default CountriesSlider;
