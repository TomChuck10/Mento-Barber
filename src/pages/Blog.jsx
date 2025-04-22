import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Project imports
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Texture from "../assets/texture.png";
import BoyHaircut from "../assets/fryzury_chlopcy.png";
import Slickback from "../assets/2_slickback.png";
import ManHaicut from "../assets/3_meska_fryzura.png";
import Bangs from "../assets/4_grzywka.png";
import SkinFade from "../assets/5_skinfade.png";
import Beard from "../assets/6_broda.png";
import BarberPole from "../assets/7_barber_pole.png";
import BuzzCut from "../assets/8_buzzcut.png";
import Hairline from "../assets/9_zakolexd.png";

const Blog = () => {
	const navigate = useNavigate();
	const isMobile = useIsMobile();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStart, setTouchStart] = useState(0);

	const content = [
		{
			id: 1,
			title: "Fryzura dla Chłopca – TOP 7 inspiracji i pomysłów",
			description:
				"Kiedy przychodzi pora na zmianę fryzura dla chłopca, wybór odpowiedniego stylu może być trudny. Dlatego przygotowaliśmy zestawienie z siedmioma inspiracjami i pomysłami na nowe fryzurki, które sprawdzą się doskonale u młodych chłopców. Odkryj różnorodne propozycje, od klasycznych po bardziej wyraziste, i znajdź idealny look dla swojego dziecka!",
			image: BoyHaircut,
			path: "boy-haircut",
		},
		{
			id: 2,
			title: "Slick Back, czyli fryzura męska zaczesana do tyłu",
			description:
				"W świecie męskich fryzur jednym z najbardziej klasycznych i eleganckich stylów jest bez wątpienia „slick back” – czyli fryzura męska zaczesana do tyłu. Ten ponadczasowy look zdobi głowy mężczyzn od dziesięcioleci, nadając im pewności siebie i stylowego wyrazu.",
			image: Slickback,
			path: "boy-haircut",
		},
		{
			id: 3,
			title: "Modne Męskie Fryzury na Rok 2024: Rozbudowany Przegląd Trendów",
			description:
				"Rok 2024 przynosi ze sobą nie tylko nowe wyzwania, ale również świeże i zaskakujące pomysły w świecie męskich fryzur. 5 Propozycji na męskie fryzury na rok 2024 – Pośród nich znajdziesz zarówno klasyczne propozycje, jak i te bardziej eksperymentalne. Zachęcamy do bliższego poznania czterech kluczowych trendów, które zdominują męskie fryzury w nadchodzącym roku, a także do odkrycia dwóch dodatkowych propozycji, które z pewnością przyciągną uwagę odważnych dżentelmenów.",
			image: ManHaicut,
			path: "boy-haircut",
		},
		{
			id: 4,
			title: "Męska Fryzura z Grzywką: 9 Inspirujących Propozycji",
			description:
				"Czy Męska fryzura z grzywką to dobry pomysł ? Sprawdźmy. Grzywka w męskiej fryzurze to element, który nadaje charakteru i stylu. W ciągu ostatnich lat grzywki wróciły do mody, co otworzyło szerokie pole do eksperymentowania z różnymi fryzurami. Niezależnie od tego, czy masz kręcone, proste, czy falowane włosy, istnieje wiele interesujących pomysłów na męskie fryzury z grzywką. Przedstawiamy dziesięć inspirujących propozycji, które pomogą Ci wybrać idealny look.",
			image: Bangs,
			path: "boy-haircut",
		},
		{
			id: 5,
			title: "Fryzura Skin Fade: Trendy i Inspiracje",
			description:
				"Fryzura skin fade to jedna z najbardziej znanych i popularnych fryzur męskich. Jej charakterystyczną cechą jest stopniowe przechodzenie z bardzo krótkich włosów na górze głowy do praktycznie wygolonej skóry po bokach i z tyłu. To styl, który zdobył ogromną popularność w ostatnich latach i zyskuje coraz więcej zwolenników. Jednak czy jest odpowiedni dla każdego?",
			image: SkinFade,
			path: "boy-haircut",
		},
		{
			id: 6,
			title: "Jak Wyleczyć Łupież na Brodzie",
			description:
				"Łupież na brodzie to problem, który może dotknąć nie tylko skórę głowy, ale także obszar twarzy. To irytujące schorzenie może prowadzić do świądu, pieczenia oraz spadku pewności siebie. Na szczęście istnieje wiele sposobów, aby zwalczyć łupież na brodzie i przywrócić zdrowy i czysty wygląd. W tym artykule dowiesz się, jak radzić sobie z łupieżem na brodzie, łuszczącą się skórą pod brodą oraz problemem łupieżu na brodzie i brwiach.",
			image: Beard,
			path: "boy-haircut",
		},
		{
			id: 7,
			title: "Barber Pole – Słupek Barberski",
			description:
				"Słupek barberski, znany również jako Barber Pole, to ikoniczny symbol salonów fryzjerskich i barberskich. Te biało-niebieskie słupki mają bogatą historię i symbolikę, której źródła sięgają wieków. W tym artykule zgłębimy historię Barber Pole, zrozumiemy jego znaczenie, przeanalizujemy koszty takiego znaku rozpoznawczego, a także odkryjemy fascynującą ciekawostkę dotyczącą jego pochodzenia.",
			image: BarberPole,
			path: "boy-haircut",
		},
		{
			id: 8,
			title: "Fryzura Buzz Cut – Minimalizm i wygoda",
			description:
				"Kiedy mówimy o fryzurze Buzz Cut, nie ma miejsca na zbędne komplikacje. Fryzura Buzz Cut o idealny wybór dla tych, którzy cenią sobie minimalistyczny styl i wygodę. W tym artykule zgłębimy tajemnice fryzury Buzz Cut, odkryjemy, komu pasuje, oraz przyjrzymy się, jak można ją dostosować do męskich zakoli.",
			image: BuzzCut,
			path: "boy-haircut",
		},
		{
			id: 9,
			title: "Najlepsze Fryzury na zakola",
			description:
				"Zakola mogą stanowić wyzwanie, ale odpowiednio dobrana fryzura może zdziałać cuda, pomagając ukryć to, co Cię niepokoi. To problem, który dotyka wielu mężczyzn, i nie ma w tym nic złego. Zakola są naturalną częścią procesu starzenia się, jednak nie każdy jest nimi zachwycony. Dla tych, którzy chcieliby zatuszować ten aspekt swojego wyglądu, istnieje wiele kreatywnych rozwiązań.",
			image: Hairline,
			path: "boy-haircut",
		},
	];

	const handleScroll = event => {
		const { deltaY } = event;
		if (deltaY > 0 && currentIndex < content.length - 1) {
			setCurrentIndex(prev => prev + 1);
		} else if (deltaY < 0 && currentIndex > 0) {
			setCurrentIndex(prev => prev - 1);
		}
	};

	const handleTouchStart = event => {
		setTouchStart(event.touches[0].clientY);
	};

	const handleTouchMove = event => {
		const touchEnd = event.touches[0].clientY;
		const distance = touchStart - touchEnd;

		// Minimalna odległość przesunięcia, aby zmienić sekcję
		const threshold = 100;

		if (distance > threshold && currentIndex < content.length - 1) {
			setCurrentIndex(prev => prev + 1);
			setTouchStart(touchEnd); // Resetuj punkt początkowy, aby uniknąć wielokrotnego przeskakiwania
		} else if (distance < -threshold && currentIndex > 0) {
			setCurrentIndex(prev => prev - 1);
			setTouchStart(touchEnd); // Resetuj punkt początkowy, aby uniknąć wielokrotnego przeskakiwania
		}
	};

	return !isMobile ? (
		<div className='h-screen overflow-hidden' onWheel={handleScroll}>
			{/* Desktop View */}
			<Navbar />
			<div
				id='about'
				className='relative flex flex-col justify-end items-center min-h-screen px-[96px] z-10 overflow-hidden'
				style={{
					backgroundImage: `linear-gradient(90deg, #090909, #091E23), url(${content[currentIndex].image}), url(${Texture})`,
					backgroundSize: "cover, cover",
					backgroundRepeat: "no-repeat, repeat",
					backgroundPosition: "center, center",
					backgroundBlendMode: "multiply",
					opacity: 1, // Added opacity to make it more transparent
				}}>
				<div className='z-20 flex flex-row justify-between w-full items-end'>
					<div className='flex flex-col items-start mt-60 leading-none max-w-screen-sm z-20'>
						<h1 className='title text-[32px] text-prime font-bold'>
							{content[currentIndex].title}
						</h1>
						<p
							className='description text-[13px] mt-4 max-w-xl text-gray-300'
							style={{ lineHeight: 2 }}>
							{content[currentIndex].description}
						</p>
						<button
							className='button p-[12px] border-2 w-full border-prime rounded-[16px] text-prime mb-[96px] mt-[24px]'
							onClick={() => navigate(`/blog/${content[currentIndex].path}`)}>
							Kliknij aby przeczytać
						</button>
					</div>

					<div className='flex flex-col items-center space-y-3 mb-[96px]'>
						{content.map((_, index) => (
							<div
								key={index}
								className={`${
									index === currentIndex &&
									"w-5 h-5 border-[1px] border-gray-500 rounded-full flex items-center justify-center"
								}`}
								onClick={() => setCurrentIndex(index)} // Added click handler
								style={{ cursor: "pointer" }} // Added pointer cursor for better UX
							>
								<div
									className={`rounded-full border-2 ${
										index === currentIndex
											? "bg-prime border-prime w-3 h-3 m-auto"
											: "border-[#FFF8E7] w-5 h-5"
									}`}
								/>
							</div>
						))}
					</div>
				</div>
				<img
					src={Gradient}
					alt='Gradient'
					className='absolute top-0 right-0 pointer-events-none z-20'
					style={{ top: -350, opacity: 0.5, width: "250%", height: "auto" }}
				/>
				<div
					className='absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10'
					style={{
						background:
							"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
						opacity: 0.5,
					}}></div>
			</div>
		</div>
	) : (
		<div
			className='h-screen overflow-hidden'
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}>
			{/* Mobile View */}
			<Navbar />
			<div
				id='about'
				className='relative flex flex-col justify-end items-center min-h-screen px-[16px] z-10 overflow-hidden'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${content[currentIndex].image}), url(${Texture})`,
					backgroundSize: "cover, cover",
					backgroundRepeat: "no-repeat, repeat",
					backgroundPosition: "center, center",
					backgroundBlendMode: "multiply",
					opacity: 0.8, // Added opacity to make it more transparent
				}}>
				<div className='flex flex-row justify-between w-full items-end'>
					<div className='flex flex-col items-start mt-[30%] leading-none max-w-screen-sm z-20'>
						<div className='flex flex-col items-center space-y-3 mb-[19px]'>
							{content.map((_, index) => (
								<div
									key={index}
									className={`${
										index === currentIndex &&
										"w-5 h-5 border-[1px] border-gray-500 rounded-full flex items-center justify-center"
									}`}
									onClick={() => setCurrentIndex(index)} // Added click handler
									style={{ cursor: "pointer" }} // Added pointer cursor for better UX
								>
									<div
										className={`rounded-full border-2 ${
											index === currentIndex
												? "bg-orange-500 border-orange-500 w-3 h-3 m-auto"
												: "border-[#FFF8E7] w-5 h-5"
										}`}
									/>
								</div>
							))}
						</div>
						<h1 className='title text-[22px] text-prime font-bold leading-[1.5]'>
							{content[currentIndex].title}
						</h1>
						<p
							className='description text-[14px] mt-4 max-w-xl text-gray-300'
							style={{ lineHeight: 2 }}>
							{content[currentIndex].description}
						</p>
						<button
							className='button p-[16px] border-2 w-full border-prime rounded-[16px] text-prime mb-[96px] mt-[24px]'
							onClick={() => navigate(`/blog/${content[currentIndex].path}`)}>
							Kliknij aby przeczytać
						</button>
					</div>
				</div>
				<img
					src={Gradient}
					alt='Gradient'
					className='absolute top-0 right-0 w-1/1 h-auto pointer-events-none z-10'
					style={{ top: -700, right: -650 }}
				/>
				<div
					className='absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10'
					style={{
						background:
							"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
					}}></div>
			</div>
		</div>
	);
};

export default Blog;
