import React from "react";
import { Select } from "antd";
import styles from "./SelectButton.module.css";

interface ButtonProps {
  onClick: () => void;
  textButton: string;
  suffixIcon: string;
  prefixIcon: string;
  defaultValue: string;
  options: Options[];
}
interface Options {
  label: string;
  value: string;
}
const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value);
};
function SelectButton({ options, suffixIcon, prefixIcon }: ButtonProps) {
  return (
    <Select
      defaultValue={options[0]}
      style={{ width: 120 }}
      onChange={handleChange}
      options={options}
      menuItemSelectedIcon={prefixIcon}
      suffixIcon={suffixIcon}
    />
  );
}

export default SelectButton;
