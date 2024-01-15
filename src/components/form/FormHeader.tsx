import styles from "./FormHeader.module.css";

interface FormHeaderProps {
  title: string;
  description: string;
}

function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <header>
      <h1 className={`${styles.header} h1-bold`}>{title}</h1>
      <p className={`${styles.description} body1-regular`}>{description}</p>
    </header>
  );
}

export default FormHeader;
