import React from 'react';

import {Button, Col, Divider, Flex, Input, Row, Space, Typography} from "antd";
import BaseIcon from '../../components/icon/BaseIcon';
import BaseLinkIcon from '../../components/icon/BaseLinkIcon';
import paypalLogo from "../../assets/icons/payment/paypal.svg";
import mastercardLogo from "../../assets/icons/payment/mastercard.svg";
import discoverLogo from "../../assets/icons/payment/discover.svg";
import dinersLogo from "../../assets/icons/payment/diners.svg";
import amexLogo from "../../assets/icons/payment/amex.svg";
import visaLogo from "../../assets/icons/payment/visa.svg";
import facebookLogo from "../../assets/icons/socialmedia/facebook.svg";
import instagramLogo from "../../assets/icons/socialmedia/instagram.svg";
import pinterestLogo from "../../assets/icons/socialmedia/pinterest.svg";
import styles from './Footer.module.css'
import '../../assets/styles/global.css'

const {Text, Link} = Typography;

const Footer = () => {
    return <footer> 
        <MainSection className={styles.mainSection}/>
        <CopyRightSection className={styles.copyRightSection}/>
    </footer>
}

const MainSection = ({className = ''}) => {
    const helpLinks = [
        {url: "https://google.com", text: "Shipping & Returns"},
        {url: "home/cart", text: "Track Your Order"},
        {url: "", text: "Surlre Finder"},
        {url: "", text: "FAQs"},
    ];

    const aboutLinks = [
        {url: "", text: "About Us"},
        {url: "", text: "Contact Us"},
        {url: "", text: "Careers"},
        {url: "", text: "Become an Affiliate"},
    ];

    const categoriesLinks = [
        {url: "", text: "Shirts"},
        {url: "", text: "Jeans"},
        {url: "", text: "Footwear"},
        {url: "", text: "Accessories"},
    ];

    return <Row className={className}>
        <Col span={6}><RelatedLinks headerText="Help" links={helpLinks}/></Col>
        <Col span={6}><RelatedLinks headerText="About" links={aboutLinks}/></Col>
        <Col span={6}><RelatedLinks headerText="Categories" links={categoriesLinks}/></Col>
        <Col span={6}><NewsLetter/></Col>
    </Row>
}

interface Link {
    url: string;
    text: string;
}

interface RelatedLinksProps {
    headerText: string;
    links: Link[];
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({headerText, links}) => {
    return (
        <Flex gap={12} vertical={true} align={"start"}>
            <Text strong={true}>{headerText}</Text>

            <div></div>

            {links.map((link, index) => (
                <Link key={index} href={link.url} target={"_blank"}>
                    {link.text}
                </Link>
            ))}
        </Flex>
    );
};

const NewsLetter = () => {
    return <Flex gap={16} vertical={true} align={"start"} wrap={"wrap"}>
        <Text strong style={{textAlign: "start"}}>JOIN THE LIST AND RECEIVE 15% OFF YOUR FIRST ORDER</Text>

        <SubmitEmail/>

        <SocialMedias/>
    </Flex>;
}   

const SubmitEmail = () => {
    return <Space.Compact className={styles.submitEmailContainer}>
        <Input placeholder="Your email" bordered={false}/>
        <Button className={styles.submitEmailButton} type="text">Send</Button>
    </Space.Compact>;
}

const SocialMedias = () => {
    return <Flex gap={16}>
        <BaseLinkIcon
            srcSet={facebookLogo}
            alt="Facebook"
            href="https://facebook.com"
        />
        <BaseLinkIcon
            srcSet={instagramLogo}
            alt="Instagram"
            href="https://instagram.com"
        />
        <BaseLinkIcon
            srcSet={pinterestLogo}
            alt="Pinterest"
            href="https://pinterest.com"
        />
    </Flex>;
}

const CopyRightSection = ({className = ''}) => {
    return <Flex className={className} justify={"space-between"}>
        <Flex>
            <Space split={<Divider type="vertical"/>}>
                <p>© Uniso 2020. All Rights Reserved</p>
                <Link>Privacy Policy</Link>
                <Link>Terms & Conditions</Link>
            </Space>
        </Flex>

        <Flex gap={4}>
            <BaseIcon srcSet={visaLogo} alt="Visa"/>
            <BaseIcon srcSet={paypalLogo} alt="PayPal"/>
            <BaseIcon srcSet={mastercardLogo} alt="Circles"/>
            <BaseIcon srcSet={discoverLogo} alt="Discover"/>
            <BaseIcon srcSet={dinersLogo} alt="Audi"/>
            <BaseIcon srcSet={amexLogo} alt="Amex"/>
        </Flex>
    </Flex>;
}

export default Footer;
