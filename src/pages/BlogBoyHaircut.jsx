// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import BoyHaircut from "../assets/fryzury_chlopcy.png";
import boy1 from "../assets/boy/boy1.jpg";
import boy2 from "../assets/boy/boy2.jpg";
import boy3 from "../assets/boy/boy3.jpg";
import boy4 from "../assets/boy/boy4.jpg";
import boy5 from "../assets/boy/boy5.jpg";
import boy6 from "../assets/boy/boy6.jpg";
import boy7 from "../assets/boy/boy7.jpg";
import boy8 from "../assets/boy/boy8.jpg";
import boy9 from "../assets/boy/boy9.jpg";
import boy10 from "../assets/boy/boy10.jpg";
import boy11 from "../assets/boy/boy11.jpg";
import boy12 from "../assets/boy/boy12.jpg";

const BlogBoyHaircut = () => {
	const isMobile = useIsMobile();

	return !isMobile ? (
		<div className='h-screen overflow-hidden'>
			<Navbar />
			{/* Stałe tło */}
			<div
				className='fixed top-0 left-0 w-full h-full z-[-1]'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}
			/>
			{/* Kontener z przewijaną treścią */}
			<div className='relative h-screen overflow-auto'>
				<div className='flex items-center justify-center mt-[10%] mb-[5%]'>
					<div
						className='w-[65%] bg-[#171D1F] flex flex-col p-[32px]  rounded-[10px]'
						style={{ boxShadow: "0px 8px 10px #00000099" }}>
						<div className='rounded-[6px] overflow-hidden h-[400px] flex justify-center items-center'>
							<img
								src={BoyHaircut}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Fryzura dla Chłopca – TOP 7 inspiracji i pomysłów
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Kiedy przychodzi pora na zmianę fryzura dla chłopca, wybór
							odpowiedniego stylu może być trudny. Dlatego przygotowaliśmy
							zestawienie z siedmioma inspiracjami i pomysłami na nowe fryzurki,
							które sprawdzą się doskonale u młodych chłopców. Odkryj różnorodne
							propozycje, od klasycznych po bardziej wyraziste, i znajdź idealny
							look dla swojego dziecka!
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] mt-[12px] mb-[24px]'>
							{[
								boy1,
								boy2,
								boy3,
								boy4,
								boy5,
								boy6,
								boy7,
								boy8,
								boy9,
								boy10,
								boy11,
								boy12,
							].map((boy, index) => (
								<div
									key={index}
									className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
									<img
										src={boy}
										alt={`boy${index + 1}`}
										className='w-full h-full object-cover object-top'
									/>
								</div>
							))}
						</div>
						<h1 className='text-[32px] text-prime font-bold'>
							1. Fryzurka Młodzieżowa
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Pierwszym pomysłem jest popularna fryzurka młodzieżowa, która jest
							doskonałym wyborem dla aktywnych chłopców. Ta fryzura
							charakteryzuje się krótkimi włosami z boków i z tyłu głowy, a na
							górze nieco dłuższymi, które można lekko potoczyć lub zaczesywać
							na bok. Jest łatwa w pielęgnacji i świetnie nadaje się do
							codziennego noszenia.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							2. Fryzura Bob
						</h1>
						<p className='text-[16px] text-white mt-[12px] mb-[42px] font-light'>
							Pierwszym pomysłem jest popularna fryzurka młodzieżowa, która jest
							doskonałym wyborem dla aktywnych chłopców. Ta fryzura
							charakteryzuje się krótkimi włosami z boków i z tyłu głowy, a na
							górze nieco dłuższymi, które można lekko potoczyć lub zaczesywać
							na bok. Jest łatwa w pielęgnacji i świetnie nadaje się do
							codziennego noszenia.
						</p>
					</div>
				</div>
			</div>
			<img
				src={Gradient}
				alt='Gradient'
				className='fixed w-full h-auto pointer-events-none z-[-1] opacity-70'
				style={{ top: "-50%" }}
			/>
		</div>
	) : (
		<div className='relative h-screen overflow-hidden'>
			<Navbar />
			{/* Stałe tło */}
			<div
				className='fixed top-0 left-0 w-full h-full z-[-1]'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}
			/>

			{/* Kontener z przewijaną treścią */}
			<div className='relative h-screen overflow-auto'>
				<div className='flex items-center justify-center mt-[100px] mb-[5%] overflow-hidden'>
					<div
						className='w-full bg-[#171D1F] flex flex-col p-[32px] m-[16px] rounded-[10px] z-10'
						style={{ boxShadow: "0px 8px 10px #00000099" }}>
						<div className='h-[200px] rounded-[6px] overflow-hidden flex justify-center items-center'>
							<img
								src={BoyHaircut}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Fryzura dla Chłopca – TOP 7 inspiracji i pomysłów
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Kiedy przychodzi pora na zmianę fryzura dla chłopca, wybór
							odpowiedniego stylu może być trudny. Dlatego przygotowaliśmy
							zestawienie z siedmioma inspiracjami i pomysłami na nowe fryzurki,
							które sprawdzą się doskonale u młodych chłopców. Odkryj różnorodne
							propozycje, od klasycznych po bardziej wyraziste, i znajdź idealny
							look dla swojego dziecka!
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<div className='grid grid-cols-2 gap-[16px] mt-[12px] mb-[24px]'>
							{[
								boy1,
								boy2,
								boy3,
								boy4,
								boy5,
								boy6,
								boy7,
								boy8,
								boy9,
								boy10,
								boy11,
								boy12,
							].map((boy, index) => (
								<div
									key={index}
									className='w-full h-[350px] bg-gray-300 rounded-[6px] overflow-hidden'>
									<img
										src={boy}
										alt={`boy${index + 1}`}
										className='w-full h-full object-cover object-top'
									/>
								</div>
							))}
						</div>
						<h1 className='text-[24px] text-prime font-bold'>
							1. Fryzurka Młodzieżowa
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Pierwszym pomysłem jest popularna fryzurka młodzieżowa, która jest
							doskonałym wyborem dla aktywnych chłopców. Ta fryzura
							charakteryzuje się krótkimi włosami z boków i z tyłu głowy, a na
							górze nieco dłuższymi, które można lekko potoczyć lub zaczesywać
							na bok. Jest łatwa w pielęgnacji i świetnie nadaje się do
							codziennego noszenia.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							2. Fryzura Bob
						</h1>
						<p className='text-[14px] text-white mt-[12px] mb-[42px] font-light'>
							Pierwszym pomysłem jest popularna fryzurka młodzieżowa, która jest
							doskonałym wyborem dla aktywnych chłopców. Ta fryzura
							charakteryzuje się krótkimi włosami z boków i z tyłu głowy, a na
							górze nieco dłuższymi, które można lekko potoczyć lub zaczesywać
							na bok. Jest łatwa w pielęgnacji i świetnie nadaje się do
							codziennego noszenia.
						</p>
					</div>
				</div>
			</div>
			<img
				src={Gradient}
				alt='Gradient'
				className='absolute top-0 z-0 w-[800px] max-w-none'
				style={{ right: "-200px", top: "-200px" }}
			/>
		</div>
	);
};

export default BlogBoyHaircut;
