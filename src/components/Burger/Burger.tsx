import styles from "./index.module.scss";

interface Props {
  color: string;
  background: string;
  toggleMenu: boolean;
  setToggleMenu: (arg: boolean) => void;
}

const Burger = ({ background, color, toggleMenu, setToggleMenu }: Props) => {


  return (
    <button
      className={styles.burger}
      style={{ backgroundColor: color }}
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      <span style={{ backgroundColor: background }} />
      <span style={{ backgroundColor: background }} />
      <span style={{ backgroundColor: background }} />
    </button>
  );
};

export default Burger;
