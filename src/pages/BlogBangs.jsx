// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import bangs from "../assets/4_grzywka.png";
import man2 from "../assets/manHaircut/man2.jpg";
import man4 from "../assets/manHaircut/man4.jpg";
import man6 from "../assets/manHaircut/man6.jpg";
import man7 from "../assets/manHaircut/man7.jpg";
import man8 from "../assets/manHaircut/man8.jpg";

const BlogBangs = () => {
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
								src={bangs}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Męska fryzura z grzywką: 9 inspirujących propozycji
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Czy Męska fryzura z grzywką to dobry pomysł ? Sprawdźmy. Grzywka w
							męskiej fryzurze to element, który nadaje charakteru i stylu. W
							ciągu ostatnich lat grzywki wróciły do mody, co otworzyło szerokie
							pole do eksperymentowania z różnymi fryzurami. Niezależnie od
							tego, czy masz kręcone, proste, czy falowane włosy, istnieje wiele
							interesujących pomysłów na męskie fryzury z grzywką. Przedstawiamy
							dziesięć inspirujących propozycji, które pomogą Ci wybrać idealny
							look.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[32px] text-prime font-bold'>
							1. Krótka grzywka w stylu French Crop
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
							Krótka grzywka w stylu French Crop to znakomita propozycja dla
							mężczyzn, którzy cenią sobie minimalizm i niską konserwację
							fryzury. Ta fryzura charakteryzuje się krótkimi włosami z przodu
							głowy, które tworzą subtelną grzywkę. Jest to idealny wybór dla
							tych, którzy chcą wyglądać schludnie, nie tracąc zbyt wiele czasu
							na stylizację.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							2. Grzywka w stylu Undercut
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
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Fryzura z grzywką w stylu Undercut to połączenie długich włosów na
							grzywce z bardzo krótkimi włosami na bokach głowy. To odważna i
							modna opcja, która doskonale podkreśla twój indywidualizm.
							Stylizacja grzywki może być dowolna – od wygładzonej po
							rozczesanej do przodu, co daje dodatkową teksturę.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							3. Długa frzywka z kucykiem
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man6}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Męska fryzura z długą grzywką i kucykiem to wybór dla tych, którzy
							lubią ekstrawagancki wygląd. Grzywka opada na czoło, a z tyłu
							głowy łączy się z kucykiem. To zestawienie daje interesujący
							kontrast i pozwala na wyrażenie kreatywności.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							4. Grzywka w stylu Pompadour
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man7}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white font-light my-[12px]'>
							Pompadour to klasyczna fryzura, która zyskała na popularności
							wśród mężczyzn. Teraz możesz dostosować ją do swoich potrzeb,
							dodając grzywkę. To elegancka opcja, która doskonale nadaje się do
							bardziej formalnych okazji.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							5. Grzywka i broda
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man8}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Kombinacja grzywki i brody to sposób na stworzenie męskiego,
							charakterystycznego wyglądu. Możesz wybrać zarówno krótką, jak i
							długą grzywkę, łącząc ją z różnymi stylami brody.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							6. Skórzany punk z Grzywką
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Dla odważnych i poszukujących wyjątkowych rozwiązań, fryzura w
							stylu skórzanej punkowej z grzywką może być fascynującą opcją.
							Krótkie boki, długa grzywka i stylizacja w stylu punkowym to wyraz
							osobowości i niekonwencjonalnego podejścia.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							7. Grzywka z kształtem
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Jeśli masz proste włosy, grzywka może stać się elementem, który
							nada im charakteru. Poproś fryzjera o odpowiednią stylizację,
							która podkreśli kształt twojego oblicza.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							8. Grzywka z retro vibe
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzury z grzywką z retro vibe nadal są na topie. Możesz wybrać
							stylizację nawiązującą do lat 50., 60. lub 70. Opcje są
							różnorodne, a efekt zawsze zachwyca.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							9. Zaczesana grzywka
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Ostatnia propozycja to zaczesana grzywka, która może być krótka
							lub długa. To bardzo elegancka i uniwersalna fryzura, która pasuje
							do wielu okazji.
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Podsumowując, grzywka daje ogromne możliwości kreatywności i
							indywidualizmu w męskich fryzurach. Niezależnie od tego, czy
							preferujesz krótkie, czy długie włosy, czy jesteś fanem retro czy
							nowoczesnych trendów, z pewnością znajdziesz idealną fryzurę z
							grzywką, która podkreśli twój styl.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Męska fryzura z grzywką – CZY WIESZ ?
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Historia grzywek sięga starożytności. W starożytnym Egipcie już w
							III tysiącleciu p.n.e. faraonowie nosili charakterystyczną
							grzywkę. To element, który przetrwał wieki i wciąż jest obecny w
							modzie. Grzywki były noszone przez wielu znanych i wpływowych
							mężczyzn, w tym ikony stylu takie jak Elvis Presley czy James
							Dean.
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Oczywiście, moda na grzywki ewoluowała wraz z czasem, przyjmując
							różne kształty i style. Dziś mężczyźni mają więcej możliwości niż
							kiedykolwiek wcześniej, aby dostosować grzywkę do swojego
							indywidualnego gustu.
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Zachęcamy do odwiedzenia naszego salonu MENTO Barber Shop w
							Bochni, gdzie nasi doświadczeni fryzjerzy pomogą Ci znaleźć
							idealną fryzurę z grzywką, dostosowaną do Twoich preferencji i
							wyglądu.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Dla kogo jest fryzura z grzywką ?
						</h1>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzura z grzywką to wszechstronny wybór, który może sprostać
							różnym oczekiwaniom. Oto grupy osób, dla których jest to idealna
							opcja:
						</p>
						<p className='text-[16px] text-white my-[12px] font-bold'>
							1. Młodzież i mężczyźni w średnim wieku
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzura z grzywką jest szczególnie popularna wśród młodszych
							mężczyzn, zarówno w wieku nastoletnim, jak i
							dwudziestoparolatkowym. Jednak nie jest to styl ograniczony tylko
							do młodzieży. Coraz więcej mężczyzn w średnim wieku i starszych
							decyduje się na ten świeży i nowoczesny look.
						</p>
						<p className='text-[16px] text-white my-[12px] font-bold'>
							2. Osoby aktywne
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Skin fade jest idealny dla tych, którzy prowadzą aktywny tryb
							życia. Krótsze włosy po bokach i z tyłu głowy zapewniają wygodę i
							chłód, co jest istotne podczas ćwiczeń, biegania lub uprawiania
							sportów.
						</p>
						<p className='text-[16px] text-white my-[12px] font-bold'>
							3. Mężczyźni szukający niskiej konserwacji
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Ten styl fryzury wymaga minimalnej pielęgnacji i stylizacji, co
							przyciąga tych, którzy cenią sobie prostotę.
						</p>
						<p className='text-[16px] text-white my-[12px] font-bold'>
							4. Osoby eksperymentujące ze stylem
						</p>
						<p className='text-[16px] text-white my-[12px] font-light'>
							Fryzura z grzywką oferuje wiele wariantów, co pozwala na
							eksperymentowanie z długościami i teksturą górnych włosów. To
							atrakcyjne dla tych, któ chcą wyrazić swoją indywidualność i
							kreatywność w zakresie fryzur.
						</p>
						<p className='text-[16px] text-white my-[12px] font-bold'>
							5. Mężczyźni w środowisku biznesowym
						</p>
						<p className='text-[16px] text-white my-[12px] font-light mb-[42px]'>
							Chociaż fryzura z grzywką jest zazwyczaj kojarzona z luźnym
							stylem, istnieją bardziej konserwatywne wersje tego looku, które
							nadają się do środowiska biznesowego. Dla mężczyzn pracujących w
							korporacjach, można dostosować ten styl do bardziej formalnych
							wymogów.
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
								src={bangs}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Męska fryzura z grzywką: 9 inspirujących propozycji
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Czy Męska fryzura z grzywką to dobry pomysł ? Sprawdźmy. Grzywka w
							męskiej fryzurze to element, który nadaje charakteru i stylu. W
							ciągu ostatnich lat grzywki wróciły do mody, co otworzyło szerokie
							pole do eksperymentowania z różnymi fryzurami. Niezależnie od
							tego, czy masz kręcone, proste, czy falowane włosy, istnieje wiele
							interesujących pomysłów na męskie fryzury z grzywką. Przedstawiamy
							dziesięć inspirujących propozycji, które pomogą Ci wybrać idealny
							look.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[24px] text-prime font-bold'>
							1. Krótka grzywka w stylu French Crop
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
							Krótka grzywka w stylu French Crop to znakomita propozycja dla
							mężczyzn, którzy cenią sobie minimalizm i niską konserwację
							fryzury. Ta fryzura charakteryzuje się krótkimi włosami z przodu
							głowy, które tworzą subtelną grzywkę. Jest to idealny wybór dla
							tych, którzy chcą wyglądać schludnie, nie tracąc zbyt wiele czasu
							na stylizację.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							2. Grzywka w stylu Undercut
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
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Fryzura z grzywką w stylu Undercut to połączenie długich włosów na
							grzywce z bardzo krótkimi włosami na bokach głowy. To odważna i
							modna opcja, która doskonale podkreśla twój indywidualizm.
							Stylizacja grzywki może być dowolna – od wygładzonej po
							rozczesanej do przodu, co daje dodatkową teksturę.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							3. Długa frzywka z kucykiem
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man6}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Męska fryzura z długą grzywką i kucykiem to wybór dla tych, którzy
							lubią ekstrawagancki wygląd. Grzywka opada na czoło, a z tyłu
							głowy łączy się z kucykiem. To zestawienie daje interesujący
							kontrast i pozwala na wyrażenie kreatywności.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							4. Grzywka w stylu Pompadour
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man7}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white font-light my-[12px]'>
							Pompadour to klasyczna fryzura, która zyskała na popularności
							wśród mężczyzn. Teraz możesz dostosować ją do swoich potrzeb,
							dodając grzywkę. To elegancka opcja, która doskonale nadaje się do
							bardziej formalnych okazji.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							5. Grzywka i broda
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px]'>
							<div className='bg-gray-300 rounded-[6px] overflow-hidden my-[24px]'>
								<img
									src={man8}
									alt='slickback1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Kombinacja grzywki i brody to sposób na stworzenie męskiego,
							charakterystycznego wyglądu. Możesz wybrać zarówno krótką, jak i
							długą grzywkę, łącząc ją z różnymi stylami brody.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							6. Skórzany punk z Grzywką
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Dla odważnych i poszukujących wyjątkowych rozwiązań, fryzura w
							stylu skórzanej punkowej z grzywką może być fascynującą opcją.
							Krótkie boki, długa grzywka i stylizacja w stylu punkowym to wyraz
							osobowości i niekonwencjonalnego podejścia.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							7. Grzywka z kształtem
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Jeśli masz proste włosy, grzywka może stać się elementem, który
							nada im charakteru. Poproś fryzjera o odpowiednią stylizację,
							która podkreśli kształt twojego oblicza.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							8. Grzywka z retro vibe
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Fryzury z grzywką z retro vibe nadal są na topie. Możesz wybrać
							stylizację nawiązującą do lat 50., 60. lub 70. Opcje są
							różnorodne, a efekt zawsze zachwyca.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							9. Zaczesana grzywka
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Ostatnia propozycja to zaczesana grzywka, która może być krótka
							lub długa. To bardzo elegancka i uniwersalna fryzura, która pasuje
							do wielu okazji.
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Podsumowując, grzywka daje ogromne możliwości kreatywności i
							indywidualizmu w męskich fryzurach. Niezależnie od tego, czy
							preferujesz krótkie, czy długie włosy, czy jesteś fanem retro czy
							nowoczesnych trendów, z pewnością znajdziesz idealną fryzurę z
							grzywką, która podkreśli twój styl.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Męska fryzura z grzywką – CZY WIESZ ?
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Historia grzywek sięga starożytności. W starożytnym Egipcie już w
							III tysiącleciu p.n.e. faraonowie nosili charakterystyczną
							grzywkę. To element, który przetrwał wieki i wciąż jest obecny w
							modzie. Grzywki były noszone przez wielu znanych i wpływowych
							mężczyzn, w tym ikony stylu takie jak Elvis Presley czy James
							Dean.
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Oczywiście, moda na grzywki ewoluowała wraz z czasem, przyjmując
							różne kształty i style. Dziś mężczyźni mają więcej możliwości niż
							kiedykolwiek wcześniej, aby dostosować grzywkę do swojego
							indywidualnego gustu.
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Zachęcamy do odwiedzenia naszego salonu MENTO Barber Shop w
							Bochni, gdzie nasi doświadczeni fryzjerzy pomogą Ci znaleźć
							idealną fryzurę z grzywką, dostosowaną do Twoich preferencji i
							wyglądu.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Dla kogo jest fryzura z grzywką ?
						</h1>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Fryzura z grzywką to wszechstronny wybór, który może sprostać
							różnym oczekiwaniom. Oto grupy osób, dla których jest to idealna
							opcja:
						</p>
						<p className='text-[14px] text-white my-[12px] font-bold'>
							1. Młodzież i mężczyźni w średnim wieku
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Fryzura z grzywką jest szczególnie popularna wśród młodszych
							mężczyzn, zarówno w wieku nastoletnim, jak i
							dwudziestoparolatkowym. Jednak nie jest to styl ograniczony tylko
							do młodzieży. Coraz więcej mężczyzn w średnim wieku i starszych
							decyduje się na ten świeży i nowoczesny look.
						</p>
						<p className='text-[14px] text-white my-[12px] font-bold'>
							2. Osoby aktywne
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Skin fade jest idealny dla tych, którzy prowadzą aktywny tryb
							życia. Krótsze włosy po bokach i z tyłu głowy zapewniają wygodę i
							chłód, co jest istotne podczas ćwiczeń, biegania lub uprawiania
							sportów.
						</p>
						<p className='text-[14px] text-white my-[12px] font-bold'>
							3. Mężczyźni szukający niskiej konserwacji
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Ten styl fryzury wymaga minimalnej pielęgnacji i stylizacji, co
							przyciąga tych, którzy cenią sobie prostotę.
						</p>
						<p className='text-[14px] text-white my-[12px] font-bold'>
							4. Osoby eksperymentujące ze stylem
						</p>
						<p className='text-[14px] text-white my-[12px] font-light'>
							Fryzura z grzywką oferuje wiele wariantów, co pozwala na
							eksperymentowanie z długościami i teksturą górnych włosów. To
							atrakcyjne dla tych, któ chcą wyrazić swoją indywidualność i
							kreatywność w zakresie fryzur.
						</p>
						<p className='text-[14px] text-white my-[12px] font-bold'>
							5. Mężczyźni w środowisku biznesowym
						</p>
						<p className='text-[14px] text-white my-[12px] font-light mb-[42px]'>
							Chociaż fryzura z grzywką jest zazwyczaj kojarzona z luźnym
							stylem, istnieją bardziej konserwatywne wersje tego looku, które
							nadają się do środowiska biznesowego. Dla mężczyzn pracujących w
							korporacjach, można dostosować ten styl do bardziej formalnych
							wymogów.
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

export default BlogBangs;
