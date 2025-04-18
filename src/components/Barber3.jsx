import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber3.png";
import Texture from "../assets/texture.png";

import { useIsMobile } from "../Hooks/useIsMobile";

const Barber3 = () => {
	const isMobile = useIsMobile();

	return (
		<>
			{!isMobile ? (
				<div
					className='relative h-screen flex items-center justify-start p-10 text-white snap-start overflow-hidden'
					style={{
						background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundBlendMode: "multiply",
					}}>
					<div className='text-start p-10'>
						<h1
							className='text-9xl font-bold text-orange-500'
							style={{
								fontSize: "7.85rem",
								fontWeight: "bold",
								textTransform: "uppercase",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600", // Obramowanie w WebKit
								textShadow:
									"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543", // Efekt neonowy
							}}>
							DAWID
						</h1>
						<p className='mt-4 max-w-[430px] text-[15px] font-light'>
							Jestem Dawid, właściciel Mento Barber Shop. Nasz salon to więcej
							niż fryzury i brody – to styl i klimat, który tworzymy każdego
							dnia. Pracuję za fotelem i rozwijam zespół, byś zawsze wychodził
							od nas zadowolony. Wpadnij i przekonaj się!
						</p>
					</div>
					<div
						className='absolute w-full left-0 right-0 z-1'
						style={{ zIndex: 1 }}>
						<h1
							className='font-bold uppercase text-center'
							style={{
								fontSize: "29vw",
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "4px #ff6600",
								opacity: 0.05,
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							DAWID
						</h1>
					</div>
					<img
						src={Gradient}
						alt='Gradient'
						className='absolute top-0 right-0 w-1/2 h-auto pointer-events-none z-0'
						style={{ top: -350, right: -350 }}
					/>
					<img
						src={Barber}
						alt='Background'
						className='absolute bottom-0 right-0 w-[70%] h-auto pointer-events-none'
						style={{ bottom: -520, right: -100, zIndex: 1 }}
					/>
				</div>
			) : (
				<div
					id='about'
					className='relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden'
					style={{
						background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundBlendMode: "multiply",
					}}>
					<div className='flex flex-col items-center  mt-[10%] leading-none z-20 '>
						<h1
							className='font-bold uppercase text-center'
							style={{
								fontSize: "25vw", // Zmieniono na jednostkę vw, aby dopasować do szerokości ekranu
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							DAWID
						</h1>
						<p className='mt-4 max-w-[430px] text-[18px] font-light text-white text-center'>
							Jestem Dawid, właściciel Mento Barber Shop. Nasz salon to więcej
							niż fryzury i brody – to styl i klimat, który tworzymy każdego
							dnia. Pracuję za fotelem i rozwijam zespół, byś zawsze wychodził
							od nas zadowolony. Wpadnij i przekonaj się!
						</p>
						<div className='flex flex-col items-center space-y-[12px] w-full'>
							<button className='button p-[16px] border-2 w-full border-prime rounded-[16px] text-prime mb-[24px] mt-[24px]'>
								Umów wizytę
							</button>
						</div>
					</div>
					<img
						src={Barber}
						alt='Background'
						className='absolute top-0 w-[800px] max-w-none z-10' // Added maxWidth constraint
						style={{ right: "-175px", top: "-250px" }}
					/>
					<img
						src={Gradient}
						alt='Gradient'
						className='absolute top-0 z-0 w-[800px] max-w-none'
						style={{ right: "-200px", top: "-200px" }}
					/>
					<div
						className='absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10'
						style={{
							background:
								"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
						}}></div>
				</div>
			)}
		</>
	);
};

export default Barber3;
