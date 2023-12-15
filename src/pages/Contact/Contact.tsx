import styles from "./index.module.scss";
import Banner from "../../components/Banner";
import { landingDecor } from "../../constants/constants";
import GoogleMaps from "../../components/GoogleMaps";
import ContactForm from "../../components/ContactForm";
import ContactInformation from "../../components/ContactInformation";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <img src={landingDecor.left} alt="left" className={styles.leftDecor} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Banner title="Contact us" />
      </div>
      <img src={landingDecor.right} alt="right" className={styles.rightDecor} />

      <div className={styles.contactContainer}>
        <ContactForm />
        <ContactInformation />
      </div>
      <div className={styles.contactContainer}>
  
      <GoogleMaps />
      </div>
    </div>
  );
};

export default Contact;
