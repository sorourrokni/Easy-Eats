import { Button } from "antd";
import primaryStyles from "./PrimaryButton.module.css";
import secondaryStyles from "./SecondaryButton.module.css";
import baseIconStyles from "../../icon/BaseIcon.module.css";
import BaseIcon from "../../icon/BaseIcon";

interface ButtonProps {
  onClick: () => void;
  textButton: string;
  prefixIcon?: string;
  buttonType: "primary" | "secondary";
  isSelected?: boolean;
}

function DefaultButton({
  onClick,
  textButton,
  prefixIcon,
  buttonType,
  isSelected = false,
}: ButtonProps) {
  const buttonTypeStyles =
    buttonType === "primary" ? primaryStyles : secondaryStyles;

  return (
    <Button
      className={`${buttonTypeStyles.button} caption1-regular ${
        isSelected ? `${buttonTypeStyles.selected} h6-bold` : ""
      }`}
      type="primary"
      onClick={onClick}
      icon={
        prefixIcon ? (
          <BaseIcon
            srcSet={prefixIcon}
            alt="prefix Icon"
            className={`${baseIconStyles.icon} ${buttonTypeStyles.icon} ${
              isSelected ? buttonTypeStyles.selected : ""
            }`}
          ></BaseIcon>
        ) : null
      }
    >
      {textButton}
    </Button>
  );
}

export default DefaultButton;
