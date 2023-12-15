import styles from "./index.module.scss";

const FooterSubscribe = () => {
  return (
    <div className={styles.footerSubscribe}>
      <p className={styles.subscribeTitle}>Subscribe</p>
      <span className={styles.subscribeSubtile}>
        Subscribe to get latest property, blog<br/> news from us
      </span>
      <form className={styles.form}>
        <input type="text" placeholder="Email Address" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M1 7.28711H12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 1.92969L12 7.28707L6.5 12.6444"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
