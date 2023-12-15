import styles from "./index.module.scss";
interface Props {
  color: string;
  fontSize?: number;
  text: string;
}

const Title = ({ color, fontSize, text }: Props) => {
  return (
    <p className={styles.title} style={{ color: color, fontSize: fontSize }}>
      {text}
    </p>
  );
};

export default Title;
