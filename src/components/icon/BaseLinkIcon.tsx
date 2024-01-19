import React from 'react';
import BaseIcon from "./BaseIcon";
import {Typography} from "antd";

const {Link } = Typography;


interface BaseLinkIconProps {
    srcSet: string;
    alt: string;
    href: string;
    className?: string;
}

const BaseLinkIcon: React.FC<BaseLinkIconProps> = ({ srcSet, alt, href, className = '' }) => {
    return (
        <Link href={href}><BaseIcon className={className} srcSet={srcSet} alt={alt} onClick={() => {}}/></Link>
    );
};

export default BaseLinkIcon;