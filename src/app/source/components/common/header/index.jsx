// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.gf_header}>
            <div className="contain">
                <div className={styles.gf_header_wrap}>
                    <div className={styles.gf_logo_wrap}>
                        <div className={styles.gf_logo}>
                            <Link href="/">
                                <Image
                                    src="/icons/logo.png"
                                    alt="Logo"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 120px"
                                />
                            </Link>
                        </div>
                    </div>
                    <nav className={styles.gf_nav}>
                        <ul className={styles.gf_nav_list}>
                            <li className={styles.gf_nav_item}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={styles.gf_nav_item}>
                                <Link href="/about">About</Link>
                            </li>
                            <li className={styles.gf_nav_item}>
                                <Link href="/research-publications">Research &amp; Publications</Link>
                            </li>
                            <li className={styles.gf_nav_item}>
                                <Link href="/team">Team</Link>
                            </li>
                            <li className={styles.gf_nav_item}>
                                <Link href="/events">Events</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.gf_actions}>
                        <Link href="/contact" className={styles.gf_cta_button}>
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;