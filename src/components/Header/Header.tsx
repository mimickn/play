import React from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);
