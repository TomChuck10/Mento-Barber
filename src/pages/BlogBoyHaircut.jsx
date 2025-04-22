// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import BoyHaircut from "../assets/fryzury_chlopcy.png";

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
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
							<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
							<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
						</div>
						<h1 className='text-[32px] text-prime font-bold mt-[64px]'>
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
				<div className='flex items-center justify-center mt-[100px] mb-[5%]'>
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
						<div className='flex flex-col items-center justify-center gap-[16px]'>
							<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
							<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
							<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
						</div>
						<h1 className='text-[24px] text-prime font-bold mt-[64px]'>
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
					<img
						src={Gradient}
						alt='Gradient'
						className='absolute top-0 z-0 w-[800px] max-w-none'
						style={{ right: "-200px", top: "-200px" }}
					/>
				</div>
			</div>

			<img
				src={Gradient}
				alt='Gradient'
				className='fixed w-full h-auto pointer-events-none z-[-1] opacity-70'
				style={{ top: "-50%" }}
			/>
		</div>
	);
};

export default BlogBoyHaircut;
