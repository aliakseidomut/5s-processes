import { useState } from "react";
import { NavLink } from "react-router";
import styles from "@styles/BurgerMenu.module.css";

interface Link {
  to: string;
  label: string;
}

interface BurgerMenuProps {
  links: Link[];
}

export default function BurgerMenu({ links }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? styles.link_active : styles.link
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
