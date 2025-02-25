import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
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
				className='flex flex-col min-h-screen px-20 pt-12 snap-start'>
				<div className='flex flex-col items-start mt-60 leading-none max-w-screen-sm'>
					<h1 className='text-textPrimary uppercase text-titleOne'>
						mento barber
					</h1>
					<h1 className='text-titleTwo uppercase'>bochnia</h1>
					<p>
						MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
						spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się na
						perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody, oraz
						zadbanym zarostem.
					</p>
				</div>
				<div className='flex justify-between items-center w-full mt-auto py-4'>
					<div className='flex space-x-4'>
						<div className='border border-gray-400 rounded-full p-2 text-textPrimary'>
							Nad Babicą 2, Bochnia
						</div>
						<div className='border border-gray-400 rounded-full p-2 text-textPrimary'>
							+48 123 456 789
						</div>
					</div>
					<div className='flex space-x-4 text-textPrimary'>
						<div>Facebook</div>
						<div>Instagram</div>
						<div>TikTok</div>
					</div>
				</div>
			</div>
			{/* Drugi ekran - cennik */}
			<div
				id='pricing'
				className='h-screen flex items-center justify-center bg-black text-white snap-start'>
				<div className='grid grid-cols-2 gap-6 p-10 border border-orange-500'>
					<div className='border p-4'>STRZYŻENIE MĘSKIE - 80 PLN | 30 min</div>
					<div className='border p-4'>WŁOSY + BRODA - 130 PLN | 60 min</div>
					<div className='border p-4'>STRZYŻENIE BRODY - 60 PLN | 30 min</div>
					<div className='border p-4'>
						BRODA + ODSIWIANIE - 130 PLN | 45 min
					</div>
				</div>
			</div>
			{/* Trzeci ekran - barberzy */}
			<div
				id='barbers'
				className='h-screen flex items-center justify-center bg-darkBlue text-white snap-start'>
				<div className='text-center p-10'>
					<h1 className='text-6xl font-bold text-orange-500'>JIMMY</h1>
					<p className='mt-4 max-w-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
						sollicitudin libero, vitae eleifend ante. Donec quis tellus
						bibendum, tincidunt massa id, euismod nisl.
					</p>
				</div>
			</div>
			{/* Czwarty ekran - nasze prace */}
			<div
				id='works'
				className='h-screen flex items-center justify-center bg-black text-white snap-start'>
				<div className='text-center w-full'>
					<div className='w-full'>
						<Slider {...settings}>
							<div className='bg-red-500 p-4'>
								<h3>1</h3>
							</div>
							<div className='bg-green-500 p-4'>
								<h3>2</h3>
							</div>
							<div className='bg-blue-500 p-4'>
								<h3>3</h3>
							</div>
							<div className='bg-yellow-500 p-4'>
								<h3>4</h3>
							</div>
							<div className='bg-purple-500 p-4'>
								<h3>5</h3>
							</div>
							<div className='bg-pink-500 p-4'>
								<h3>6</h3>
							</div>
						</Slider>
					</div>
					<div className='w-full mt-10'>
						<Slider {...reverseSettings}>
							<div className='bg-red-500 p-4'>
								<h3>1</h3>
							</div>
							<div className='bg-green-500 p-4'>
								<h3>2</h3>
							</div>
							<div className='bg-blue-500 p-4'>
								<h3>3</h3>
							</div>
							<div className='bg-yellow-500 p-4'>
								<h3>4</h3>
							</div>
							<div className='bg-purple-500 p-4'>
								<h3>5</h3>
							</div>
							<div className='bg-pink-500 p-4'>
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
