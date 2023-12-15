
import SubTitle from '../../../components/SubTitle';
import Title from '../../../components/Title';
import { HomeImagesList } from '../../../constants/constants';
import styles from './index.module.scss'
import { landingDecor } from '../../../constants/constants';

const First = () => {


  return (
    <section className={styles.firstScreen}>
        <img src={landingDecor.right} alt='right'  className={styles.right}/>
      <div className={styles.homeContainer}>
        <div className={styles.textBlock}>
          <div className={styles.titleWrapper}>
            <Title
              color={"inherit"}
              text="Easy way to find a perfect property"
            />
          </div>

          <div className={styles.subTitleWrapper}>
            <SubTitle
              text="We provide a complete service for the sale, purchase or rental of real estate."
              color="#585981"
            />
          </div>
        </div>
        <div className={styles.imageBlock}>
          <img
            src={HomeImagesList.first}
            className={styles.firstImage}
            alt="first"
          />
          <img
            src={HomeImagesList.third}
            className={styles.thirdImage}
            alt="third"
          />
          <img
            src={HomeImagesList.second}
            className={styles.secondImage}
            alt="second"
          />
        </div>
      </div>
    </section>
  );
};

export default First;
