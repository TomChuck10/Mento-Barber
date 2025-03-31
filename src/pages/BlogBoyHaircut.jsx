// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";

const BlogBoyHaircut = () => {
	return (
		<div className='h-screen '>
			<Navbar />
			<div
				className='relative min-h-screen h-screen overflow-hidden'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}>
				<div className='absolute w-full flex items-center justify-center h-full z-[2]'>
					<div className='flex items-center justify-center gap-[16px] w-[calc(100%-196px)] mt-[100px]'>
						<div
							className=' w-[70%] bg-[#171D1F] flex flex-col p-[32px]'
							style={{ boxShadow: "0px 8px 10px #00000099" }}>
							<div className='h-[100px] bg-prime rounded-[6px]'></div>
							<p>dodane 2025</p>
							<h1>Fryzura dla Chłopca – TOP 7 inspiracji i pomysłów</h1>
							<p>
								Kiedy przychodzi pora na zmianę fryzura dla chłopca, wybór
								odpowiedniego stylu może być trudny. Dlatego przygotowaliśmy
								zestawienie z siedmioma inspiracjami i pomysłami na nowe
								fryzurki, które sprawdzą się doskonale u młodych chłopców.
								Odkryj różnorodne propozycje, od klasycznych po bardziej
								wyraziste, i znajdź idealny look dla swojego dziecka!
							</p>
							<hr />
							<div className='flex flex-row items-center justify-center mt-4 gap-[16px]'>
								<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
								<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
								<div className='w-full h-[300px] bg-gray-300 rounded-[6px]'></div>
							</div>
							<h1>1. Fryzurka Młodzieżowa</h1>
							<p>
								Pierwszym pomysłem jest popularna fryzurka młodzieżowa, która
								jest doskonałym wyborem dla aktywnych chłopców. Ta fryzura
								charakteryzuje się krótkimi włosami z boków i z tyłu głowy, a na
								górze nieco dłuższymi, które można lekko potoczyć lub zaczesywać
								na bok. Jest łatwa w pielęgnacji i świetnie nadaje się do
								codziennego noszenia.
							</p>
							<h1>2. Fryzura Bob</h1>
							<p>
								Pierwszym pomysłem jest popularna fryzurka młodzieżowa, która
								jest doskonałym wyborem dla aktywnych chłopców. Ta fryzura
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
					className='absolute w-full h-auto pointer-events-none z-[1] opacity-70'
					style={{ top: "-50%" }}
				/>
			</div>
			<style>{`
				@media (min-width: 1800px) {
					.title {
						font-size: 24px;
					}
					.description {
						font-size: 16px;
					}
					.button {
						padding: 16px
					}
				}
			`}</style>
		</div>
	);
};

export default BlogBoyHaircut;
