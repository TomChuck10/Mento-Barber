import { useState, useEffect } from "react";
import Logo from "../assets/mento_logo.png";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("");

	const scrollToSection = sectionId => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "pricing", "barbers", "works"];
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (let section of sections) {
				const element = document.getElementById(section);
				if (
					element &&
					element.offsetTop <= scrollPosition &&
					element.offsetTop + element.offsetHeight > scrollPosition
				) {
					setActiveSection(section);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className='flex justify-between items-center w-full fixed top-10 left-0 bg-transparent px-20 py-4 z-50'>
			<div className='flex space-x-[32px] uppercase text-lg'>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "about" ? "text-prime" : ""
					}`}
					onClick={() => scrollToSection("about")}>
					{activeSection === "about" && (
						<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
					)}
					o nas
				</p>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "pricing" ? "text-prime" : ""
					}`}
					onClick={() => scrollToSection("pricing")}>
					{activeSection === "pricing" && (
						<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
					)}
					cennik
				</p>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "barbers" ? "text-prime" : ""
					}`}
					onClick={() => scrollToSection("barbers")}>
					{activeSection === "barbers" && (
						<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
					)}
					barberzy
				</p>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "works" ? "text-prime" : ""
					}`}
					onClick={() => scrollToSection("works")}>
					{activeSection === "works" && (
						<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
					)}
					nasze prace
				</p>
			</div>
			<div className='flex justify-center absolute left-1/2 transform -translate-x-1/2'>
				<img src={Logo} alt='Vite Icon' className='logo' />
			</div>
			<div className='flex space-x-[32px] uppercase text-lg'>
				<p className='text-textPrimary cursor-pointer'>blog</p>
				<p className='text-textPrimary cursor-pointer'>szkolenia</p>
				<p className='text-prime cursor-pointer flex items-center gap-2'>
					<span>{`>`}</span> zarezerwuj <span>{`<`}</span>
				</p>
			</div>
			<style>{`
				.logo {
					height: 80px;
					margin-top: -10px;
				}
				@media (min-width: 1800px) {
					.logo {
						height: 140px;
						margin-top: 20px;
					}
				}
			`}</style>
		</nav>
	);
};

export default Navbar;
