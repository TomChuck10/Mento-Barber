// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import beardDandruff from "../assets/6_broda.png";
import oil1 from "../assets/oil/oil1.webp";
import oil2 from "../assets/oil/oil2.webp";
import oil3 from "../assets/oil/oil3.webp";
import oil4 from "../assets/oil/oil4.webp";
import oil5 from "../assets/oil/oil5.webp";
import oil6 from "../assets/oil/oil6.webp";

const BlogBeardDandruff = () => {
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
								src={beardDandruff}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Jak wyleczyć łupież na brodzie
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Łupież na brodzie to problem, który może dotknąć nie tylko skórę
							głowy, ale także obszar twarzy. To irytujące schorzenie może
							prowadzić do świądu, pieczenia oraz spadku pewności siebie. Na
							szczęście istnieje wiele sposobów, aby zwalczyć łupież na brodzie
							i przywrócić zdrowy i czysty wygląd. W tym artykule dowiesz się,
							jak radzić sobie z łupieżem na brodzie, łuszczącą się skórą pod
							brodą oraz problemem łupieżu na brodzie i brwiach.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[32px] text-prime font-bold'>
							Dlaczego pojawia Się łupież na brodzie?
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Przyczyny łupieżu na brodzie
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Łupież na brodzie może mieć różne przyczyny, a zrozumienie ich
							jest kluczowe dla skutecznego leczenia. Oto kilka czynników, które
							mogą przyczyniać się do problemu:
						</p>
						<ol className='list-decimal text-[16px] text-white my-[12px] ml-[15px] font-light'>
							<li>
								<b>Nadmierna sucha skóra:</b> Sucha skóra pod brodą jest podatna
								na złuszczanie się, co może prowadzić do łupieżu.
							</li>
							<li>
								{" "}
								<b>Nadmierna produkcja sebum:</b> Zbyt duża produkcja oleju
								przez gruczoły łojowe może prowadzić do łupieżu olejnego.
							</li>
							<li>
								<b>Infekcje grzybicze:</b> Grzyby, takie jak Malassezia, mogą
								przyczynić się do łupieżu.
							</li>
							<li>
								<b>Złe nawyki higieniczne:</b> Brak odpowiedniej pielęgnacji
								brody i twarzy może prowadzić do łupieżu.
							</li>
						</ol>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Jak radzić sobie z łupieżem na brodzie?
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Praktyczne wskazówki na co dzień
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							W walce z łupieżem na brodzie kluczowe jest utrzymanie
							odpowiedniej pielęgnacji i nawyków higienicznych. Oto kilka
							praktycznych wskazówek:
						</p>
						<ol className='list-decimal text-[16px] text-white my-[12px] ml-[15px] font-light'>
							<li>
								<b>Regularne mycie:</b> Dokładne mycie brody specjalnym
								szamponem do brody pomoże pozbyć się nadmiaru oleju i skórnego
								łupieżu.
							</li>
							<li>
								<b>Unikanie agresywnych produktów:</b> Unikaj kosmetyków i
								mydeł, które mogą podrażniać skórę pod brodą.
							</li>
							<li>
								<b>Stosowanie naturalnych olejów:</b> Olejki, takie jak olej
								jojoba czy olej z pestek winogron, mogą pomóc w nawilżeniu skóry
								pod brodą.
							</li>
							<li>
								<b>Unikanie gorącej wody:</b> Gorąca woda może wysuszać skórę,
								dlatego myj brodę w letniej wodzie.
							</li>
						</ol>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Szampony i olejki przeciwlupieżowe do brody
						</h1>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil1}
									alt='oil1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil2}
									alt='oil2}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil3}
									alt='oil3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Olejki do brody, które zawierają cenny olej jojoba, to prawdziwe
							eliksiry zdrowia dla twojej skóry i brody. Te olejki, widoczne na
							powyższych zdjęciach, to naturalny dar, który doskonale nawilża
							skórę i pomaga w walce z problemem łupieżu na brodzie. Dostępne są
							one w renomowanym sklepie Beardman.pl, gdzie znajdziesz wysokiej
							jakości produkty do pielęgnacji brody i skóry. Daj swojej brodzie
							luksusową pielęgnację, która przyniesie ulgę i przywróci jej
							zdrowy blask.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Natomiast jeśli poszukujesz skutecznego szamponu do zwalczania
							łupieżu, polecamy rozejrzeć się w różnych sklepach. Ważne jest,
							aby wybrać szampon o właściwościach nawilżających, który pomoże w
							zwalczaniu problemu łupieżu. Te trzy poniższe propozycje
							znajdziesz w sklepie uZbira. Znajdziesz tam różnorodne produkty do
							pielęgnacji brody i skóry. Wybierając szampon, zwróć uwagę także
							na jego zapach, który ma duże znaczenie dla Twojego osobistego
							komfortu. Zadbaj o swoją brodę, korzystając z różnorodnych
							produktów dostępnych na rynku, które pomogą Ci utrzymać zdrowy i
							zadbane wygląd.”
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil4}
									alt='oil4'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil5}
									alt='oil5}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil6}
									alt='oil6'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Leki i preparaty przeciwlupieżowe
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Jeśli łupież na brodzie jest uporczywy, warto sięgnąć po specjalne
							leki i preparaty przeciwlupieżowe. W aptekach dostępne są różne
							szampony i balsamy zawierające substancje aktywne, takie jak
							ketokonazol czy siarka, które pomagają zwalczyć łupież.
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Łupież na brodzie i brwiach
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
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
						<h1 className='text-[32px] text-prime font-bold mt-[32px]'>
							Kiedy skonsultować się z lekarzem?
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							W przypadku, gdy łupież na brodzie nie ustępuje pomimo prób
							samodzielnego leczenia, warto skonsultować się z dermatologiem.
							Specjalista może przeprowadzić dokładną diagnozę i zalecić
							odpowiednie leczenie, które dostosowane będzie do przyczyny
							problemu.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Łupież na brodzie to problem, który może wpłynąć na naszą pewność
							siebie i komfort. Jednak zrozumienie przyczyn oraz regularna
							pielęgnacja mogą pomóc w zwalczaniu tego schorzenia. Jeśli problem
							się nasila lub nie ustępuje, warto skonsultować się z lekarzem,
							który pomoże znaleźć skuteczne rozwiązanie. Dbając o zdrową skórę
							pod brodą i brwiami, możemy cieszyć się pięknym i zdrowym wyglądem
							przez wiele lat.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light mb-[42px]'>
							Pielęgnacja brody to nie tylko walka z łupieżem, to także odbicie
							naszego osobistego stylu i dbałość o wygląd. Dlatego nie zapominaj
							o regularnych wizytach u barbera lub fryzjera. W naszym MENTO
							Barber Shop Bochnia zadbamy o Twoją brodę, przycinając ją i
							stosując odpowiednią pielęgnację po zabiegu.
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
								src={beardDandruff}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Jak wyleczyć łupież na brodzie
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Łupież na brodzie to problem, który może dotknąć nie tylko skórę
							głowy, ale także obszar twarzy. To irytujące schorzenie może
							prowadzić do świądu, pieczenia oraz spadku pewności siebie. Na
							szczęście istnieje wiele sposobów, aby zwalczyć łupież na brodzie
							i przywrócić zdrowy i czysty wygląd. W tym artykule dowiesz się,
							jak radzić sobie z łupieżem na brodzie, łuszczącą się skórą pod
							brodą oraz problemem łupieżu na brodzie i brwiach.
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[24px] text-prime font-bold'>
							Dlaczego pojawia Się łupież na brodzie?
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Przyczyny łupieżu na brodzie
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Łupież na brodzie może mieć różne przyczyny, a zrozumienie ich
							jest kluczowe dla skutecznego leczenia. Oto kilka czynników, które
							mogą przyczyniać się do problemu:
						</p>
						<ol className='list-decimal text-[14px] text-white my-[12px] ml-[15px] font-light'>
							<li>
								<b>Nadmierna sucha skóra:</b> Sucha skóra pod brodą jest podatna
								na złuszczanie się, co może prowadzić do łupieżu.
							</li>
							<li>
								{" "}
								<b>Nadmierna produkcja sebum:</b> Zbyt duża produkcja oleju
								przez gruczoły łojowe może prowadzić do łupieżu olejnego.
							</li>
							<li>
								<b>Infekcje grzybicze:</b> Grzyby, takie jak Malassezia, mogą
								przyczynić się do łupieżu.
							</li>
							<li>
								<b>Złe nawyki higieniczne:</b> Brak odpowiedniej pielęgnacji
								brody i twarzy może prowadzić do łupieżu.
							</li>
						</ol>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Jak radzić sobie z łupieżem na brodzie?
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Praktyczne wskazówki na co dzień
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							W walce z łupieżem na brodzie kluczowe jest utrzymanie
							odpowiedniej pielęgnacji i nawyków higienicznych. Oto kilka
							praktycznych wskazówek:
						</p>
						<ol className='list-decimal text-[14px] text-white my-[12px] ml-[15px] font-light'>
							<li>
								<b>Regularne mycie:</b> Dokładne mycie brody specjalnym
								szamponem do brody pomoże pozbyć się nadmiaru oleju i skórnego
								łupieżu.
							</li>
							<li>
								<b>Unikanie agresywnych produktów:</b> Unikaj kosmetyków i
								mydeł, które mogą podrażniać skórę pod brodą.
							</li>
							<li>
								<b>Stosowanie naturalnych olejów:</b> Olejki, takie jak olej
								jojoba czy olej z pestek winogron, mogą pomóc w nawilżeniu skóry
								pod brodą.
							</li>
							<li>
								<b>Unikanie gorącej wody:</b> Gorąca woda może wysuszać skórę,
								dlatego myj brodę w letniej wodzie.
							</li>
						</ol>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Szampony i olejki przeciwlupieżowe do brody
						</h1>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil1}
									alt='oil1'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil2}
									alt='oil2}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil3}
									alt='oil3'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Olejki do brody, które zawierają cenny olej jojoba, to prawdziwe
							eliksiry zdrowia dla twojej skóry i brody. Te olejki, widoczne na
							powyższych zdjęciach, to naturalny dar, który doskonale nawilża
							skórę i pomaga w walce z problemem łupieżu na brodzie. Dostępne są
							one w renomowanym sklepie Beardman.pl, gdzie znajdziesz wysokiej
							jakości produkty do pielęgnacji brody i skóry. Daj swojej brodzie
							luksusową pielęgnację, która przyniesie ulgę i przywróci jej
							zdrowy blask.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Natomiast jeśli poszukujesz skutecznego szamponu do zwalczania
							łupieżu, polecamy rozejrzeć się w różnych sklepach. Ważne jest,
							aby wybrać szampon o właściwościach nawilżających, który pomoże w
							zwalczaniu problemu łupieżu. Te trzy poniższe propozycje
							znajdziesz w sklepie uZbira. Znajdziesz tam różnorodne produkty do
							pielęgnacji brody i skóry. Wybierając szampon, zwróć uwagę także
							na jego zapach, który ma duże znaczenie dla Twojego osobistego
							komfortu. Zadbaj o swoją brodę, korzystając z różnorodnych
							produktów dostępnych na rynku, które pomogą Ci utrzymać zdrowy i
							zadbane wygląd.”
						</p>
						<div className='flex flex-col items-center justify-center gap-[16px] my-[24px]'>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil4}
									alt='oil4'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil5}
									alt='oil5}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
							<div className='w-full h-[400px] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={oil6}
									alt='oil6'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Leki i preparaty przeciwlupieżowe
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Jeśli łupież na brodzie jest uporczywy, warto sięgnąć po specjalne
							leki i preparaty przeciwlupieżowe. W aptekach dostępne są różne
							szampony i balsamy zawierające substancje aktywne, takie jak
							ketokonazol czy siarka, które pomagają zwalczyć łupież.
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Łupież na brodzie i brwiach
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
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
						<h1 className='text-[24px] text-prime font-bold mt-[32px]'>
							Kiedy skonsultować się z lekarzem?
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							W przypadku, gdy łupież na brodzie nie ustępuje pomimo prób
							samodzielnego leczenia, warto skonsultować się z dermatologiem.
							Specjalista może przeprowadzić dokładną diagnozę i zalecić
							odpowiednie leczenie, które dostosowane będzie do przyczyny
							problemu.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Łupież na brodzie to problem, który może wpłynąć na naszą pewność
							siebie i komfort. Jednak zrozumienie przyczyn oraz regularna
							pielęgnacja mogą pomóc w zwalczaniu tego schorzenia. Jeśli problem
							się nasila lub nie ustępuje, warto skonsultować się z lekarzem,
							który pomoże znaleźć skuteczne rozwiązanie. Dbając o zdrową skórę
							pod brodą i brwiami, możemy cieszyć się pięknym i zdrowym wyglądem
							przez wiele lat.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light mb-[42px]'>
							Pielęgnacja brody to nie tylko walka z łupieżem, to także odbicie
							naszego osobistego stylu i dbałość o wygląd. Dlatego nie zapominaj
							o regularnych wizytach u barbera lub fryzjera. W naszym MENTO
							Barber Shop Bochnia zadbamy o Twoją brodę, przycinając ją i
							stosując odpowiednią pielęgnację po zabiegu.
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

export default BlogBeardDandruff;
