import { useState } from "react";

// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";

// Assets
import ShortHair from "../assets/shortHair.png";
import LongHair from "../assets/longHair.png";
import Beard from "../assets/beard.png";

const Training = () => {
	const [activePanel, setActivePanel] = useState(0);

	const data = [
		{
			photo: ShortHair,
			title: "Krótkie włosy + cieniowanie od zera (fade)",
			description:
				"Perfekcyjny fade to podstawa nowoczesnego barberingu. W tym panelu skupimy się na technice cieniowania od zera, precyzyjnym przejściu tonalnym i odpowiednim doborze długości do kształtu głowy. Pokażemy, jak pracować z maszynką, trymerem i shaverem, by uzyskać idealne wykończenie. Szkolenie obejmuje zarówno teorię, jak i praktykę na modelach, abyś mógł doszlifować swoje umiejętności i zyskać pewność w pracy z krótkimi fryzurami.",
		},
		{
			photo: LongHair,
			title: "Długie włosy , praca na nożyczkach",
			description:
				"Precyzyjna praca nożyczkami to podstawa przy dłuższych fryzurach. W tym panelu przepracujemy główne techniki strzyżenia, takie jak linia , gradacja , warstwa , aby dopasować fryzurę do kształtu głowy i struktury włosa. Nauczysz się, jak kontrolować napięcie pasma, jak pracować sekcyjnie i uzyskiwać płynne przejścia. Skupimy się na ergonomii ruchu oraz doborze narzędzi, byś mógł świadomie budować formę każdej fryzury.",
		},
		{
			photo: Beard,
			title: "Krótkie włosy , praca nmaszynką",
			description:
				"Idealnie przycięta broda to nie tylko estetyka, ale i komfort klienta. W tym panelu nauczysz się cieniowania brody, jej konturowania i odpowiedniego skracania, by dopasować kształt do rysów twarzy. Skupimy się także na tonowaniu i pielęgnacji zarostu, aby uzyskać naturalny, zdrowy wygląd. Podczas praktycznej części dowiesz się, jak pracować maszynka , trymerem, brzytwą i nożyczkami, by broda wyglądała perfekcyjnie i była dopasowana do stylu klienta.",
		},
	];

	const handleChangePanel = index => setActivePanel(index);

	const renderPanel = (panel, index) => (
		<div
			key={index}
			className={`h-[33.3%] pl-[36px] border-l-4 ${
				activePanel === index ? "border-prime" : "border-transparent"
			} border-b-[1px] flex flex-col justify-center cursor-pointer`}
			style={{
				borderBottomColor:
					activePanel === index
						? "rgba(255, 255, 255, 0.1)"
						: "rgba(112,112,112, 0.1)",
			}}
			onClick={() => handleChangePanel(index)}>
			<p className='text-white uppercase text-[14px]'>panel {index + 1}</p>
			<p
				className={`text-[18px] ${
					activePanel === index ? "text-prime" : "text-white"
				}`}>
				{panel.title}
			</p>
		</div>
	);

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
							className='h-[75vh] w-[33%] bg-[#171D1F]'
							style={{ boxShadow: "0px 8px 10px #00000099" }}>
							{data.map((panel, index) => renderPanel(panel, index))}
						</div>
						<div
							className='h-[75vh] w-[66%] bg-[#171D1F] flex flex-col'
							style={{ boxShadow: "0px 8px 10px #00000099" }}>
							<div className=' bg-white m-[32px] mb-[20px] rounded-[6px] overflow-hidden'>
								<img
									src={data[activePanel].photo}
									alt='photo'
									className='w-full h-full object-cover'
								/>
							</div>
							<p className='title text-prime mx-[32px] text-[20px]'>
								{data[activePanel].title}
							</p>
							<p className='description text-[13px] text-white mx-[32px] mt-[10px] mb-[24px] font-light'>
								{data[activePanel].description}
							</p>
							<button className='button border-2 border-prime rounded-[16px] mx-[32px] p-[12px] text-prime mb-[36px] mt-auto'>
								Umów szkolenie
							</button>
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

export default Training;
