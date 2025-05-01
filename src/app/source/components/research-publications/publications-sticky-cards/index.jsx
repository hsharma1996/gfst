// components/PublicationStickyCards.jsx
"use client"

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import RightArrowIcon from "../../../../../../public/icons/arrow-right.svg";
import styles from "./publication-cards.module.scss";

const publications = [
    {
        title: "Strategies for Sustainable Equitable Economic Growth for Sunrise Andhra Pradesh",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil. Lorem ipsum dolor sit amet.",
        image: "/icons/1.jpg",
    },
    {
        title: "India, Indians, Telugus - Vision 2047",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil. Lorem ipsum dolor sit amet.",
        image: "/icons/2.jpg",
    },
    {
        title: "Demographic Management",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil. Lorem ipsum dolor sit amet.",
        image: "/icons/3.jpg",
    },
    {
        title: "Mapping India's SDG Progress",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil. Lorem ipsum dolor sit amet.",
        image: "/icons/4.jpg",
    },
    {
        title: "P4 Model",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil. Lorem ipsum dolor sit amet.",
        image: "/icons/5.jpg",
    },
];

const PublicationStickyCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const current = publications[currentIndex];

    return (
        <section className={styles.gf_publication_section}>
            <div className="contain">
                <div className={styles.gf_publication_section_wrap}>
                    {/* left content panel */}
                    <div className={styles.gf_publication_section_wrap_content}>
                        <div className={styles.gf_publication_section_wrap_content_inner}>
                            <h2>Research &amp; Publications</h2>
                            <motion.div
                                key={currentIndex}
                                className={styles.gf_content}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 60 }}
                            >
                                <div className={styles.gf_content_wrap}>
                                    <p>Publication</p>
                                    <h3>{current.title}</h3>
                                    <h4>{current.text}</h4>
                                </div>
                                <a href="/" className={styles.gf_content_link}>
                                    Learn More
                                    <RightArrowIcon />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* right cards panel */}
                    <div className={styles.gf_publication_section_wrap_cards_container}>
                        {publications.map((pub, i) => (
                            <motion.div
                                className={styles.gf_card}
                                key={i}
                                viewport={{ amount: 0.5 }}
                                onViewportEnter={() => setCurrentIndex(i)}
                            >
                                <div className={styles.gf_card_wrap}>
                                    <div className={styles.gf_img_wrap}>
                                        <Image
                                            src={pub.image}
                                            alt={pub.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublicationStickyCards;