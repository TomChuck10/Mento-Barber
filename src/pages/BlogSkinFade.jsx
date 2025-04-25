// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import skinfade from "../assets/5_skinfade.png";
import skinfade1 from "../assets/skinfade/skinfade1.jpg";
import skinfade2 from "../assets/skinfade/skinfade2.webp";
import skinfade3 from "../assets/skinfade/skinfade3.jpg";
import skinfade4 from "../assets/skinfade/skinfade4.jpg";
import skinfade5 from "../assets/skinfade/skinfade5.webp";

const BlogSkinFade = () => {
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
								src={skinfade}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Fryzura Skin Fade: Trendy i inspiracje
						</h1>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[32px] text-prime font-bold'>
							Strzyżenie Skin Fade: Rewolucja w męskiej urodzie
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Fryzura skin fade to jedna z najbardziej znanych i popularnych
							fryzur męskich. Jej charakterystyczną cechą jest stopniowe
							przechodzenie z bardzo krótkich włosów na górze głowy do
							praktycznie wygolonej skóry po bokach i z tyłu. To styl, który
							zdobył ogromną popularność w ostatnich latach i zyskuje coraz
							więcej zwolenników. Jednak czy jest odpowiedni dla każdego?
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Kto może wybrać fryzurę Skin Fade?
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Fryzura skin fade jest wszechstronna i może pasować do wielu
							różnych typów włosów i kształtów głowy. Oto kilka grup ludzi, dla
							których ten styl może być szczególnie atrakcyjny:
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							1. Młodzież i mężczyźni w średnim wieku
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Fryzura skin fade jest szczególnie popularna wśród młodszych
							mężczyzn, zarówno w wieku nastoletnim, jak i
							dwudziestoparolatkowym. Jednak nie jest to styl ograniczony tylko
							do młodzieży. Coraz więcej mężczyzn w średnim wieku i starszych
							decyduje się na ten świeży i nowoczesny look.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							2. Fryzura Skin Fade dla osób aktywnych
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Skin fade jest idealny dla tych, którzy prowadzą aktywny tryb
							życia. Krótsze włosy po bokach i z tyłu głowy zapewniają wygodę i
							chłód, co jest istotne podczas ćwiczeń, biegania lub uprawiania
							sportów.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							3. Mężczyźni szukający niskiej konserwacji
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Ten styl fryzury wymaga minimalnej pielęgnacji i stylizacji, co
							przyciąga tych, którzy cenią sobie prostotę.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							4. Osoby eksperymentujące ze stylem
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Skin fade oferuje wiele wariantów, co pozwala na eksperymentowanie
							z długościami i teksturą górnych włosów. To atrakcyjne dla tych,
							któ chcą wyrazić swoją indywidualność i kreatywność w zakresie
							fryzur.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							5. Mężczyźni w środowisku biznesowym
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Chociaż skin fade jest zazwyczaj kojarzony z luźnym stylem,
							istnieją bardziej konserwatywne wersje tego looku, które nadają
							się do środowiska biznesowego. Dla mężczyzn pracujących w
							korporacjach, można dostosować ten styl do bardziej formalnych
							wymogów.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden '>
								<img
									src={skinfade1}
									alt='skinfade1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade2}
									alt='skinfade2'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Chociaż fryzura skin fade może pasować do wielu osób, istnieje
							wiele wariantów tego stylu. Wybór odpowiedniego zależy od kilku
							czynników:
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							1. Kształt głowy
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Kształt twojej głowy może wpłynąć na to, jaki rodzaj skin fade
							będzie najlepiej wyglądać. Profesjonalny fryzjer pomoże wybrać
							odpowiednią opcję dostosowaną do twojego kształtu głowy.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							2. Rodzaj włosów
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Grubość i tekstura twoich włosów również mają znaczenie. W
							zależności od tego, czy masz gęste, cienkie, kręcone czy proste
							włosy, fryzjer dobierze odpowiednią długość i stylizację.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							3. Styl życia
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Twój styl życia również może wpłynąć na wybór fryzury skin fade.
							Jeśli jesteś aktywną osobą, z pewnością docenisz wygodę tego
							stylu. Jednak jeśli pracujesz w bardziej formalnym środowisku,
							możesz potrzebować bardziej konserwatywnej wersji.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade3}
									alt='skinfade3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade4}
									alt='skinfade4'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade5}
									alt='skinfade5'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Ciekawostka o Skin Fade: Historia i wpływ na modę
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Skin fade ma swoje korzenie w kulturze afroamerykańskiej.
							Stworzone w latach 80. XX wieku w Stanach Zjednoczonych,
							początkowo było popularne wśród młodzieży związanej z ruchem
							hip-hopowym. To właśnie afroamerykańska młodzież nadała mu
							początkową popularność.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Ten styl fryzury jest symbolem wyrazistości i pewności siebie.
							Charakterystyczne stopniowe przycinanie włosów, które stopniowo
							przechodzi w zupełnie wygolone boki i tył głowy, nadaje fryzurze
							wyjątkowy wygląd, który przyciąga uwagę.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Dlatego, choć historia skin fade ma swoje korzenie w konkretnej
							kulturze i czasie, dziś jest to globalny fenomen mody męskiej. Ta
							fryzura nadal ewoluuje i dostosowuje się do nowych trendów,
							przyciągając mężczyzn z różnych zakątków świata. Odkrywając tę
							ciekawostkę o skin fade, możemy docenić jej unikalną historię i
							wpływ na świat fryzur.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Jest to tylko krótka próbka informacji na temat fascynującej
							fryzury skin fade. Jeśli jesteś zainteresowany eksploracją tego
							tematu, warto zgłębić go bardziej, aby zrozumieć, jak historia i
							kultura wpływają na trendy w męskiej modzie i fryzurach.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Zapraszamy na strzyżenie Skin Fade do naszego salonu
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light mb-[42px]'>
							Jeśli jesteś zainteresowany fryzurą skin fade i szukasz
							profesjonalnego podejścia, zapraszamy do naszego salonu MENTO
							Barber Shop w Bochni. Jesteśmy doświadczonymi fryzjerami, którzy
							doskonale znają się na tym stylu i dostosują go do twoich
							indywidualnych potrzeb. Niezależnie od tego, czy jesteś młodym
							mężczyzną, aktywnym sportowcem, czy osobą pracującą w środowisku
							biznesowym, jesteśmy gotowi stworzyć idealną fryzurę skin fade,
							która podkreśli Twój styl i osobowość. Zaufaj profesjonalistom i
							ciesz się nowym wyglądem!
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
								src={skinfade}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Fryzura Skin Fade: Trendy i inspiracje
						</h1>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[24px] text-prime font-bold'>
							Strzyżenie Skin Fade: Rewolucja w męskiej urodzie
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Fryzura skin fade to jedna z najbardziej znanych i popularnych
							fryzur męskich. Jej charakterystyczną cechą jest stopniowe
							przechodzenie z bardzo krótkich włosów na górze głowy do
							praktycznie wygolonej skóry po bokach i z tyłu. To styl, który
							zdobył ogromną popularność w ostatnich latach i zyskuje coraz
							więcej zwolenników. Jednak czy jest odpowiedni dla każdego?
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Kto może wybrać fryzurę Skin Fade?
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Fryzura skin fade jest wszechstronna i może pasować do wielu
							różnych typów włosów i kształtów głowy. Oto kilka grup ludzi, dla
							których ten styl może być szczególnie atrakcyjny:
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							1. Młodzież i mężczyźni w średnim wieku
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Fryzura skin fade jest szczególnie popularna wśród młodszych
							mężczyzn, zarówno w wieku nastoletnim, jak i
							dwudziestoparolatkowym. Jednak nie jest to styl ograniczony tylko
							do młodzieży. Coraz więcej mężczyzn w średnim wieku i starszych
							decyduje się na ten świeży i nowoczesny look.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							2. Fryzura Skin Fade dla osób aktywnych
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Skin fade jest idealny dla tych, którzy prowadzą aktywny tryb
							życia. Krótsze włosy po bokach i z tyłu głowy zapewniają wygodę i
							chłód, co jest istotne podczas ćwiczeń, biegania lub uprawiania
							sportów.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							3. Mężczyźni szukający niskiej konserwacji
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Ten styl fryzury wymaga minimalnej pielęgnacji i stylizacji, co
							przyciąga tych, którzy cenią sobie prostotę.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							4. Osoby eksperymentujące ze stylem
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Skin fade oferuje wiele wariantów, co pozwala na eksperymentowanie
							z długościami i teksturą górnych włosów. To atrakcyjne dla tych,
							któ chcą wyrazić swoją indywidualność i kreatywność w zakresie
							fryzur.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							5. Mężczyźni w środowisku biznesowym
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Chociaż skin fade jest zazwyczaj kojarzony z luźnym stylem,
							istnieją bardziej konserwatywne wersje tego looku, które nadają
							się do środowiska biznesowego. Dla mężczyzn pracujących w
							korporacjach, można dostosować ten styl do bardziej formalnych
							wymogów.
						</p>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden '>
								<img
									src={skinfade1}
									alt='skinfade1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade2}
									alt='skinfade2'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Chociaż fryzura skin fade może pasować do wielu osób, istnieje
							wiele wariantów tego stylu. Wybór odpowiedniego zależy od kilku
							czynników:
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							1. Kształt głowy
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Kształt twojej głowy może wpłynąć na to, jaki rodzaj skin fade
							będzie najlepiej wyglądać. Profesjonalny fryzjer pomoże wybrać
							odpowiednią opcję dostosowaną do twojego kształtu głowy.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							2. Rodzaj włosów
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Grubość i tekstura twoich włosów również mają znaczenie. W
							zależności od tego, czy masz gęste, cienkie, kręcone czy proste
							włosy, fryzjer dobierze odpowiednią długość i stylizację.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							3. Styl życia
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Twój styl życia również może wpłynąć na wybór fryzury skin fade.
							Jeśli jesteś aktywną osobą, z pewnością docenisz wygodę tego
							stylu. Jednak jeśli pracujesz w bardziej formalnym środowisku,
							możesz potrzebować bardziej konserwatywnej wersji.
						</p>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade3}
									alt='skinfade3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade4}
									alt='skinfade4'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={skinfade5}
									alt='skinfade5'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Ciekawostka o Skin Fade: Historia i wpływ na modę
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Skin fade ma swoje korzenie w kulturze afroamerykańskiej.
							Stworzone w latach 80. XX wieku w Stanach Zjednoczonych,
							początkowo było popularne wśród młodzieży związanej z ruchem
							hip-hopowym. To właśnie afroamerykańska młodzież nadała mu
							początkową popularność.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Ten styl fryzury jest symbolem wyrazistości i pewności siebie.
							Charakterystyczne stopniowe przycinanie włosów, które stopniowo
							przechodzi w zupełnie wygolone boki i tył głowy, nadaje fryzurze
							wyjątkowy wygląd, który przyciąga uwagę.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Dlatego, choć historia skin fade ma swoje korzenie w konkretnej
							kulturze i czasie, dziś jest to globalny fenomen mody męskiej. Ta
							fryzura nadal ewoluuje i dostosowuje się do nowych trendów,
							przyciągając mężczyzn z różnych zakątków świata. Odkrywając tę
							ciekawostkę o skin fade, możemy docenić jej unikalną historię i
							wpływ na świat fryzur.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Jest to tylko krótka próbka informacji na temat fascynującej
							fryzury skin fade. Jeśli jesteś zainteresowany eksploracją tego
							tematu, warto zgłębić go bardziej, aby zrozumieć, jak historia i
							kultura wpływają na trendy w męskiej modzie i fryzurach.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Zapraszamy na strzyżenie Skin Fade do naszego salonu
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light mb-[42px]'>
							Jeśli jesteś zainteresowany fryzurą skin fade i szukasz
							profesjonalnego podejścia, zapraszamy do naszego salonu MENTO
							Barber Shop w Bochni. Jesteśmy doświadczonymi fryzjerami, którzy
							doskonale znają się na tym stylu i dostosują go do twoich
							indywidualnych potrzeb. Niezależnie od tego, czy jesteś młodym
							mężczyzną, aktywnym sportowcem, czy osobą pracującą w środowisku
							biznesowym, jesteśmy gotowi stworzyć idealną fryzurę skin fade,
							która podkreśli Twój styl i osobowość. Zaufaj profesjonalistom i
							ciesz się nowym wyglądem!
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

export default BlogSkinFade;
