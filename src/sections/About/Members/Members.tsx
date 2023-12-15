import styles from "./index.module.scss";
import Member from "../../../icons/About/Member";
import SubTitle from "../../../components/SubTitle";
import Title from "../../../components/Title";
import MembersSlider from "../../../components/MembersSlider/MembersSlider";

const Members = () => {
  return (
    <section className={styles.members}>
      <div className={styles.memberContainer}>
        <Member />

        <div className={styles.titleWrapper}>
          <Title text="What our members said ?" color="inherit" />
        </div>
        <SubTitle
          text="Nam sollicitudin dignissim nunc, cursus ullamcorper."
          color="inherit"
        />
        <MembersSlider />
      </div>
    </section>
  );
};

export default Members;
