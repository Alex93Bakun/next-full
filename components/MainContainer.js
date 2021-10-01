import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import CustomLink from './CustomLink';

import styles from '../styles/MainContainer.module.scss';

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <title>Next-full</title>
                <meta keywords={`nextjs ${keywords}`}/>
            </Head>
            <div className={styles.navbar}>
                <div className={styles.navbarInner}>
                    <div className="navbar-logo">
                        <Image src={"/logo.png"} alt="logo" width={64} height={64}/>
                    </div>
                    <div className={styles.navbarMenu}>
                        <CustomLink href="/" text="Main"/>
                        <CustomLink href="/users" text="Users"/>
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </>
    );
};

export default MainContainer;
