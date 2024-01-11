import React, {ReactNode} from 'react';
import {Container} from 'reactstrap';
import Header from './header/Header';
import Footer from "./footer/Footer";
import styles from './Layout.module.css'

interface Props {
    children: ReactNode;
}

function Layout({children}: Props) {
    return (
        <div>
            <Header/>
            <Container className={styles.main} tag="main">
                {children}
            </Container>
            <Footer/>
        </div>
    );
}

export default Layout;