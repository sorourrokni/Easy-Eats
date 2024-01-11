import React from "react";
import styles from "./FormHeader.module.css";

interface FormHeaderProps {
  title: string;
  description: string;
}

function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={"h3-medium-semi"}>{title}</h2>
      <h6>{description}</h6>
    </header>
  );
}

export default FormHeader;
