import { Link } from 'react-router-dom';
import styles from './WebBreadCrumb.module.scss'
import React from "react";
import {Breadcrumb, Flex} from "antd";

interface BreadcrumbItem {
    name: string;
    path: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const WebBreadcrumb = ({ items }: BreadcrumbProps) => {
    const breadcrumbItems = items.map((item, index) => {
        const isLast = index === items.length - 1;

        return {
            title: isLast ? item.name : <Link to={item.path}>{item.name}</Link>,
            link: item.path,
        };
    });

    return (
        <Flex className={styles.breadCrumb}>
            <Breadcrumb items={breadcrumbItems}></Breadcrumb>
        </Flex>
    );
};

export default WebBreadcrumb;
