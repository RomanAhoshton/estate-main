import { CONTACT_US } from "../../constants/routes";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Props {
  text: string;
}

const BlueButton = ({ text }: Props) => {
  return (
    <button className={styles.button}>
      {text === "Contact Us" ? (
        <Link to={CONTACT_US}>{text}</Link>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default BlueButton;
