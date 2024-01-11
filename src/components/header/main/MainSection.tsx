import {Badge, Button, Flex, Input} from "antd";
import logoImage from "../../../assets/icons/logo.svg";
import React, {ReactNode} from "react";
import BaseIcon from "../../icon/BaseIcon";
import cartImage from "../../../assets/icons/cart.svg";
import profileIcon from "../../../assets/icons/profile.svg";
import searchImage from "../../../assets/icons/search.svg";
import styles from './MainSection.module.css'

const MainSection = () => (
    <Flex className={styles.container} justify={"space-between"}>
        <Menus/>
        <BaseIcon srcSet={logoImage} alt={'Logo'}/>
        <HeaderItems />
    </Flex>
);

const Menus = () => (
    <Flex className={styles.menus} gap="small" justify="start" align="center">
        <Button className={'p-small-normal'} type="text">Shop</Button>
        <Button className={'p-small-normal'} type="text">New Arrival</Button>
        <Button className={'p-small-normal'} type="text">Best Sellers</Button>
        <Button className={'p-small-normal'} type="text">Pages</Button>
    </Flex>
);

const HeaderItems = () => (
    <Flex className={styles.items} align="center" justify="end">
        <SearchBox />
        <ButtonContainer icon={<BaseIcon srcSet={cartImage} alt="Cart"/>} badge={true} />
        <ButtonContainer icon={<BaseIcon srcSet={profileIcon} alt="Profile"/>} />
    </Flex>
);

const SearchBox = () => (
    <Flex className={styles.searchBox} align="center">
        <BaseIcon className={styles.searchIcon} srcSet={searchImage} alt="Search"/>
        <Input className={styles.searchInput} placeholder="Search..." bordered={false} />
    </Flex>
);

interface ButtonContainerProps {
    icon: ReactNode;
    badge?: boolean;
    onClick?: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ icon, badge, onClick }) => (
    <div className={styles.itemsIconButtonContainer}>
        <Button
            className={styles.itemsIconButton}
            type="primary"
            block={true}
            icon={badge ? <Badge dot={true}>{icon}</Badge> : icon}
            onClick={onClick}
        />
    </div>
);

export default MainSection