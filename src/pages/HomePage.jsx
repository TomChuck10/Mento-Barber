import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookLogo from "../assets/facebook_logo.svg";
import InstagramLogo from "../assets/instagram_logo.svg";
import TikTokLogo from "../assets/tiktok_logo.svg";
import Photo1 from "../assets/page1photo.png";
import Photo2 from "../assets/page2photo.png";
import PhotoJimmy from "../assets/page3jimmy.png";
import Gradient from "../assets/gradient.svg";
import HaircutPhoto from "../assets/haircut1photo.jpg";

const HomePage = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4.5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
		pauseOnHover: false,
	};

	const reverseSettings = {
		...settings,
		rtl: true,
	};

	return (
		<div className='h-screen overflow-y-scroll snap-y snap-mandatory'>
			<Navbar />
			{/* Pierwszy ekran */}
			<div
				id='about'
				className='relative flex flex-col min-h-screen px-20 pt-12 snap-start bg-bgPrimary z-10 overflow-hidden'>
				<div className='flex flex-col items-start mt-60 leading-none max-w-screen-sm'>
					<h1 className='text-textPrimary uppercase text-titleOne font-bold text-7xl'>
						mento barber
					</h1>
					<h1
						className='uppercase font-bold text-9xl'
						style={{
							fontSize: "7.85rem",
							fontWeight: "bold",
							textTransform: "uppercase",
							color: "transparent",
							WebkitTextStroke: "2px #ff6600", // Obramowanie w WebKit
							textShadow:
								"0 0 10px #ff6600, 0 0 10px #ff4500, 0 0 30px #ff3300", // Efekt neonowy
						}}>
						bochnia
					</h1>
					<p
						className='mt-4 max-w-xl text-[15px] text-gray-300'
						style={{ lineHeight: 2 }}>
						MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
						spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się na
						perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody oraz
						zadbanym zarostem.
					</p>
				</div>

				<div className='flex justify-between items-center w-full mt-auto py-4 z-20'>
					<div className='flex space-x-4'>
						<div className='border-2 border-gray-400 rounded-full p-2 text-textPrimary'>
							Nad Babicą 2, Bochnia
						</div>
						<div className='border-2 border-gray-400 rounded-full p-2 text-textPrimary'>
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
				</div>
				<img
					src={Gradient}
					alt='Gradient'
					className='absolute top-0 right-0 w-1/1 h-auto pointer-events-none z-0'
					style={{ top: -700, right: -650 }}
				/>
				<img
					src={Photo1}
					alt='Background'
					className='absolute bottom-0 right-0 w-[40%] h-auto pointer-events-none z-10'
					style={{ bottom: -60 }}
				/>
			</div>
			{/* Drugi ekran - cennik */}
			<div
				id='pricing'
				className='relative h-screen flex  items-center justify-end pt-[50px] bg-black text-prime snap-start overflow-hidden'>
				<div className='grid grid-cols-2 gap-6 pr-[98px]'>
					{[
						{ name: "STRZYŻENIE MĘSKIE", price: "80 PLN", time: "30 min" },
						{ name: "WŁOSY + BRODA", price: "130 PLN", time: "60 min" },
						{ name: "STRZYŻENIE BRODY", price: "60 PLN", time: "30 min" },
						{ name: "BRODA + ODSIWIANIE", price: "130 PLN", time: "45 min" },
						{ name: "COMBO + ODSIWIANIE", price: "190 PLN", time: "75 min" },
						{ name: "COMBO (WŁOSY + BRODA)", price: "130 PLN", time: "60 min" },
						{ name: "GŁOWA ZERO + BRODA", price: "100 PLN", time: "30 min" },
						{ name: "MYCIE WŁOSÓW", price: "10 PLN", time: "15 min" },
					].map((item, index) => (
						<div
							key={index}
							className='p-4 text-start w-96 text-prime border-2 border-prime border-opacity-[0.5] rounded-md transition-all duration-300 
                   hover:border-prime hover:shadow-[0_0_15px_rgba(255,120,0,0.8)] cursor-pointer'>
							<h3 className='font-bold'>{item.name}</h3>
							<p className='text-gray-300'>
								{item.price} | {item.time}
							</p>
						</div>
					))}
				</div>
				<div className='absolute bottom-0 right-0 pr-[98px] pb-[60px] text-[10px] text-center'>
					<p className='text-textPrimary'>
						Podane ceny tyczą się barberów zaawansowanych, ceny szczegółowe
						rozpisane są na booksy.
					</p>
				</div>

				<img
					src={Gradient}
					alt='Gradient'
					className='absolute top-0 left-0 w-1/1 h-auto pointer-events-none z-0'
					style={{ top: -300, left: -600 }}
				/>
				<img
					src={Photo2}
					alt='Background'
					className='absolute bottom-0 left-0 top-4 w-1/3 h-auto pointer-events-none'
				/>
			</div>
			{/* Trzeci ekran - barberzy */}
			<div
				id='barbers'
				className='relative h-screen flex items-center justify-start p-10 bg-darkBlue text-white snap-start overflow-hidden'>
				<div className='text-start p-10'>
					<h1
						className='text-9xl font-bold text-orange-500'
						style={{
							fontSize: "8.3rem",
							fontWeight: "bold",
							textTransform: "uppercase",
							color: "transparent",
							WebkitTextStroke: "2px #ff6600", // Obramowanie w WebKit
							textShadow:
								"0 0 10px #ff6600, 0 0 10px #ff4500, 0 0 30px #ff3300", // Efekt neonowy
						}}>
						JIMMY
					</h1>
					<p className='mt-4 max-w-[430px] text-[15px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
						sollicitudin libero, vitae eleifend ante. Donec quis tellus
						bibendum, tincidunt massa id, euismod nisl.
					</p>
				</div>
				<div
					className='absolute w-full left-0 right-0 z-1'
					style={{ zIndex: -1 }}>
					<h1
						className='text-9xl font-bold text-orange-500 text-center'
						style={{
							fontSize: "30rem", //37.5rem
							fontWeight: "bold",
							textTransform: "uppercase",
							color: "transparent",
							WebkitTextStroke: "4px #ff6600",
							opacity: 0.05,
						}}>
						JIMMY
					</h1>
				</div>
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
					style={{ bottom: -240, right: -95 }}
				/>
			</div>
			{/* Czwarty ekran - nasze prace */}
			<div
				id='works'
				className='h-screen flex items-center justify-center bg-black text-white snap-start'>
				<div className='w-full pt-[120px]'>
					<div className='w-full'>
						<Slider {...settings} style={{ marginBottom: "-40px" }}>
							<div
								className='bg-gray-500 p-2 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'
								style={{ height: "300px" }}>
								<img
									src={HaircutPhoto}
									alt='Haircut Photo'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>2</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>3</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>4</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>5</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>6</h3>
							</div>
						</Slider>
					</div>
					<div className='w-full mt-8'>
						<Slider {...reverseSettings}>
							<div className='bg-gray-500 p-2 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<img
									src={HaircutPhoto}
									alt='Haircut Photo'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>2</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>3</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>4</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>5</h3>
							</div>
							<div className='bg-gray-500 p-4 m-2 border-2 h-[275px] border-orange-500 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,120,0,0.8)]'>
								<h3>6</h3>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
