// import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Project imports
import Navbar from "../components/Navbar";
import { useIsMobile } from "../Hooks/useIsMobile";

// Assets
import Barber2 from "../components/Barber2";
import Barber3 from "../components/Barber3";
import Barber4 from "../components/Barber4";
import Barber5 from "../components/Barber5";
import Barber6 from "../components/Barber6";
import Barber7 from "../components/Barber7";
import FacebookLogo from "../assets/facebook_logo.svg";
import InstagramLogo from "../assets/instagram_logo.svg";
import TikTokLogo from "../assets/tiktok_logo.svg";
import Photo1 from "../assets/page1photo.png";
import Photo2 from "../assets/page2photo.png";
import Gradient from "../assets/gradient.svg";

// Haircuts
import HaircutPhoto from "../assets/haircut1photo.jpg";
import Haircut2 from "../assets/haircut2.png";
import Haircut3 from "../assets/haircut3.png";
import Haircut4 from "../assets/haircut4.png";
import Haircut5 from "../assets/haircut5.png";
import Haircut6 from "../assets/haircut6.png";
import Haircut7 from "../assets/haircut7.png";

// Barbers
import PhotoJimmy from "../assets/page3jimmy.png";

// Texture
import Texture from "../assets/texture.png";

const HomePage = () => {
	const isMobile = useIsMobile();

<<<<<<< HEAD
	const [activeSection, setActiveSection] = useState("about");

	const handleScroll = useCallback(() => {
		const sections = document.querySelectorAll("[id]");
		let currentSection = "about";

		sections.forEach(section => {
			const rect = section.getBoundingClientRect();
			if (
				rect.top <= window.innerHeight / 3 &&
				rect.bottom >= window.innerHeight / 3
			) {
				currentSection = section.id;
			}
		});

		setActiveSection(currentSection);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check on load

		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: !isMobile ? 5 : 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
		pauseOnHover: false,
	};

	const reverseSettings = {
		...settings,
		rtl: true,
	};

	const fadeInFromLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
	};

	const fadeInFromRight = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	};

	const fadeInFromBottom = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	const slideInFromRight = {
		hidden: { opacity: 0, x: "100%" },
		visible: { opacity: 0.05, x: 0, transition: { duration: 1.5 } },
	};

	// eslint-disable-next-line react/prop-types
	const Section = ({ children, index }) => {
		// const variants = {
		// 	hidden: { opacity: 0, rotateX: 90, x: 0 },
		// 	visible: { opacity: 1, rotateX: 0, x: 0, transition: { duration: 1 } },
		// };

		const variantsSecond = {
			hidden: { opacity: 0, rotateY: 90, x: -50 },
			visible: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 1 } },
		};

		return (
			<motion.div
				key={index}
				className='section'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={variantsSecond}>
				{children}
			</motion.div>
		);
	};

	return (
		<div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-behavior-smooth'>
			<Navbar />
			{/* Pierwszy ekran */}
			{!isMobile ? (
				<Section index={1}>
					<section
						id='about'
						className='relative flex flex-col min-h-screen px-20 snap-start z-10 overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<motion.div
							className='flex flex-col items-start mt-[20%] leading-none max-w-screen-sm z-20'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromLeft}>
							<h1 className='text-textPrimary uppercase text-titleOne font-bold text-7xl  mb-[-20px]'>
								mento barber
							</h1>
							<h1
								className='uppercase font-bold text-9xl ml-[-4px]'
								style={{
									fontSize: "7.85rem",
									fontWeight: "bold",
									textTransform: "uppercase",
									color: "transparent",
									WebkitTextStroke: "2px #ff6600", // Obramowanie w WebKit
									textShadow:
										"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543", // Efekt neonowy
								}}>
								bochnia
							</h1>
							<p
								className='mt-4 max-w-xl text-[15px] text-gray-300 ml-[4px]'
								style={{ lineHeight: 2 }}>
								MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
								spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się
								na perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody
								oraz zadbanym zarostem.
							</p>
						</motion.div>

						<motion.div
							className='flex justify-between items-center w-full mt-auto py-[2rem] z-20'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromBottom}>
							<div className='flex space-x-4'>
								<div className='border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary'>
									Nad Babicą 2, Bochnia
								</div>
								<div className='border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary'>
									+48 123 456 789
								</div>
							</div>
							<div className='flex space-x-4 text-textPrimary items-center'>
								<img
									src={FacebookLogo}
									alt='facebook_logo'
									style={{ height: "48px" }}
								/>
								<img
									src={InstagramLogo}
									alt='instagram_logo'
									style={{ height: "38px" }}
								/>
								<img
									src={TikTokLogo}
									alt='tiktok_logo'
									style={{ height: "38px" }}
								/>
							</div>
						</motion.div>
						<motion.img
							src={Photo1}
							alt='Background'
							className='absolute bottom-0 right-0 w-[40%] h-auto pointer-events-none z-10'
							style={{ bottom: -60 }}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromRight}
						/>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 right-0 w-1/1 h-auto pointer-events-none z-0'
							style={{ top: -700, right: -650 }}
						/>
						<div
							className='absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10'
							style={{
								background:
									"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
							}}></div>
					</section>
				</Section>
			) : (
				<Section index={1}>
					<section
						id='about'
						className='relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<div className='flex flex-col items-center  mt-[10%] leading-none z-20 '>
							<div className='flex space-x-4 items-center gap-[32px] mb-[24px]'>
								<img
									src={FacebookLogo}
									alt='facebook_logo'
									style={{ height: "48px" }}
								/>
								<img
									src={InstagramLogo}
									alt='instagram_logo'
									style={{ height: "38px" }}
								/>
								<img
									src={TikTokLogo}
									alt='tiktok_logo'
									style={{ height: "38px" }}
								/>
							</div>
							<h1
								className='text-textPrimary uppercase text-titleOne font-bold text-center'
								style={{ fontSize: "2.95rem" }}>
								mento barber
							</h1>
							<h1
								className='uppercase font-bold text-center'
								style={{
									fontSize: "5rem",
									fontWeight: "bold",
									textTransform: "uppercase",
									color: "transparent",
									WebkitTextStroke: "2px #ff6600",
									textShadow:
										"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
								}}>
								bochnia
							</h1>
							<p
								className='text-center text-[14px] text-gray-300 mb-[48px]'
								style={{ lineHeight: 2 }}>
								MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
								spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się
								na perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody
								oraz zadbanym zarostem.
							</p>
							<div className='flex flex-col items-center space-y-[12px] w-full'>
								<div className='border-2 border-gray-400 rounded-full w-full py-[12px] px-5 text-textPrimary text-center'>
									Nad Babicą 2, Bochnia
								</div>
								<div className='border-2 border-gray-400 rounded-full w-full py-[12px] px-5 text-textPrimary text-center'>
									+48 123 456 789
								</div>
							</div>
						</div>
						<motion.img
							src={Photo1}
							alt='Background'
							className='absolute inset-0 mx-auto top-20 w-[150%] h-auto object-contain pointer-events-none z-10'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromRight}
						/>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 z-0 w-[800px] max-w-none'
							style={{ right: "-200px", top: "-200px" }}
						/>
						<div
							className='absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10'
							style={{
								background:
									"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
							}}></div>
					</section>
				</Section>
			)}
			{/* Drugi ekran - cennik */}
			{!isMobile ? (
				<Section index={2}>
					<section
						id='pricing'
						className='relative h-screen flex  items-center justify-end pt-[50px] text-prime snap-start overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #091E23, #090909), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<motion.div
							className='grid grid-cols-2 gap-6 pr-[98px]'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromLeft}>
							{[
								{ name: "STRZYŻENIE MĘSKIE", price: "80 PLN", time: "30 min" },
								{ name: "WŁOSY + BRODA", price: "130 PLN", time: "60 min" },
								{ name: "STRZYŻENIE BRODY", price: "60 PLN", time: "30 min" },
								{
									name: "BRODA + ODSIWIANIE",
									price: "130 PLN",
									time: "45 min",
								},
								{
									name: "COMBO + ODSIWIANIE",
									price: "190 PLN",
									time: "75 min",
								},
								{
									name: "COMBO (WŁOSY + BRODA)",
									price: "130 PLN",
									time: "60 min",
								},
								{
									name: "GŁOWA ZERO + BRODA",
									price: "100 PLN",
									time: "30 min",
								},
								{ name: "MYCIE WŁOSÓW", price: "10 PLN", time: "15 min" },
							].map((item, index) => (
								<div
									key={index}
									style={{ boxShadow: "0px 8px 10px #00000066" }}>
									<div
										className='p-4 text-start w-96 text-prime  rounded-md transition-all duration-300 hover:border-prime hover:shadow-[0_0_7px_rgba(255,120,0,1),inset_0_0_5px_rgba(255,120,0,1)] cursor-pointer'
										style={{
											backgroundColor: "#171D1F",
											opacity: 1,
										}}>
										<h3 className='font-bold'>{item.name}</h3>
										<p className='text-gray-300'>
											{item.price} | {item.time}
										</p>
									</div>
								</div>
							))}
						</motion.div>
						<div className='absolute bottom-0 right-0 pr-[98px] pb-[60px] text-[10px] text-center'>
							<p className='text-textPrimary'>
								Podane ceny tyczą się barberów zaawansowanych, ceny szczegółowe
								rozpisane są na booksy.
							</p>
						</div>

=======
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: !isMobile ? 5 : 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
		pauseOnHover: false,
	};

	const reverseSettings = {
		...settings,
		rtl: true,
	};

	const fadeInFromLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
	};

	const fadeInFromRight = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	};

	const fadeInFromBottom = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	const slideInFromRight = {
		hidden: { opacity: 0, x: "100%" },
		visible: { opacity: 0.05, x: 0, transition: { duration: 1.5 } },
	};

	// eslint-disable-next-line react/prop-types
	const Section = ({ children, index }) => {
		// const variants = {
		// 	hidden: { opacity: 0, rotateX: 90, x: 0 },
		// 	visible: { opacity: 1, rotateX: 0, x: 0, transition: { duration: 1 } },
		// };

		const variantsSecond = {
			hidden: { opacity: 0, rotateY: 90, x: -50 },
			visible: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 1 } },
		};

		return (
			<motion.div
				key={index}
				className='section'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={variantsSecond}>
				{children}
			</motion.div>
		);
	};

	return (
		<div className='h-screen overflow-y-scroll snap-y snap-mandatory'>
			<Navbar />
			{/* Pierwszy ekran */}
			{!isMobile ? (
				<Section index={1}>
					<div
						id='about'
						className='relative flex flex-col min-h-screen px-20 snap-start z-10 overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<motion.div
							className='flex flex-col items-start mt-[20%] leading-none max-w-screen-sm z-20'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromLeft}>
							<h1 className='text-textPrimary uppercase text-titleOne font-bold text-7xl  mb-[-20px]'>
								mento barber
							</h1>
							<h1
								className='uppercase font-bold text-9xl ml-[-4px]'
								style={{
									fontSize: "7.85rem",
									fontWeight: "bold",
									textTransform: "uppercase",
									color: "transparent",
									WebkitTextStroke: "2px #ff6600", // Obramowanie w WebKit
									textShadow:
										"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543", // Efekt neonowy
								}}>
								bochnia
							</h1>
							<p
								className='mt-4 max-w-xl text-[15px] text-gray-300 ml-[4px]'
								style={{ lineHeight: 2 }}>
								MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
								spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się
								na perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody
								oraz zadbanym zarostem.
							</p>
						</motion.div>

						<motion.div
							className='flex justify-between items-center w-full mt-auto py-[2rem] z-20'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromBottom}>
							<div className='flex space-x-4'>
								<div className='border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary'>
									Nad Babicą 2, Bochnia
								</div>
								<div className='border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary'>
									+48 123 456 789
								</div>
							</div>
							<div className='flex space-x-4 text-textPrimary items-center'>
								<img
									src={FacebookLogo}
									alt='facebook_logo'
									style={{ height: "48px" }}
								/>
								<img
									src={InstagramLogo}
									alt='instagram_logo'
									style={{ height: "38px" }}
								/>
								<img
									src={TikTokLogo}
									alt='tiktok_logo'
									style={{ height: "38px" }}
								/>
							</div>
						</motion.div>
						<motion.img
							src={Photo1}
							alt='Background'
							className='absolute bottom-0 right-0 w-[40%] h-auto pointer-events-none z-10'
							style={{ bottom: -60 }}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromRight}
						/>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 right-0 w-1/1 h-auto pointer-events-none z-0'
							style={{ top: -700, right: -650 }}
						/>
						<div
							className='absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10'
							style={{
								background:
									"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
							}}></div>
					</div>
				</Section>
			) : (
				<Section index={1}>
					<div
						id='about'
						className='relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<div className='flex flex-col items-center  mt-[10%] leading-none z-20 '>
							<div className='flex space-x-4 items-center gap-[32px] mb-[24px]'>
								<img
									src={FacebookLogo}
									alt='facebook_logo'
									style={{ height: "48px" }}
								/>
								<img
									src={InstagramLogo}
									alt='instagram_logo'
									style={{ height: "38px" }}
								/>
								<img
									src={TikTokLogo}
									alt='tiktok_logo'
									style={{ height: "38px" }}
								/>
							</div>
							<h1
								className='text-textPrimary uppercase text-titleOne font-bold text-center'
								style={{ fontSize: "2.95rem" }}>
								mento barber
							</h1>
							<h1
								className='uppercase font-bold text-center'
								style={{
									fontSize: "5rem",
									fontWeight: "bold",
									textTransform: "uppercase",
									color: "transparent",
									WebkitTextStroke: "2px #ff6600",
									textShadow:
										"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
								}}>
								bochnia
							</h1>
							<p
								className='text-center text-[14px] text-gray-300 mb-[48px]'
								style={{ lineHeight: 2 }}>
								MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
								spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się
								na perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody
								oraz zadbanym zarostem.
							</p>
							<div className='flex flex-col items-center space-y-[12px] w-full'>
								<div className='border-2 border-gray-400 rounded-full w-full py-[12px] px-5 text-textPrimary text-center'>
									Nad Babicą 2, Bochnia
								</div>
								<div className='border-2 border-gray-400 rounded-full w-full py-[12px] px-5 text-textPrimary text-center'>
									+48 123 456 789
								</div>
							</div>
						</div>
						<motion.img
							src={Photo1}
							alt='Background'
							className='absolute inset-0 mx-auto top-20 w-[150%] h-auto object-contain pointer-events-none z-10'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromRight}
						/>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 z-0 w-[800px] max-w-none'
							style={{ right: "-200px", top: "-200px" }}
						/>
						<div
							className='absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10'
							style={{
								background:
									"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
							}}></div>
					</div>
				</Section>
			)}
			{/* Drugi ekran - cennik */}
			{!isMobile ? (
				<Section index={2}>
					<div
						id='pricing'
						className='relative h-screen flex  items-center justify-end pt-[50px] text-prime snap-start overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #091E23, #090909), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<motion.div
							className='grid grid-cols-2 gap-6 pr-[98px]'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromLeft}>
							{[
								{ name: "STRZYŻENIE MĘSKIE", price: "80 PLN", time: "30 min" },
								{ name: "WŁOSY + BRODA", price: "130 PLN", time: "60 min" },
								{ name: "STRZYŻENIE BRODY", price: "60 PLN", time: "30 min" },
								{
									name: "BRODA + ODSIWIANIE",
									price: "130 PLN",
									time: "45 min",
								},
								{
									name: "COMBO + ODSIWIANIE",
									price: "190 PLN",
									time: "75 min",
								},
								{
									name: "COMBO (WŁOSY + BRODA)",
									price: "130 PLN",
									time: "60 min",
								},
								{
									name: "GŁOWA ZERO + BRODA",
									price: "100 PLN",
									time: "30 min",
								},
								{ name: "MYCIE WŁOSÓW", price: "10 PLN", time: "15 min" },
							].map((item, index) => (
								<div
									key={index}
									style={{ boxShadow: "0px 8px 10px #00000066" }}>
									<div
										className='p-4 text-start w-96 text-prime  rounded-md transition-all duration-300 hover:border-prime hover:shadow-[0_0_7px_rgba(255,120,0,1),inset_0_0_5px_rgba(255,120,0,1)] cursor-pointer'
										style={{
											backgroundColor: "#171D1F",
											opacity: 1,
										}}>
										<h3 className='font-bold'>{item.name}</h3>
										<p className='text-gray-300'>
											{item.price} | {item.time}
										</p>
									</div>
								</div>
							))}
						</motion.div>
						<div className='absolute bottom-0 right-0 pr-[98px] pb-[60px] text-[10px] text-center'>
							<p className='text-textPrimary'>
								Podane ceny tyczą się barberów zaawansowanych, ceny szczegółowe
								rozpisane są na booksy.
							</p>
						</div>

>>>>>>> dynamic-navbar-menu
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 left-0 w-1/1 h-auto pointer-events-none z-0'
							style={{ top: -300, left: -600 }}
						/>
						<img
							src={Photo2}
							alt='Background'
							className='absolute bottom-0 left-0 top-10 w-1/3 h-auto pointer-events-none'
						/>
<<<<<<< HEAD
					</section>
				</Section>
			) : (
				<Section index={2}>
					<section
=======
					</div>
				</Section>
			) : (
				<Section index={2}>
					<div
>>>>>>> dynamic-navbar-menu
						id='pricing'
						className='relative h-screen flex flex-col items-center justify-end pt-[20px] text-prime snap-start overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #091E23, #090909), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<motion.div
							className='grid grid-cols-1 gap-2 w-full px-4 mb-[20px] z-10'
							style={{ height: "85%" }}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromLeft}>
							{[
								{ name: "STRZYŻENIE MĘSKIE", price: "80 PLN", time: "30 min" },
								{ name: "WŁOSY + BRODA", price: "130 PLN", time: "60 min" },
								{ name: "STRZYŻENIE BRODY", price: "60 PLN", time: "30 min" },
								{
									name: "BRODA + ODSIWIANIE",
									price: "130 PLN",
									time: "45 min",
								},
								{
									name: "COMBO + ODSIWIANIE",
									price: "190 PLN",
									time: "75 min",
								},
								{
									name: "COMBO (WŁOSY + BRODA)",
									price: "130 PLN",
									time: "60 min",
								},
								{
									name: "GŁOWA ZERO + BRODA",
									price: "100 PLN",
									time: "30 min",
								},
								{ name: "MYCIE WŁOSÓW", price: "10 PLN", time: "15 min" },
							].map((item, index) => (
								<div
									key={index}
									className='p-2 flex flex-col justify-center items-center text-center text-prime rounded-md transition-all duration-300 hover:border-prime hover:shadow-[0_0_7px_rgba(255,120,0,1),inset_0_0_5px_rgba(255,120,0,1)] cursor-pointer'
									style={{
										backgroundColor: "#171D1F",
										boxShadow: "0px 8px 10px #00000066",
										opacity: 1,
									}}>
									<h3 className='font-bold' style={{ fontSize: "14px" }}>
										{item.name}
									</h3>
									<p className='text-gray-300' style={{ fontSize: "14px" }}>
										{item.price} | {item.time}
									</p>
								</div>
							))}
						</motion.div>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 z-0 w-[800px] max-w-none'
							style={{ right: "-125px", top: "-100px" }}
						/>
<<<<<<< HEAD
					</section>
=======
					</div>
>>>>>>> dynamic-navbar-menu
				</Section>
			)}
			{/* Trzeci ekran - barberzy */}
			{!isMobile ? (
				<Section index={3}>
<<<<<<< HEAD
					<section
=======
					<div
>>>>>>> dynamic-navbar-menu
						id='barbers'
						className='relative h-screen flex items-center justify-start p-10 text-white snap-start overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<motion.div
							className='text-start p-10'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromLeft}>
							<h1
								className='text-9xl font-bold text-orange-500'
								style={{
									fontSize: "7.85rem",
									fontWeight: "bold",
									textTransform: "uppercase",
									color: "transparent",
									WebkitTextStroke: "2px #ff6600",
									textShadow:
										"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
								}}>
								JIMMY
							</h1>
							<p className='mt-4 max-w-[430px] text-[15px] font-light'>
								Profesjonalizm to dla mnie podstawa – zawsze staram się zapewnić
								najwyższą jakość usług, dzieląc się swoją wiedzą o pielęgnacji i
								stylizacji. Choć kocham klasyczne cięcia, z radością
								eksperymentuję z nowymi trendami. Moje podejście do pracy to nie
								tylko precyzyjne cięcie, ale także dobra zabawa i pozytywna
								atmosfera, którą stwarzam wokół siebie.
							</p>
						</motion.div>
						<motion.div
							className='absolute w-full left-0 right-0 z-1'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={slideInFromRight}>
							<h1
								className='font-bold uppercase text-center'
								style={{
									fontSize: "30vw",
									fontWeight: "bold",
									color: "transparent",
									WebkitTextStroke: "4px #ff6600",
									width: "100%",
									whiteSpace: "nowrap",
								}}>
								JIMMY
							</h1>
						</motion.div>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 right-0 w-1/2 h-auto pointer-events-none z-0'
							style={{ top: -350, right: -350 }}
						/>
						<img
							src={PhotoJimmy}
							alt='Background'
							className='absolute bottom-0 right-0 w-1/2 h-auto pointer-events-none'
							style={{ bottom: -240, right: -95, zIndex: 1 }}
						/>
<<<<<<< HEAD
					</section>
				</Section>
			) : (
				<Section index={1}>
					<section
						id='about'
=======
					</div>
				</Section>
			) : (
				<Section index={1}>
					<div
						id='barbers'
>>>>>>> dynamic-navbar-menu
						className='relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden'
						style={{
							background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundBlendMode: "multiply",
						}}>
						<div className='flex flex-col items-center  mt-[10%] leading-none z-20 '>
							<h1
								className='font-bold uppercase text-center'
								style={{
									fontSize: "25vw",
									fontWeight: "bold",
									color: "transparent",
									WebkitTextStroke: "2px #ff6600",
									width: "100%",
									whiteSpace: "nowrap",
								}}>
								JIMMY
							</h1>
							<p className='mt-4 max-w-[430px] text-[18px] font-light text-white text-center'>
								Profesjonalizm to dla mnie podstawa – zawsze staram się zapewnić
								najwyższą jakość usług, dzieląc się swoją wiedzą o pielęgnacji i
								stylizacji. Choć kocham klasyczne cięcia, z radością
								eksperymentuję z nowymi trendami. Moje podejście do pracy to nie
								tylko precyzyjne cięcie, ale także dobra zabawa i pozytywna
								atmosfera, którą stwarzam wokół siebie.
							</p>
							<div className='flex flex-col items-center space-y-[12px] w-full'>
								<button className='button p-[16px] border-2 w-full border-prime rounded-[16px] text-prime mb-[24px] mt-[24px]'>
									Umów wizytę
								</button>
							</div>
						</div>
						<motion.img
							src={PhotoJimmy}
							alt='Background'
							className='absolute top-0 w-[700px] max-w-none z-10' // Added maxWidth constraint
							style={{ right: "-125px", top: "-200px" }}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInFromRight}
						/>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute top-0 z-0 w-[800px] max-w-none'
							style={{ right: "-200px", top: "-200px" }}
						/>
						<div
							className='absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10'
							style={{
								background:
									"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
							}}></div>
<<<<<<< HEAD
					</section>
=======
					</div>
>>>>>>> dynamic-navbar-menu
				</Section>
			)}
			{/* Barbers */}
			<Barber2 />
			<Barber3 />
			<Barber4 />
			<Barber5 />
			<Barber6 />
<<<<<<< HEAD
			<section id='barbers'>
				<Barber7 />
			</section>
			{/* Czwarty ekran - nasze prace */}
			<section
=======
			<div id='barbers-end'>
				<Barber7 />
			</div>
			{/* Czwarty ekran - nasze prace */}
			<div
>>>>>>> dynamic-navbar-menu
				id='works'
				className='relative h-screen flex items-center justify-center text-white snap-start overflow-hidden z-10'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}>
				<div className='w-full pt-[120px]'>
					<div className='w-full'>
						<Slider {...settings} className='space-x-4'>
							{[
								HaircutPhoto,
								Haircut2,
								Haircut3,
								Haircut4,
								Haircut5,
								Haircut6,
								Haircut7,
							].map((photo, index) => (
								<div key={index} className='p-3'>
									<div className='p-2 border-[3px] border-prime rounded-md shadow-[0_0_7px_rgba(255,120,0,0.8),inset_0_0_7px_rgba(255,120,0,0.8)]'>
										<img
											src={photo}
											alt='Haircut'
											className='w-full h-full object-cover rounded-md'
											style={{ height: "35vh" }}
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className='w-full mt-[-5px]'>
						<Slider {...reverseSettings} className='space-x-4'>
							{[
								HaircutPhoto,
								Haircut2,
								Haircut3,
								Haircut4,
								Haircut5,
								Haircut6,
								Haircut7,
							].map((photo, index) => (
								<div key={index} className='p-3'>
									<div className='p-2 border-[3px] border-prime rounded-md shadow-[0_0_7px_rgba(255,120,0,0.8),inset_0_0_7px_rgba(255,120,0,0.8)]'>
										<img
											src={photo}
											alt='Haircut'
											className='w-full h-full object-cover rounded-md'
											style={{ height: "35vh" }}
										/>
									</div>
								</div>
							))}
						</Slider>
						<img
							src={Gradient}
							alt='Gradient'
							className='absolute w-1/1 h-auto pointer-events-none z-0 opacity-70'
							style={{ top: "-50%" }}
						/>
					</div>
				</div>
<<<<<<< HEAD
			</section>
=======
			</div>
>>>>>>> dynamic-navbar-menu
		</div>
	);
};

export default HomePage;
