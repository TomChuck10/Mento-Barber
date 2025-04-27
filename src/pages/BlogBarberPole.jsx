// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import barberPole from "../assets/7_barber_pole.png";
import pole1 from "../assets/pole/pole1.jpg";
import pole2 from "../assets/pole/pole2.webp";
import pole3 from "../assets/pole/pole3.webp";
import pole4 from "../assets/pole/pole4.webp";
import pole5 from "../assets/pole/pole5.webp";
import pole6 from "../assets/pole/pole6.webp";
import pole7 from "../assets/pole/pole7.webp";
import pole8 from "../assets/pole/pole8.webp";

const BlogBarberPole = () => {
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
								src={barberPole}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Barber Pole – Słupek Barberski
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Słupek barberski, znany również jako Barber Pole, to ikoniczny
							symbol salonów fryzjerskich i barberskich. Te biało-niebieskie
							słupki mają bogatą historię i symbolikę, której źródła sięgają
							wieków. W tym artykule zgłębimy historię Barber Pole, zrozumiemy
							jego znaczenie, przeanalizujemy koszty takiego znaku
							rozpoznawczego, a także odkryjemy fascynującą ciekawostkę
							dotyczącą jego pochodzenia.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[32px] text-prime font-bold'>
							Historia Barber Pole
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Początki Barber Pole
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Historia Barber Pole sięga średniowiecza. W tamtych czasach
							fryzjerzy pełnili nie tylko rolę strzyżących włosy, ale także
							wykonywali zabiegi chirurgiczne i dentystyczne. Biało-niebieskie
							słupki na zewnątrz ich zakładów służyły jako wskaźniki ich
							umiejętności. Pierwsze Barber Słupki miały zazwyczaj
							biało-niebieskie lub biało-czerwone paski.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole1}
									alt='pole1}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole2}
									alt='pole2'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole3}
									alt='pole3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Kolory biało-niebieskie
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Kolory biało-niebieskie na <b>Barber Pole</b> mają swoje
							znaczenie. Biały symbolizował gips, którym fryzjerzy w przeszłości
							obwiązali rany, a niebieski reprezentował żyły, które były
							operowane. Kombinacja tych kolorów była wyraźnym sygnałem dla
							przechodniów, że w danym miejscu można uzyskać zarówno usługi
							fryzjerskie, jak i medyczne.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Pochodzenie – Ciekawostka
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Ciekawostka! Pierwszy <b>Barber Pole</b> pojawił się w Stanach
							Zjednoczonych, w miasteczku Pawtucket w stanie Rhode Island. Było
							to w drugiej połowie XIX wieku. Od tamtej chwili{" "}
							<b>Barber Pole</b> stał się znakiem rozpoznawczym salonów
							fryzjerskich na całym świecie, symbolizując tradycję i jakość
							usług fryzjerskich.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole4}
									alt='pole4'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole5}
									alt='pole5'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole6}
									alt='pole6'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Symbolika Słupka Barberskiego
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Odznaczenie zawodowe
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							<b>Barber Pole</b> stał się symbolem zawodowym i znakiem
							rozpoznawczym salonów fryzjerskich na całym świecie. To
							odznaczenie zawodowe, które wskazuje, że w danym miejscu pracują
							wykwalifikowani fryzjerzy.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Tradycja i kontynuacja dziedzictwa
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							W dzisiejszych czasach <b>Barber Pole</b> nie tylko przypomina o
							historycznym dziedzictwie fryzjerów, ale także stanowi kontynuację
							tradycji. W salonach barberskich, gdzie klasyczne fryzury i
							stylizacje są na porządku dziennym, <b>Barber Pole</b> wciąż
							odgrywa ważną rolę jako symbol rzemiosła.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Przyjazna i tradycyjna atmosfera
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Obecność <b>Barber Pole</b> w salonie fryzjerskim tworzy przyjazną
							i tradycyjną atmosferę. To znak, że miejsce to ceni tradycję i
							jakość usług. Wizyta w takim salonie to nie tylko zadbanie o
							wygląd, ale także przeżycie kawałka historii fryzjerstwa.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Koszty Słupka Barberskiego
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Koszty <b>Barber Pole</b> mogą znacząco się różnić w zależności od
							wielu czynników. Wpływ na cenę mają materiały, rozmiar i
							skomplikowanie projektu. Proste, gotowe słupki dostępne online
							mogą kosztować od kilkuset do kilku tysięcy złotych i są one
							dostępne do kupienia np. na Allegro ( kliknij i sprawdź ceny ).
							Jeśli zdecydujesz się na indywidualny projekt lub duży, ozdobny{" "}
							<b>Barber Pole</b>, koszty mogą wzrosnąć znacząco.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Historia <b>Barber Pole</b> jest fascynująca i przypomina nam o
							bogatym dziedzictwie zawodu fryzjera. Te biało-niebieskie słupki
							nadal odgrywają istotną rolę jako symbole tradycji i jakości w
							branży fryzjerskiej. Niezależnie od tego, czy odwiedzasz
							tradycyjny salon fryzjerski czy nowoczesny barber shop, Barber
							Pole przypomina, że fryzjerstwo to więcej niż tylko strzyżenie
							włosów – to kontynuacja długiej historii i tradycji.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							<b>Barber Pole</b> to nie tylko słupek barberski, to symbol
							wartości, które kształtują fryzjerską branżę. Niech
							biało-niebieskie słupki nadal będą znakiem tradycji i jakości w
							świecie fryzjerstwa.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Czy wiesz, że ?
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Wielu ludzi nie zdaje sobie sprawy, że <b>Barber Pole</b> jest nie
							tylko znakiem rozpoznawczym salonów fryzjerskich, ale ma także
							swoje miejsce w historii medycyny. W dawnych czasach, oprócz usług
							fryzjerskich, barberzy zajmowali się również chirurgią i
							wydobywaniem zębów. <b>Barber Pole</b> z białymi i czerwonymi (lub
							biało-niebieskimi) paskami był symbolem tego wszechstronnego
							podejścia. To zaskakujące, jak historia zawodu fryzjera jest
							ściśle związana z historią medycyny, a <b>Barber Pole</b>{" "}
							przypomina o tych dawnych, wielofunkcyjnych czasach.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Kiedy myślimy o <b>Barber Pole</b>, najczęściej przychodzi nam na
							myśl tradycyjny amerykański barbershop. Jednak ten ikoniczny znak
							rozpoznawczy pojawia się na całym świecie. Oprócz Stanów
							Zjednoczonych, gdzie <b>Barber Pole</b> ma długą i bogatą
							historię, można go znaleźć w wielu innych krajach, szczególnie w
							krajach o silnej kulturze fryzjerskiej. Na przykład, Wielka
							Brytania, Włochy, Francja, Niemcy i Hiszpania to miejsca, w
							których słupki barberskie są nadal powszechnym widokiem przed
							salonami fryzjerskimi. To dowód na to, jak <b>Barber Pole</b> jako
							symbol tradycji i jakości przekracza granice i pozostaje ważnym
							elementem dziedzictwa fryzjerstwa na całym świecie.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-[50%] h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole7}
									alt='pole7'
									className='w-full h-full object-cover object-center'
								/>
							</div>
							<div className='w-[50%] h-[500px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole8}
									alt='pole8}'
									className='w-full h-full object-cover object-center'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Popularność Barber Pole w Polsce
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light mb-[42px]'>
							<b>Barber Pole</b> zyskuje na popularności w Polsce wraz z
							rozwojem trendu barberskiego i wzrostem zainteresowania
							tradycyjnymi usługami fryzjerskimi. Chociaż nie są one jeszcze tak
							powszechne jak na przykład w Stanach Zjednoczonych, to można je
							spotkać przed niektórymi salonami fryzjerskimi i barberskimi w
							Polsce. Słupki barberskie stają się symbolem tradycji, rzemiosła i
							dbałości o jakość usług fryzjerskich, co przyciąga klientów
							ceniących te wartości. W miarę jak kultura fryzjerska rozwija się
							w Polsce, można oczekiwać, że <b>Barber Pole</b> będzie coraz
							częściej spotykany na ulicach polskich miast.
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
								src={barberPole}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Barber Pole – Słupek Barberski
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Słupek barberski, znany również jako Barber Pole, to ikoniczny
							symbol salonów fryzjerskich i barberskich. Te biało-niebieskie
							słupki mają bogatą historię i symbolikę, której źródła sięgają
							wieków. W tym artykule zgłębimy historię Barber Pole, zrozumiemy
							jego znaczenie, przeanalizujemy koszty takiego znaku
							rozpoznawczego, a także odkryjemy fascynującą ciekawostkę
							dotyczącą jego pochodzenia.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[24px] text-prime font-bold'>
							Historia Barber Pole
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Początki Barber Pole
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Historia Barber Pole sięga średniowiecza. W tamtych czasach
							fryzjerzy pełnili nie tylko rolę strzyżących włosy, ale także
							wykonywali zabiegi chirurgiczne i dentystyczne. Biało-niebieskie
							słupki na zewnątrz ich zakładów służyły jako wskaźniki ich
							umiejętności. Pierwsze Barber Słupki miały zazwyczaj
							biało-niebieskie lub biało-czerwone paski.
						</p>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole1}
									alt='pole1}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole2}
									alt='pole2'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole3}
									alt='pole3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Kolory biało-niebieskie
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Kolory biało-niebieskie na <b>Barber Pole</b> mają swoje
							znaczenie. Biały symbolizował gips, którym fryzjerzy w przeszłości
							obwiązali rany, a niebieski reprezentował żyły, które były
							operowane. Kombinacja tych kolorów była wyraźnym sygnałem dla
							przechodniów, że w danym miejscu można uzyskać zarówno usługi
							fryzjerskie, jak i medyczne.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Pochodzenie – Ciekawostka
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Ciekawostka! Pierwszy <b>Barber Pole</b> pojawił się w Stanach
							Zjednoczonych, w miasteczku Pawtucket w stanie Rhode Island. Było
							to w drugiej połowie XIX wieku. Od tamtej chwili{" "}
							<b>Barber Pole</b> stał się znakiem rozpoznawczym salonów
							fryzjerskich na całym świecie, symbolizując tradycję i jakość
							usług fryzjerskich.
						</p>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole4}
									alt='pole4'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole5}
									alt='pole5'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole6}
									alt='pole6'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Symbolika Słupka Barberskiego
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Odznaczenie zawodowe
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							<b>Barber Pole</b> stał się symbolem zawodowym i znakiem
							rozpoznawczym salonów fryzjerskich na całym świecie. To
							odznaczenie zawodowe, które wskazuje, że w danym miejscu pracują
							wykwalifikowani fryzjerzy.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Tradycja i kontynuacja dziedzictwa
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							W dzisiejszych czasach <b>Barber Pole</b> nie tylko przypomina o
							historycznym dziedzictwie fryzjerów, ale także stanowi kontynuację
							tradycji. W salonach barberskich, gdzie klasyczne fryzury i
							stylizacje są na porządku dziennym, <b>Barber Pole</b> wciąż
							odgrywa ważną rolę jako symbol rzemiosła.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Przyjazna i tradycyjna atmosfera
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Obecność <b>Barber Pole</b> w salonie fryzjerskim tworzy przyjazną
							i tradycyjną atmosferę. To znak, że miejsce to ceni tradycję i
							jakość usług. Wizyta w takim salonie to nie tylko zadbanie o
							wygląd, ale także przeżycie kawałka historii fryzjerstwa.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Koszty Słupka Barberskiego
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Koszty <b>Barber Pole</b> mogą znacząco się różnić w zależności od
							wielu czynników. Wpływ na cenę mają materiały, rozmiar i
							skomplikowanie projektu. Proste, gotowe słupki dostępne online
							mogą kosztować od kilkuset do kilku tysięcy złotych i są one
							dostępne do kupienia np. na Allegro ( kliknij i sprawdź ceny ).
							Jeśli zdecydujesz się na indywidualny projekt lub duży, ozdobny{" "}
							<b>Barber Pole</b>, koszty mogą wzrosnąć znacząco.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Historia <b>Barber Pole</b> jest fascynująca i przypomina nam o
							bogatym dziedzictwie zawodu fryzjera. Te biało-niebieskie słupki
							nadal odgrywają istotną rolę jako symbole tradycji i jakości w
							branży fryzjerskiej. Niezależnie od tego, czy odwiedzasz
							tradycyjny salon fryzjerski czy nowoczesny barber shop, Barber
							Pole przypomina, że fryzjerstwo to więcej niż tylko strzyżenie
							włosów – to kontynuacja długiej historii i tradycji.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							<b>Barber Pole</b> to nie tylko słupek barberski, to symbol
							wartości, które kształtują fryzjerską branżę. Niech
							biało-niebieskie słupki nadal będą znakiem tradycji i jakości w
							świecie fryzjerstwa.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Czy wiesz, że ?
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Wielu ludzi nie zdaje sobie sprawy, że <b>Barber Pole</b> jest nie
							tylko znakiem rozpoznawczym salonów fryzjerskich, ale ma także
							swoje miejsce w historii medycyny. W dawnych czasach, oprócz usług
							fryzjerskich, barberzy zajmowali się również chirurgią i
							wydobywaniem zębów. <b>Barber Pole</b> z białymi i czerwonymi (lub
							biało-niebieskimi) paskami był symbolem tego wszechstronnego
							podejścia. To zaskakujące, jak historia zawodu fryzjera jest
							ściśle związana z historią medycyny, a <b>Barber Pole</b>{" "}
							przypomina o tych dawnych, wielofunkcyjnych czasach.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Kiedy myślimy o <b>Barber Pole</b>, najczęściej przychodzi nam na
							myśl tradycyjny amerykański barbershop. Jednak ten ikoniczny znak
							rozpoznawczy pojawia się na całym świecie. Oprócz Stanów
							Zjednoczonych, gdzie <b>Barber Pole</b> ma długą i bogatą
							historię, można go znaleźć w wielu innych krajach, szczególnie w
							krajach o silnej kulturze fryzjerskiej. Na przykład, Wielka
							Brytania, Włochy, Francja, Niemcy i Hiszpania to miejsca, w
							których słupki barberskie są nadal powszechnym widokiem przed
							salonami fryzjerskimi. To dowód na to, jak <b>Barber Pole</b> jako
							symbol tradycji i jakości przekracza granice i pozostaje ważnym
							elementem dziedzictwa fryzjerstwa na całym świecie.
						</p>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole7}
									alt='pole7'
									className='w-full h-full object-cover object-center'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={pole8}
									alt='pole8}'
									className='w-full h-full object-cover object-center'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Popularność Barber Pole w Polsce
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light mb-[42px]'>
							<b>Barber Pole</b> zyskuje na popularności w Polsce wraz z
							rozwojem trendu barberskiego i wzrostem zainteresowania
							tradycyjnymi usługami fryzjerskimi. Chociaż nie są one jeszcze tak
							powszechne jak na przykład w Stanach Zjednoczonych, to można je
							spotkać przed niektórymi salonami fryzjerskimi i barberskimi w
							Polsce. Słupki barberskie stają się symbolem tradycji, rzemiosła i
							dbałości o jakość usług fryzjerskich, co przyciąga klientów
							ceniących te wartości. W miarę jak kultura fryzjerska rozwija się
							w Polsce, można oczekiwać, że <b>Barber Pole</b> będzie coraz
							częściej spotykany na ulicach polskich miast.
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

export default BlogBarberPole;
