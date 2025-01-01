import { NavLink } from "react-router";
import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.Header} container`}>
      <NavLink className={styles.logo} to={"/"}>
        5S
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
          to={"/"}
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
          to={"/tasks"}
        >
          TASKS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
          to={"/contacts"}
        >
          CONTACTS
        </NavLink>
      </nav>
    </header>
  );
}
