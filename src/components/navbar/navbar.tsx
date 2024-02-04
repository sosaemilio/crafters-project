"use client"

import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './nav-links';
import styles from './navbar.module.css';


export default function NavBar() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}>
        <Link href="/">
        <div className={styles.navimagediv}>
            <Image src={require('./HandCraftedHavenLogo.JPG')} alt='something' width={369} height={89} className={styles.navimage} sizes="(max-width: 768px) 100vw, 33vw"></Image>
        </div>
      </Link>
        </div>
        <div className={styles.navbuttonsandtabsdiv}>
            <Link className={styles.navbuttontwo} href='/signup' ><span className={styles.span}>Sign in</span></Link>
            <Link className={styles.navbuttonone} href='/register' ><span className={styles.span}>Register</span></Link>
            <NavLinks />
        </div>
      </div>
    );
  }