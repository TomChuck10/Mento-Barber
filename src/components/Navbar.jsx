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
			<div className='flex space-x-10 uppercase'>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "about" ? "text-orange-700" : ""
					}`}
					onClick={() => scrollToSection("about")}>
					{activeSection === "about" && (
						<span className='w-2 h-2 bg-orange-700 rounded-full mr-2'></span>
					)}
					o nas
				</p>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "pricing" ? "text-orange-700" : ""
					}`}
					onClick={() => scrollToSection("pricing")}>
					{activeSection === "pricing" && (
						<span className='w-2 h-2 bg-orange-700 rounded-full mr-2'></span>
					)}
					cennik
				</p>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "barbers" ? "text-orange-700" : ""
					}`}
					onClick={() => scrollToSection("barbers")}>
					{activeSection === "barbers" && (
						<span className='w-2 h-2 bg-orange-700 rounded-full mr-2'></span>
					)}
					barberzy
				</p>
				<p
					className={`text-textPrimary cursor-pointer flex items-center ${
						activeSection === "works" ? "text-orange-700" : ""
					}`}
					onClick={() => scrollToSection("works")}>
					{activeSection === "works" && (
						<span className='w-2 h-2 bg-orange-700 rounded-full mr-2'></span>
					)}
					nasze prace
				</p>
			</div>
			<div className='flex justify-center absolute left-1/2 transform -translate-x-1/2'>
				<img
					src={Logo}
					alt='Vite Icon'
					style={{ height: "80px", marginTop: "10px" }}
				/>
			</div>
			<div className='flex space-x-10 uppercase'>
				<p className='text-textPrimary'>blog</p>
				<p className='text-textPrimary'>szkolenia</p>
				<p className='text-textPrimary'>{`${`>zarezerwuj<`}`}</p>
			</div>
		</nav>
	);
};

export default Navbar;
