// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import manhaircut from "../assets/3_meska_fryzura.png";
import man1 from "../assets/manHaircut/man1.jpg";
import man2 from "../assets/manHaircut/man2.jpg";
import man3 from "../assets/manHaircut/man3.webp";
import man4 from "../assets/manHaircut/man4.jpg";
import man5 from "../assets/manHaircut/man5.webp";

const BlogNewHaircuts = () => {
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
								src={manhaircut}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Modne męskie fryzury na rok 2024: Rozbudowany przegląd trendów
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Rok 2024 przynosi ze sobą nie tylko nowe wyzwania, ale również
							świeże i zaskakujące pomysły w świecie męskich fryzur. 5
							Propozycji na męskie fryzury na rok 2024 – Pośród nich znajdziesz
							zarówno klasyczne propozycje, jak i te bardziej eksperymentalne.
							Zachęcamy do bliższego poznania czterech kluczowych trendów, które
							zdominują męskie fryzury w nadchodzącym roku, a także do odkrycia
							dwóch dodatkowych propozycji, które z pewnością przyciągną uwagę
							odważnych dżentelmenów.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[32px] text-prime font-bold'>
							1. MULLET HAIR: Powrót Retro z Nowoczesnym Twistem
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man1}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Undercut to fryzura, która zdobyła serca mężczyzn na całym świecie
							i nie zamierza ustępować ze sceny w 2024 roku. Charakteryzuje się
							krótkimi bokami i tyłem, podczas gdy góra jest dłuższa, co daje
							efekt kontrastu. Ta fryzura nadaje się zarówno do eleganckiego
							biura, jak i do bardziej luzackiego stylu.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							2. UNDERCUT: Kontrast i Styl
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man2}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Undercut to fryzura, która zdobyła serca mężczyzn na całym świecie
							i nie zamierza ustępować ze sceny w 2024 roku. Charakteryzuje się
							krótkimi bokami i tyłem, podczas gdy góra jest dłuższa, co daje
							efekt kontrastu. Ta fryzura nadaje się zarówno do eleganckiego
							biura, jak i do bardziej luzackiego stylu.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							3. COMB OVER: Klasyczna i Wszechstronna
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man3}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Comb over, czyli fryzura zaczesana na bok, to propozycja dla
							mężczyzn ceniących klasyczny, schludny wygląd. W 2024 roku
							kombinacja uczesania na bok z precyzyjnym strzyżeniem boków
							sprawia, że ta fryzura nabiera nowego życia. Jest elegancka i
							wszechstronna, doskonale pasująca zarówno do stylu formalnego, jak
							i casualowego.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							4. POMPADOUR: Elegancja i Wysoka Fryzura
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man4}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white font-light my-[12px]'>
							Pompadour, będąca hołdem dla lat 50., utrzymuje swoją pozycję
							wśród najmodniejszych fryzur męskich na 2024 rok. Charakteryzuje
							się długą górą, którą można stylizować do góry, nadając fryzurze
							elegancki i retro wygląd. Ta fryzura doskonale sprawdza się
							zarówno na co dzień, jak i na wyjątkowe okazje.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							5. BUZZ CUT: Minimalizm i Świeżość
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man5}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Buzz cut to propozycja dla mężczyzn ceniących minimalizm i łatwość
							utrzymania. Charakteryzuje się bardzo krótkim strzyżeniem na całej
							głowie, co daje efekt równomiernego ogolenia. Ta fryzura jest nie
							tylko modna, ale także praktyczna, idealna dla osób o aktywnym
							trybie życia.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Męskie Fryzury na Rok 2024
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Rok 2024 przynosi szeroki wachlarz możliwości w kwestii męskich
							fryzur. Niezależnie od tego, czy wybierasz klasyczną elegancję
							Pompadour, czy postawisz na minimalizm w postaci Buzz Cut, ważne
							jest, aby twoja fryzura odzwierciedlała twój styl życia i
							osobowość.
						</p>
						<p className='text-[16px] text-white my-[12px] font-light mb-[42px]'>
							Pamiętaj, że najważniejsze jest, aby czuć się komfortowo i pewnie
							z wybraną fryzurą. Skonsultuj się z doświadczonym fryzjerem, który
							pomoże dostosować fryzurę do twoich indywidualnych cech. Odkryj
							swoją własną, unikatową wersję modnych fryzur na 2024 rok i bądź
							gotów na nowe stylowe przygody!
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
				<div className='flex items-center justify-center mt-[100px] mb-[5%]'>
					<div
						className='w-full bg-[#171D1F] flex flex-col p-[32px] m-[16px] rounded-[10px] z-10'
						style={{ boxShadow: "0px 8px 10px #00000099" }}>
						<div className='h-[200px] rounded-[6px] overflow-hidden flex justify-center items-center'>
							<img
								src={manhaircut}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Modne męskie fryzury na rok 2024: Rozbudowany przegląd trendów
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Rok 2024 przynosi ze sobą nie tylko nowe wyzwania, ale również
							świeże i zaskakujące pomysły w świecie męskich fryzur. 5
							Propozycji na męskie fryzury na rok 2024 – Pośród nich znajdziesz
							zarówno klasyczne propozycje, jak i te bardziej eksperymentalne.
							Zachęcamy do bliższego poznania czterech kluczowych trendów, które
							zdominują męskie fryzury w nadchodzącym roku, a także do odkrycia
							dwóch dodatkowych propozycji, które z pewnością przyciągną uwagę
							odważnych dżentelmenów.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[24px] text-prime font-bold'>
							1. MULLET HAIR: Powrót Retro z Nowoczesnym Twistem
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man1}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Undercut to fryzura, która zdobyła serca mężczyzn na całym świecie
							i nie zamierza ustępować ze sceny w 2024 roku. Charakteryzuje się
							krótkimi bokami i tyłem, podczas gdy góra jest dłuższa, co daje
							efekt kontrastu. Ta fryzura nadaje się zarówno do eleganckiego
							biura, jak i do bardziej luzackiego stylu.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							2. UNDERCUT: Kontrast i Styl
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man2}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Undercut to fryzura, która zdobyła serca mężczyzn na całym świecie
							i nie zamierza ustępować ze sceny w 2024 roku. Charakteryzuje się
							krótkimi bokami i tyłem, podczas gdy góra jest dłuższa, co daje
							efekt kontrastu. Ta fryzura nadaje się zarówno do eleganckiego
							biura, jak i do bardziej luzackiego stylu.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							3. COMB OVER: Klasyczna i Wszechstronna
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man3}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Comb over, czyli fryzura zaczesana na bok, to propozycja dla
							mężczyzn ceniących klasyczny, schludny wygląd. W 2024 roku
							kombinacja uczesania na bok z precyzyjnym strzyżeniem boków
							sprawia, że ta fryzura nabiera nowego życia. Jest elegancka i
							wszechstronna, doskonale pasująca zarówno do stylu formalnego, jak
							i casualowego.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							4. POMPADOUR: Elegancja i Wysoka Fryzura
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man4}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white font-light my-[12px]'>
							Pompadour, będąca hołdem dla lat 50., utrzymuje swoją pozycję
							wśród najmodniejszych fryzur męskich na 2024 rok. Charakteryzuje
							się długą górą, którą można stylizować do góry, nadając fryzurze
							elegancki i retro wygląd. Ta fryzura doskonale sprawdza się
							zarówno na co dzień, jak i na wyjątkowe okazje.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							5. BUZZ CUT: Minimalizm i Świeżość
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man5}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Buzz cut to propozycja dla mężczyzn ceniących minimalizm i łatwość
							utrzymania. Charakteryzuje się bardzo krótkim strzyżeniem na całej
							głowie, co daje efekt równomiernego ogolenia. Ta fryzura jest nie
							tylko modna, ale także praktyczna, idealna dla osób o aktywnym
							trybie życia.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Męskie Fryzury na Rok 2024
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Rok 2024 przynosi szeroki wachlarz możliwości w kwestii męskich
							fryzur. Niezależnie od tego, czy wybierasz klasyczną elegancję
							Pompadour, czy postawisz na minimalizm w postaci Buzz Cut, ważne
							jest, aby twoja fryzura odzwierciedlała twój styl życia i
							osobowość.
						</p>
						<p className='text-[14px] text-white my-[12px] font-light mb-[42px]'>
							Pamiętaj, że najważniejsze jest, aby czuć się komfortowo i pewnie
							z wybraną fryzurą. Skonsultuj się z doświadczonym fryzjerem, który
							pomoże dostosować fryzurę do twoich indywidualnych cech. Odkryj
							swoją własną, unikatową wersję modnych fryzur na 2024 rok i bądź
							gotów na nowe stylowe przygody!
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

export default BlogNewHaircuts;
