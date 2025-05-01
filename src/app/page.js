/** React Imports */
import Image from 'next/image'
import Link from 'next/link'

/** Components */
import Header from './source/components/common/header'
import PublicationStickyCards from './source/components/research-publications/publications-sticky-cards'

/** Icons */
import RightArrowIcon from '../../public/icons/arrow-right.svg'
import OneIcon from '../../public/icons/smart-cities.svg'
import TwoIcon from '../../public/icons/technology.svg'
import ThreeIcon from '../../public/icons/eco-light.svg'
import FourIcon from '../../public/icons/team.svg'
import FiveIcon from '../../public/icons/planning.svg'

/** Styles */
import styles from './home.module.scss'

/** Main Export */
const HomePage = () => {
	return (
		<>
			<div className={styles.gf_black}>
				<Header />
				<section className={styles.gf_hero}>
					<div className="contain">
						<div className={styles.gf_hero_wrap}>
							<div className={styles.gf_hero_wrap_pattern}>
								<Image
									src='/icons/pattern-blue.jpg'
									alt="Logo"
									fill
									sizes="100vw"
								/>
							</div>
							<div className={styles.gf_hero_wrap_content}>
								<div className={styles.gf_hero_wrap_content_inner}>
									<h2>Global Forum for {'\n'} Sustainable Transformation</h2>
								</div>
								<div className={styles.gf_hero_wrap_content_inner}>
									<h3>Insights, Innovation, Impact</h3>
									<div className={styles.gf_actions}>
										<Link href="/">Contact Us</Link>
										<Link href="/">Explore Research</Link>
									</div>
								</div>
							</div>
							<div className={styles.gf_hero_wrap_special_content}>
								<div className={styles.gf_video_wrapper}>
									<video
										className={styles.gf_hero_video}
										src="/videos/hero.mov"
										autoPlay
										loop
										muted
										playsInline
									/>
								</div>
								<div className={styles.gf_event}>
									<div className={styles.gf_event_wrap}>
										<p>Research Publication</p>
										<h3>Mapping India’s SDG Progress</h3>
										<h4>The Sustainable Development Goals (SDGs), adopted by United Nations member states in 2015, are a universal call to action to represent a global commitment to address critical challenges such as poverty, inequality, and climate change by 2030.</h4>
									</div>
									<a href="/" className={styles.gf_event_link}>
										Learn More
										<RightArrowIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.gf_centers_of_excellence}>
					<div className="contain">
						<div className={styles.gf_ce_wrap}>
							<h2 className={styles.gf_ce_title}>Centers of Excellence</h2>
							<div className={styles.gf_ce_grid}>
								{centers.map((center, idx) => (
									<div key={idx} className={styles.gf_ce_item}>
										<div className={styles.gf_ce_item_pattern}>
											<Image
												src={`/icons/pattern-${idx < 2 ? 'light' : 'blue'}.jpg`}
												alt="Logo"
												fill
												sizes="40vw"
											/>
										</div>
										<div className={styles.gf_ce_item_wrap}>
											<h3 className={styles.gf_ce_item_title}>{center.title}</h3>
											<p className={styles.gf_ce_item_description}>{center.description}</p>
										</div>
										<a href={center.link} className={styles.gf_ce_item_link}>
											Learn More
											<RightArrowIcon />
										</a>
										<div className={styles.gf_ce_item_icon}>
											{center.Icon}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
			<PublicationStickyCards />
			<div className={styles.gf_about}>
				<div className="contain">
					<div className={styles.gf_about_wrap}>
						<div className={styles.gf_title_area}>
							<p>About Us</p>
							<h2>GFST is a platform for Policy research for sustainable transformation of economies and communities for well-being and happiness.</h2>
						</div>
						<div className={styles.gf_cards}>
							<div className={styles.gf_card}>
								<div className={styles.gf_video_wrapper}>
									<video
										className={styles.gf_hero_video}
										src="/videos/hero.mov"
										autoPlay
										loop
										muted
										playsInline
									/>
								</div>
							</div>
							<div className={styles.gf_card}>
								<div className={styles.gf_content}>
									<h3>Driving Sustainable Transformation for a Better Tomorrow</h3>
								</div>
							</div>
							<div className={styles.gf_card}>
								<div className={`${styles.gf_content} ${styles.gf_content_lg}`}>
									<p>Collaboration</p>
									<p>Innovation</p>
									<p>Action-Oriented</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className={styles.gf_meet_leadership_section}>
				<div className="contain">
					<div className={styles.gf_leadership_grid}>
						<div className={styles.gf_section_title_wrap}>
							<div className={styles.gf_pattern}>
								<Image
									src="/icons/pattern-blue.jpg"
									alt="Logo"
									fill
									sizes="40vw"
								/>
							</div>
							<h2 className={styles.gf_section_title}>
								Meet the Leadership
							</h2>
							<p>Our team comprises passionate experts, visionary leaders, and dedicated professionals from diverse fields.</p>
						</div>
						{leadership.map((person, i) => (
							<div
								key={i}
								className={`${styles.gf_leadership_card} ${i == 0 ? styles.gf_leadership_card_lg : ''}`}
							>
								<div className={styles.gf_avatar_wrap}>
									<Image
										src={person.image}
										alt={person.name}
										fill
										sizes="(max-width: 768px) 100vw, 200px"
									/>
								</div>
								<div className={styles.gf_leadership_info}>
									<h3 className={styles.gf_leadership_name}>
										{person.name}
									</h3>
									<p className={styles.gf_leadership_title}>
										{person.title}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage

const centers = [
	{
		title: "Center for GovTech",
		description: "Innovating technology for efficient government services",
		link: "/",
		Icon: <OneIcon />
	},
	{
		title: "Center for Emerging Technology",
		description: "Shaping the future with innovative advancements",
		link: "/",
		Icon: <TwoIcon />
	},
	{
		title: "Center for\nSustainability",
		description: "Advancing sustainable solutions for a greener future",
		link: "/",
		Icon: <ThreeIcon />
	},
	{
		title: "Center for\nEntrepreneurship",
		description: "Nurturing visionary leaders and groundbreaking ventures",
		link: "/",
		Icon: <FourIcon />
	},
	{
		title: "Center for Economic\nGrowth & Prosperity",
		description: "Pioneering innovative strategies for economic resilience & growth",
		link: "/",
		Icon: <FiveIcon />
	}
];

const leadership = [
    {
        name: "Sri Nara Chandrababu Naidu",
        title: "Hon’ble Chief Minister of Andhra Pradesh",
        image: "/icons/team-1.jpg",
    },
    {
        name: "S.P. Tucker, IAS (Retd.)",
        title: "Vice Chairman & Director",
        image: "/icons/team-2.jpg",
    },
    {
        name: "Cherukuri Kutumba Rao",
        title: "Director",
        image: "/icons/team-3.jpg",
    },
    {
        name: "Sanjay Gupta, IFS (Retd.)",
        title: "Chief Executive Officer",
        image: "/icons/team-4.jpg",
    },
];