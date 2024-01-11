import {Button, Flex} from "antd";
import styles from './InputNumberSpinner.module.scss'
import minusIcon from "../../../assets/icons/minus.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import React from "react";

type InputNumberSpinnerProps = {
    initial: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
};

const InputNumberSpinner: React.FC<InputNumberSpinnerProps> = (
    {
        initial,
        min = 0,
        max,
        onChange,
    }
) => {


    const increment = () => {
        if (initial < max) {
            initial  = initial + 1;
            onChange(initial);
        }
    };

    const decrement = () => {
        if (initial > min) {
            initial  = initial - 1;
            onChange(initial);
        }
    };

    return (
        <Flex className={styles.container} align={"stretch"}>
            <ButtonContainer onClick={decrement} srcSet={minusIcon} alt={'decrease'} disabled={initial === min}/>

            <p>{initial}</p>

            <ButtonContainer onClick={increment} srcSet={plusIcon} alt={'increase'} disabled={initial === max}/>
        </Flex>
    );
};

interface ButtonContainerProps {
    onClick: () => void;
    srcSet: string
    alt: string
    disabled: boolean;
}
const ButtonContainer: React.FC<ButtonContainerProps> = ({onClick, srcSet, alt,  disabled}) => (
    <div>
        <Button className={styles.actionButton} disabled={disabled} onClick={onClick}>
            <Flex align={"center"}>
                <img srcSet={srcSet} alt={alt}/>
            </Flex>
        </Button>
    </div>
);

export default InputNumberSpinner;