import { Input } from "antd";
import styles from "./InputSearch.module.css";
import BaseIcon from "../../icon/BaseIcon";

interface InputSearchProps {
  icon: string;
  placeholder: string;
}

function InputSearch({ icon, placeholder }: InputSearchProps) {
  return (
    <Input
      type="text"
      className={`${styles.input} body3-regular`}
      placeholder={placeholder}
      prefix={<BaseIcon srcSet={icon} alt="searchIcon"></BaseIcon>}
    ></Input>
  );
}

export default InputSearch;
