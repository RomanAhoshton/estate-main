import styles from "./index.module.scss";

interface Props{
  onClick:()=>void;
}

const NextButton = ({onClick}:Props) => {
  return (
    <button className={styles.next} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="27"
        viewBox="0 0 20 27"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.8237 13.375L0.97373 0.375V26.375L19.8237 13.375Z"
          fill="#2E7D32"
          fill-opacity="0.33"
        />
      </svg>
    </button>
  );
};

export default NextButton;
