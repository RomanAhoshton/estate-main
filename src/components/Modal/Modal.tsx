import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setAuth } from "../../redux/slices/authSlice";
import { HOME } from "../../constants/routes";

interface Props {
  setModalLogin: (arg: boolean) => void;
  email: string;
  password: string;
  setEmail: (arg: string) => void;
  setPassword: (arg: string) => void;
}

const Modal = ({
  setModalLogin,
  email,
  password,
  setEmail,
  setPassword,
}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          const userJson = JSON.stringify(user);
          localStorage.setItem("user", userJson);
          localStorage.setItem("theme", "light");
          dispatch(setAuth(true));
          setModalLogin(false);
          navigate(HOME);
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const closeModal = () => {
    setModalLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal}>
          Close
        </button>

        <div className={styles.modalHeader}>
          <h2>Your account has been successfully created</h2>
        </div>
        <div className={styles.modalBody}>
          <p>Additional content or description can go here...</p>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={Login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
