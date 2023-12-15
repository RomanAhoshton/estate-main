import styles from "./index.module.scss";
import { AuthImage } from "../../constants/constants";
import Logo from "../../icons/Logo";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../../constants/routes";
import { useLogin } from "../../hooks/useLogin";
import LoaderC from "../../components/LoaderC";

const Signin = () => {
  const { password, setPassword, email, setEmail, Login ,isLoading} = useLogin();

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
    <div className={styles.signin} style={backgroundImageStyle}>
      {isLoading &&<LoaderC/>}
      <div className={styles.overlay} style={overlayStyle}>
        <div className={styles.signContainer}>
          <Logo color={"white"} />
          <p className={styles.createTitle}>Welcome Back</p>
          <form
            className={styles.form}
            onSubmit={(e) => Login(email, password, e)}
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


            <button type="submit" className={styles.createAccount}>
              {" "}
              SIGN IN
            </button>
          </form>

          <p className={styles.hasAccount}>
            {" "}
            Don’t have account ? <Link to={SIGN_UP}> Sign up </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
