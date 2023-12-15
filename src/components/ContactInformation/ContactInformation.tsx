import styles from "./index.module.scss";
import Title from "../Title";
import SubTitle from "../SubTitle";
import { useTheme } from "../../hooks/useTheme";
import SocialLinks from "../SocialLinks";

const ContactInformation = () => {
  const { isDarkTheme } = useTheme();

  const color = isDarkTheme === "light" ? "#110229" : "white";

  return (
    <div className={styles.info}>
      <Title fontSize={32} text="Contact Information" color="inherit" />

      <div style={{ marginBottom: 50 }}>
        <SubTitle
          text="Say something to start a live chat!"
          fontSize={18}
          color="inherit"
        />
      </div>

      <div className={styles.actions}>
        <div className={styles.phone}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
              fill={color}
            />
            <path
              d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z"
              fill={color}
            />
          </svg>
          <a href="#">+1012 3456 789</a>
        </div>
        <div className={styles.email}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
              fill={color}
            />
          </svg>
          <a href="#"> demo@gmail.com</a>
        </div>
        <div className={styles.place}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
              fill={color}
            />
          </svg>

          <span>
            {" "}
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default ContactInformation;
