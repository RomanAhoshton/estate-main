import { OurCompany, TakeTour } from '../../constants/constants';
import { useTheme } from '../../hooks/useTheme';
import styles from './index.module.scss'

const FooterLinks = () => {


  const {isDarkTheme}=useTheme()


  return (
    <div className={styles.footerLinks} >
      {TakeTour.map((item, index) => (
        <div key={index}>
          <span>{item.title}</span>
          <ul>
            {item.rours.map((i, index) => (
              <li key={index}>
                <a href={i.href} style={{color:isDarkTheme === "light" ? "#110229" : "white"}}>{i.link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {OurCompany.map((item, index) => (
        <div key={index}>
          <span>{item.title}</span>
          <ul>
            {item.OurCompany.map((i, index) => (
              <li key={index}>
                <a href={i.href} style={{color:isDarkTheme === "light" ? "#110229" : "white"}}>{i.link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
