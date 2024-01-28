"use client"

import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/dashboard'},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={styles.navtabs}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

