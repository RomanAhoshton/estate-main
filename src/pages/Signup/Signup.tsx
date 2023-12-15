import styles from "./index.module.scss";
import { AuthImage } from "../../constants/constants";
import Logo from "../../icons/Logo";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";
import { useCreateUser } from "../../hooks/useCreateUser";
import LoaderC from "../../components/LoaderC";
import Modal from "../../components/Modal";

const Signup = () => {
  const {
    setPassword,
    email,
    setEmail,
    confirmPassword,
    setConfirmPassword,
    createUser,
    password,
    isLoading,
    modalLogin,
    setModalLogin,
  } = useCreateUser();

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${AuthImage})`,
    position: "relative",
  };
  const overlayStyle: React.CSSProperties = {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    backdropFilter: "blur(1px)",
  };

  return (
    <div className={styles.signup} style={backgroundImageStyle}>
      <div className={styles.overlay} style={overlayStyle}>
        <div className={styles.signContainer}>
          <Logo color={"white"} />
          <p className={styles.createTitle}>Create your account</p>
          <form
            className={styles.form}
            onSubmit={(e) => createUser(email, password, e)}
          >
            <input
              type="text"
              className={styles.email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="password"
              className={styles.password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              className={styles.password}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            {isLoading && <LoaderC />}

            {modalLogin && (
              <Modal
                setModalLogin={setModalLogin}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            )}

            <button type="submit" className={styles.createAccount}>
              {" "}
              Create Account
            </button>
          </form>

          <p className={styles.hasAccount}>
            {" "}
            Have already account? <Link to={SIGN_IN}> Sign in </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
