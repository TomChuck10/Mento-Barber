import { useState } from "react";

// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";

const Training = () => {
	const [activePanel, setActivePanel] = useState(0);

	const data = [
		{
			title: "Krótkie włosy + cieniowanie od zera (fade)",
			description:
				"Perfekcyjny fade to podstawa nowoczesnego barberingu. W tym panelu skupimy się na technice cieniowania od zera, precyzyjnym przejściu tonalnym i odpowiednim doborze długości do kształtu głowy. Pokażemy, jak pracować z maszynką, trymerem i shaverem, by uzyskać idealne wykończenie. Szkolenie obejmuje zarówno teorię, jak i praktykę na modelach, abyś mógł doszlifować swoje umiejętności i zyskać pewność w pracy z krótkimi fryzurami.",
		},
		{
			title: "Długie włosy , praca na nożyczkach",
			description: "Coś tam o strzyżeniu nożyczkami.",
		},
		{
			title: "Krótkie włosy , praca nmaszynką",
			description: "Coś tam o strzyżeniu maszynką.",
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
							<div className='h-[50%] bg-prime m-[32px]'></div>
							<p className='text-[24px] text-prime mx-[32px]'>
								{data[activePanel].title}
							</p>
							<p className='text-[16px] text-white mx-[32px] mt-[10px] mb-[36px]'>
								{data[activePanel].description}
							</p>
							<button className='border-2 border-prime rounded-[16px] mx-[32px] p-[18px] text-prime mb-[36px] mt-auto'>
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
		</div>
	);
};

export default Training;
