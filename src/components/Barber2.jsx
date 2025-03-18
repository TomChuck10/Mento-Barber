import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber2.png";

const Barber2 = () => {
	return (
		<div className='relative h-screen flex items-center justify-start p-10 bg-bgPrimary text-white snap-start overflow-hidden'>
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
					JIMMY
				</h1>
				<p className='mt-4 max-w-[430px] text-[15px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
					sollicitudin libero, vitae eleifend ante. Donec quis tellus bibendum,
					tincidunt massa id, euismod nisl.
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
					JIMMY
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
				className='absolute bottom-0 right-0 w-1/2 h-auto pointer-events-none'
				style={{ bottom: -320, right: 100, zIndex: 1 }}
			/>
		</div>
	);
};

export default Barber2;
