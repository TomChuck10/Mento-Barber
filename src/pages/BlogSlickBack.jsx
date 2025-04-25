// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import SlickBack from "../assets/2_slickback.png";
import slickback1 from "../assets/slickback/slickback1.jpg";
import slickback2 from "../assets/slickback/slickback2.jpg";
import slickback3 from "../assets/slickback/slickback3.jpg";

const BlogSlickBack = () => {
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
								src={SlickBack}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Slick Back, czyli fryzura męska zaczesana do tyłu
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							W świecie męskich fryzur jednym z najbardziej klasycznych i
							eleganckich stylów jest bez wątpienia „slick back” – czyli fryzura
							męska zaczesana do tyłu. Ten ponadczasowy look zdobi głowy
							mężczyzn od dziesięcioleci, nadając im pewności siebie i stylowego
							wyrazu. Czym właściwie jest ta fryzura, dla kogo jest idealna i
							jak ewoluowała na przestrzeni lat?
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={slickback1}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={slickback2}
									alt='slickback2'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={slickback3}
									alt='slickback3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold mt-[64px]'>
							Czym jest fryzura Slick Back ?
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Fryzura slick back to styl fryzury męskiej zaczesanej do tyłu, w
							którym włosy na czubku głowy są zaczesane do tyłu, zwykle używając
							produktów do stylizacji, aby nadać im gładkość i połysk. Włosy
							mogą być przycięte na bokach i z tyłu, podkreślając kontrast
							między długimi włosami na górze a krótszymi z boków. Efekt końcowy
							to schludna, lśniąca fryzura o bardzo eleganckim wyglądzie.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Historia i początki Slick Back
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Początki fryzury slick back sięgają złotych lat kina Hollywood,
							zwłaszcza ery gangsterskiej w latach 20. i 30. XX wieku. Aktorzy
							tacy jak Humphrey Bogart czy James Cagney nosili swoje włosy
							zaczesane do tyłu, co dodawało im tajemniczego i surowego uroku na
							ekranie. Slick back stał się również popularny wśród muzyków rock
							and rolla lat 50. i 60., gdzie gwiazdy takie jak Elvis Presley czy
							Johnny Cash przyczyniły się do jego ugruntowania jako symbolu
							buntowniczego stylu. W kolejnych dekadach, slick back przeszedł
							przez różne modyfikacje, dostosowując się do zmieniających się
							trendów i preferencji. W latach 80., zyskał na popularności wśród
							mężczyzn, którzy inspirowali się ikonami popkultury tamtego
							okresu, a w latach 90., znów powrócił do łask, przyciągając uwagę
							fanów stylu retro i vintage.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Cechy charakterystyczne Slick Back
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzura slick back cechuje się gładko zaczesanymi do tyłu włosami,
							które tworzą schludny i elegancki wygląd. Włosy na górze głowy są
							zazwyczaj dłuższe, podczas gdy boki i tył mogą być przycięte
							krócej. Kluczowym elementem tego stylu jest wykorzystanie
							odpowiednich produktów do stylizacji, takich jak żele, pasty czy
							pomady, aby nadać włosom połysk i utrwalenie. Efektem końcowym
							jest lśniąca fryzura, która dodaje męskiej prezencji.
						</p>
						<p className='text-[16px] text-white font-bold-500 mb-[12px]'>
							Czy Slick Back Pasuje Dla Wszystkich?
						</p>
						<p className='text-[16px] text-white font-light mb-[42px]'>
							Fryzura slick back jest szczególnie polecana dla mężczyzn o
							gęstych, prostych lub lekko falujących włosach. Jednak nie oznacza
							to, że nie można dostosować tego stylu do innych typów włosów. W
							przypadku osób o cienkich włosach lub zakolach, slick back może
							wymagać bardziej starannego przycinania i stylizacji, aby uzyskać
							pożądany efekt. Warto skonsultować się z profesjonalnym fryzjerem,
							który pomoże dobrać odpowiednie techniki stylizacji i produkty.
						</p>
						<h1 className='text-[32px] text-prime font-bold'>
							Jak Stylizować Slick Back ?
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Aby osiągnąć idealny slick back, warto przejść przez kilka kroków:
							Przygotowanie włosów:
						</p>
						<ol className='list-decimal ml-5 text-[16px] text-white my-[12px] font-light'>
							<li>
								<b>Przygotowanie włosów:</b> Zaczynając od umycia i odżywienia
								włosów, ważne jest, aby zapewnić odpowiednią bazę do stylizacji.
								Suchość i zniszczenie włosów mogą utrudnić osiągnięcie
								pożądanego efektu.
							</li>
							<li>
								<b>Stosowanie produktów:</b> Wybierz odpowiedni produkt do
								stylizacji, który pasuje do Twojego typu włosów. Żele, pasty lub
								pomady o średniej lub mocnej chwytliwości będą idealne do
								utrzymania włosów w miejscu i dodania im połysku.
							</li>
							<li>
								<b>Zaczesywanie do tyłu:</b> Zaczeszaj włosy do tyłu, starając
								się uzyskać równomierny i gładki wygląd. Można użyć grzebienia
								lub szczotki do równomiernego rozprowadzenia włosów.
							</li>
							<li>
								<b>Utrwalenie:</b> Po ułożeniu włosów, użyj sprayu do włosów lub
								dodatkowej warstwy produktu, aby utrwalić fryzurę i zapewnić
								długotrwały efekt.
							</li>
						</ol>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Slick Back: Styl na Wszelkie Okazje
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzura slick back doskonale sprawdza się na różnych okazjach,
							zarówno w codziennym życiu, jak i podczas formalnych wydarzeń. To
							klasyczny, elegancki styl, który dodaje pewności siebie każdemu
							mężczyźnie.
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Slick back jest ikoną męskiej fryzury, ewoluującą przez lata i
							stającą się symbolem elegancji. Bez względu na rodzaj włosów, czy
							to gęste czy z problemami z zakolami, warto eksperymentować z tym
							stylem. Odpowiednia pielęgnacja i stylizacja sprawią, że slick
							back stanie się nieodłącznym elementem Twojego wyglądu, dodając
							charakteru i wyjątkowości.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Fryzura Męska Zaczesana do Tyłu
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light mb-[42px]'>
							Fryzura męska zaczesana do tyłu to nie tylko sposób na
							podkreślenie swojej osobowości, ale także wyrażenie elegancji.
							Jeśli chcesz wypróbować slick back, odwiedź nasz profesjonalny
							salon w Bochni. Nasi doświadczeni barberzy zadbają o to, abyś
							poczuł się pewnie i stylowo z nową fryzurą, która przyciągnie
							spojrzenia. Umów się na wizytę już dziś i przekonaj się, jak slick
							back może odmienić Twój wygląd!
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
								src={SlickBack}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Slick Back, czyli fryzura męska zaczesana do tyłu
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							W świecie męskich fryzur jednym z najbardziej klasycznych i
							eleganckich stylów jest bez wątpienia „slick back” – czyli fryzura
							męska zaczesana do tyłu. Ten ponadczasowy look zdobi głowy
							mężczyzn od dziesięcioleci, nadając im pewności siebie i stylowego
							wyrazu. Czym właściwie jest ta fryzura, dla kogo jest idealna i
							jak ewoluowała na przestrzeni lat?
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<div className='flex flex-col items-center justify-center gap-[16px]'>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={slickback1}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={slickback2}
									alt='slickback2'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={slickback3}
									alt='slickback3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold mt-[64px]'>
							Czym jest fryzura Slick Back ?
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Fryzura slick back to styl fryzury męskiej zaczesanej do tyłu, w
							którym włosy na czubku głowy są zaczesane do tyłu, zwykle używając
							produktów do stylizacji, aby nadać im gładkość i połysk. Włosy
							mogą być przycięte na bokach i z tyłu, podkreślając kontrast
							między długimi włosami na górze a krótszymi z boków. Efekt końcowy
							to schludna, lśniąca fryzura o bardzo eleganckim wyglądzie.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Historia i początki Slick Back
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Początki fryzury slick back sięgają złotych lat kina Hollywood,
							zwłaszcza ery gangsterskiej w latach 20. i 30. XX wieku. Aktorzy
							tacy jak Humphrey Bogart czy James Cagney nosili swoje włosy
							zaczesane do tyłu, co dodawało im tajemniczego i surowego uroku na
							ekranie. Slick back stał się również popularny wśród muzyków rock
							and rolla lat 50. i 60., gdzie gwiazdy takie jak Elvis Presley czy
							Johnny Cash przyczyniły się do jego ugruntowania jako symbolu
							buntowniczego stylu. W kolejnych dekadach, slick back przeszedł
							przez różne modyfikacje, dostosowując się do zmieniających się
							trendów i preferencji. W latach 80., zyskał na popularności wśród
							mężczyzn, którzy inspirowali się ikonami popkultury tamtego
							okresu, a w latach 90., znów powrócił do łask, przyciągając uwagę
							fanów stylu retro i vintage.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Cechy charakterystyczne Slick Back
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzura slick back cechuje się gładko zaczesanymi do tyłu włosami,
							które tworzą schludny i elegancki wygląd. Włosy na górze głowy są
							zazwyczaj dłuższe, podczas gdy boki i tył mogą być przycięte
							krócej. Kluczowym elementem tego stylu jest wykorzystanie
							odpowiednich produktów do stylizacji, takich jak żele, pasty czy
							pomady, aby nadać włosom połysk i utrwalenie. Efektem końcowym
							jest lśniąca fryzura, która dodaje męskiej prezencji.
						</p>
						<p className='text-[14px] text-white font-bold-500 mb-[12px]'>
							Czy Slick Back Pasuje Dla Wszystk24h?
						</p>
						<p className='text-[14px] text-white font-light mb-[42px]'>
							Fryzura slick back jest szczególnie polecana dla mężczyzn o
							gęstych, prostych lub lekko falujących włosach. Jednak nie oznacza
							to, że nie można dostosować tego stylu do innych typów włosów. W
							przypadku osób o cienkich włosach lub zakolach, slick back może
							wymagać bardziej starannego przycinania i stylizacji, aby uzyskać
							pożądany efekt. Warto skonsultować się z profesjonalnym fryzjerem,
							który pomoże dobrać odpowiednie techniki stylizacji i produkty.
						</p>
						<h1 className='text-[24px] text-prime font-bold'>
							Jak Stylizować Slick Back ?
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Aby osiągnąć idealny slick back, warto przejść przez kilka kroków:
							Przygotowanie włosów:
						</p>
						<ol className='list-decimal ml-5 text-[14px] text-white my-[12px] font-light'>
							<li>
								<b>Przygotowanie włosów:</b> Zaczynając od umycia i odżywienia
								włosów, ważne jest, aby zapewnić odpowiednią bazę do stylizacji.
								Suchość i zniszczenie włosów mogą utrudnić osiągnięcie
								pożądanego efektu.
							</li>
							<li>
								<b>Stosowanie produktów:</b> Wybierz odpowiedni produkt do
								stylizacji, który pasuje do Twojego typu włosów. Żele, pasty lub
								pomady o średniej lub mocnej chwytliwości będą idealne do
								utrzymania włosów w miejscu i dodania im połysku.
							</li>
							<li>
								<b>Zaczesywanie do tyłu:</b> Zaczeszaj włosy do tyłu, starając
								się uzyskać równomierny i gładki wygląd. Można użyć grzebienia
								lub szczotki do równomiernego rozprowadzenia włosów.
							</li>
							<li>
								<b>Utrwalenie:</b> Po ułożeniu włosów, użyj sprayu do włosów lub
								dodatkowej warstwy produktu, aby utrwalić fryzurę i zapewnić
								długotrwały efekt.
							</li>
						</ol>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Slick Back: Styl na Wszelkie Okazje
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Fryzura slick back doskonale sprawdza się na różnych okazjach,
							zarówno w codziennym życiu, jak i podczas formalnych wydarzeń. To
							klasyczny, elegancki styl, który dodaje pewności siebie każdemu
							mężczyźnie.
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Slick back jest ikoną męskiej fryzury, ewoluującą przez lata i
							stającą się symbolem elegancji. Bez względu na rodzaj włosów, czy
							to gęste czy z problemami z zakolami, warto eksperymentować z tym
							stylem. Odpowiednia pielęgnacja i stylizacja sprawią, że slick
							back stanie się nieodłącznym elementem Twojego wyglądu, dodając
							charakteru i wyjątkowości.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Fryzura Męska Zaczesana do Tyłu
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light mb-[42px]'>
							Fryzura męska zaczesana do tyłu to nie tylko sposób na
							podkreślenie swojej osobowości, ale także wyrażenie elegancji.
							Jeśli chcesz wypróbować slick back, odwiedź nasz profesjonalny
							salon w Bochni. Nasi doświadczeni barberzy zadbają o to, abyś
							poczuł się pewnie i stylowo z nową fryzurą, która przyciągnie
							spojrzenia. Umów się na wizytę już dziś i przekonaj się, jak slick
							back może odmienić Twój wygląd!
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

export default BlogSlickBack;
