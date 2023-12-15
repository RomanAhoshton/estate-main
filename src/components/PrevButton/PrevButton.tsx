import styles from "./index.module.scss";


interface Props{
  onClick:()=>void;
}

const PrevButton = ({onClick}:Props) => {
  return (
    <button className={styles.prev} onClick={onClick} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="27"
        viewBox="0 0 20 27"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.175049 13.375L19.025 0.375V26.375L0.175049 13.375Z"
          fill="#2E7D32"
          fill-opacity="0.33"
        />
      </svg>
    </button>
  );
};

export default PrevButton;
