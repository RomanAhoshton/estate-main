import { useTheme } from "../../hooks/useTheme";
import styles from "./index.module.scss";

const ContactForm = () => {
  const { isDarkTheme } = useTheme();
  return (
    <form className={styles.form}>
      <div className={styles.fullName}>
        <input
          type="text"
          placeholder="FirstName"
          style={{
            backgroundColor: isDarkTheme === "light" ? "white" : "#17191C",
            border: isDarkTheme==="light" ? '1px solid #D0D0E3' : 'none',
          }}
        />
        <input
          type="text"
          placeholder="LastName"
          style={{
            backgroundColor: isDarkTheme === "light" ? "white" : "#17191C",
            border: isDarkTheme==="light" ? '1px solid #D0D0E3' : 'none',
          }}
        />
      </div>
      <input
        type="text"
        placeholder="Email"
        className={styles.email}
        style={{
          backgroundColor: isDarkTheme === "light" ? "white" : "#17191C",
          border: isDarkTheme==="light" ? '1px solid #D0D0E3' : 'none',
        }}
      />
      <textarea
        placeholder="Message..."
        style={{
          backgroundColor: isDarkTheme === "light" ? "white" : "#17191C",
          border: isDarkTheme==="light" ? '1px solid #D0D0E3' : 'none',
        }}
      />


      <button className={styles.send}> SEND</button>
    </form>
  );
};

export default ContactForm;
