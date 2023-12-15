import { membersSaid } from "../../constants/constants";
import { Slider, useSlider } from "../../hooks/useSlider";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";
import styles from "./index.module.scss";
import { Carousel as MemberCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const MembersSlider = () => {
  const { handlePrevClick, handleNextClick, activeSlide, slider } = useSlider(
    membersSaid,
    6
  );

  return (
    <div className={styles.slider}>
      <MemberCarousel
        showArrows={false}
        showThumbs={false}
        showIndicators={true}
        selectedItem={activeSlide}
        infiniteLoop={true}
        showStatus={false}
        swipeable={false}
        
        renderIndicator={(_onClickHandler, isSelected, index) => (
          <li
            key={index}
            // onClick={(e) => onClickHandler(e)}
            className={`${styles.customIndicator} ${
              isSelected ? styles.selected : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        )}
      >
        {slider.map((item: Slider, index: number) => (
          <div key={index} className={styles.item}>
            {item.avatar ? (
              <img src={item.avatar} alt={"Avatar"} className={styles.avatar} />
            ) : (
              <span className={styles.avatarName}>
                {item?.name?.charAt(0).toUpperCase()}
              </span>
            )}

            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </MemberCarousel>

      <div className={styles.buttonContainer}>
        <PrevButton onClick={handlePrevClick} />
        <NextButton onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default MembersSlider;
