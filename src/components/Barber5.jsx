import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber5.png";
import Texture from "../assets/texture.png";

const Barber5 = () => {
	return (
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
						textShadow: "0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543", // Efekt neonowy
					}}>
					OLA
				</h1>
				<p className='mt-4 max-w-[430px] text-[15px]'>
					Specjalizuję się w strzyżeniach męskich, a cieniowanie od zera to moja
					ulubiona technika. Cenię dobrą rozmowę i świetny kontakt z klientami,
					bo barbering to dla mnie nie tylko praca, ale też pasja. Zawsze pełna
					energii i uśmiechu - zapraszam na fotel!
				</p>
			</div>
			<div className='absolute w-full left-0 right-0 z-1' style={{ zIndex: 1 }}>
				<h1
					className='font-bold uppercase text-center'
					style={{
						fontSize: "30vw",
						fontWeight: "bold",
						color: "transparent",
						WebkitTextStroke: "4px #ff6600",
						opacity: 0.05,
						width: "100%",
						whiteSpace: "nowrap",
					}}>
					OLA
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
				className='absolute bottom-0 right-0 w-3/4 h-auto pointer-events-none'
				style={{ bottom: -570, right: -100, zIndex: 1 }}
			/>
		</div>
	);
};

export default Barber5;
