import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Logo from "../assets/mento_logo.png";
// import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const scrollToSection = sectionId => {
		if (location.pathname !== "/") {
			navigate("/", { state: { scrollTo: sectionId } });
		} else {
			scrollAndSetActive(sectionId);
		}
	};

	const scrollAndSetActive = sectionId => {
		setTimeout(() => {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				setActiveSection(sectionId);
			}
		}, 100);
	};

	useEffect(() => {
		if (location.state?.scrollTo) {
			scrollAndSetActive(location.state.scrollTo);
		}
	}, [location]);

	useEffect(() => {
		if (
			location.pathname === "/training" ||
			location.pathname === "/blog" ||
			location.pathname === "/blog/boy-haircut"
		) {
			setActiveSection("");
		}
	}, [location.pathname]);

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
		<nav className='fixed top-5 md:top-10 left-0 w-full z-50 px-4 md:px-[98px]'>
			<div className='flex justify-between items-center'>
				{/* Logo */}
				<div className='md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20'>
					<Link to='/'>
						<img
							src={Logo}
							alt='Logo'
							className='logo cursor-pointer h-[60px] md:h-[80px] md:mt-[-20px]'
						/>
					</Link>
				</div>

				{/* Desktop Links */}
				<div className='hidden md:flex space-x-[32px] uppercase text-lg font-light'>
					<p
						className={`cursor-pointer flex items-center ${
							activeSection === "about" ? "text-prime" : "text-textPrimary"
						}`}
						onClick={() => scrollToSection("about")}>
						{activeSection === "about" && (
							<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
						)}
						o nas
					</p>
					<p
						className={`cursor-pointer flex items-center ${
							activeSection === "pricing" ? "text-prime" : "text-textPrimary"
						}`}
						onClick={() => scrollToSection("pricing")}>
						{activeSection === "pricing" && (
							<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
						)}
						cennik
					</p>
					<p
						className={`cursor-pointer flex items-center ${
							activeSection === "barbers" ? "text-prime" : "text-textPrimary"
						}`}
						onClick={() => scrollToSection("barbers")}>
						{activeSection === "barbers" && (
							<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
						)}
						barberzy
					</p>
					<p
						className={`cursor-pointer flex items-center ${
							activeSection === "works" ? "text-prime" : "text-textPrimary"
						}`}
						onClick={() => scrollToSection("works")}>
						{activeSection === "works" && (
							<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
						)}
						nasze prace
					</p>
				</div>

				{/* Desktop Right Side */}
				<div className='hidden md:flex space-x-[32px] uppercase text-lg font-light'>
					<Link to='/blog'>
						<p
							className={`cursor-pointer flex items-center ${
								location.pathname.includes("/blog")
									? "text-prime"
									: "text-textPrimary"
							}`}>
							{location.pathname.includes("/blog") && (
								<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
							)}
							blog
						</p>
					</Link>
					<Link to='/training'>
						<p
							className={`cursor-pointer flex items-center ${
								location.pathname === "/training"
									? "text-prime"
									: "text-textPrimary"
							}`}>
							{location.pathname === "/training" && (
								<span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
							)}
							szkolenia
						</p>
					</Link>
					<p className='text-prime cursor-pointer flex items-center gap-2'>
						<span>{`>`}</span> zarezerwuj <span>{`<`}</span>
					</p>
				</div>

				{/* Mobile Menu Icon */}
				<div className='md:hidden z-20'>
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='text-3xl text-prime focus:outline-none'>
						{isMobileMenuOpen ? "X" : "X"}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center text-lg font-light uppercase z-10'>
					<ul className='flex flex-col gap-8 text-center text-white text-[18px]'>
						<li
							onClick={() => {
								scrollToSection("about");
								setIsMobileMenuOpen(false);
							}}>
							o nas
						</li>
						<li
							onClick={() => {
								scrollToSection("pricing");
								setIsMobileMenuOpen(false);
							}}>
							cennik
						</li>
						<li
							onClick={() => {
								scrollToSection("barbers");
								setIsMobileMenuOpen(false);
							}}>
							barberzy
						</li>
						<li
							onClick={() => {
								scrollToSection("works");
								setIsMobileMenuOpen(false);
							}}>
							nasze prace
						</li>
						<li>
							<Link to='/blog' onClick={() => setIsMobileMenuOpen(false)}>
								blog
							</Link>
						</li>
						<li>
							<Link to='/training' onClick={() => setIsMobileMenuOpen(false)}>
								szkolenia
							</Link>
						</li>
						<li>
							<p className='text-prime'>{`> zarezerwuj <`}</p>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
