import React from 'react';
import {Flex} from "antd";
import usaIcon from '../../assets/icons/country/usa.svg'
import MainSection from "./main/MainSection";
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <TopBar />
            <MainSection />
            <PromotionalBanner />
        </header>
    );
}

const TopBar = () => (
    <Flex className={styles.topBar} justify="space-between" align={"center"}>
        <address>337 Roncesvalles Ave, Toronto</address>
        <LanguageSelector />
    </Flex>
);

const LanguageSelector = () => (
    <Flex gap={8} align="center">
        <img loading="lazy" srcSet={usaIcon} alt="usa" />
        <span className={'p-small-normal'}>USD</span>
    </Flex>
);

const PromotionalBanner = () => (
    <Flex className={styles.promotional} justify="center" align="center">
        <p className={'p-small-semi'}>COVID 19 UPDATE: WORLDWIDE FREESHIP 🚀</p>
    </Flex>
);

export default Header;