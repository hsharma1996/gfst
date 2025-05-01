/** React Imports */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

/** Icons */
import FacebookIcon from '../../../../../../public/icons/facebook.svg'
import InstagramIcon from '../../../../../../public/icons/instagram.svg'
import LinkedinIcon from '../../../../../../public/icons/linkedin.svg'
import XIcon from '../../../../../../public/icons/twitter.svg'

/** Styles */
import styles from './footer.module.scss'

/** Main Export */
const Footer = () => {

    return (
        <div className={styles.gf_footer}>
            <div className={styles.gf_footer_main}>
                <div className="contain">
                    <div className={styles.gf_footer_main_wrap}>
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
							<div className={styles.gf_content}>
								<p>Office</p>
								<Link href="/">409, Shangrila Plaza, Road No. 2, Park View Enclave,Banjara Hills, Hyderabad, Telangana 500034</Link>
							</div>
							<div className={styles.gf_content}>
								<p>Email</p>
								<Link href="/">contact@gfst.in</Link>
							</div>
                        </div>
                        <div className={styles.gf_links}>
                            <p className={styles.gf_link_title}>Quick Links</p>
                            <Link href="/">Home</Link>
                            <Link href="/">Research and Publications</Link>
                            <Link href="/">Team</Link>
                            <Link href="/">Events</Link>
                        </div>
                        <div className={styles.gf_links}>
                            <p className={styles.gf_link_title}>Publications</p>
                            <Link href="/">Sustainable Growth</Link>
                            <Link href="/">Vision 2047</Link>
                            <Link href="/">Demography</Link>
                            <Link href="/">SDG Progress</Link>
                        </div>
                        <div className={styles.gf_links}>
                            <p className={styles.gf_link_title}>Company</p>
                            <Link href="/">About Us</Link>
                            <Link href="/">Contact Us</Link>
                            <Link href="/">Terms</Link>
                            <Link href="/">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className={styles.gf_footer_social}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <FacebookIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <InstagramIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <LinkedinIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <XIcon/>
                                </Link>
                            </li>
                        </ul>
                    	<p className={styles.gf_copy}>Copyright © GFST All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer