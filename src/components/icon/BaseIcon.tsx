import React from 'react';
import styles from './BaseIcon.module.css'

interface BaseIconProps {
    srcSet: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}

const BaseIcon: React.FC<BaseIconProps> = ({ srcSet, alt, className = '', onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`${styles.container} ${onClick ? styles.clickableContainer : ''}${className}`}
            onClick={handleClick}
        >
            <img className={styles.icon} loading="lazy" srcSet={srcSet} alt={alt} />
        </button>
    );
};

export default BaseIcon;