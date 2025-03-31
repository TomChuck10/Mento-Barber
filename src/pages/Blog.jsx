import { useNavigate } from "react-router-dom";

// Project imports
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gradient from "../assets/gradient.svg";

// Texture
import Texture from "../assets/texture.png";

const Blog = () => {
	const navigate = useNavigate();

	return (
		<div className='h-screen overflow-hidden'>
			<Navbar />
			<div
				id='about'
				className='relative flex flex-col justify-end items-center min-h-screen px-[96px] z-10 overflow-hidden'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}>
				<div className='z-20 flex flex-row justify-between w-full items-end'>
					<div className='flex flex-col items-start mt-60 leading-none max-w-screen-sm z-20'>
						<h1 className='title text-[32px] text-prime  font-bold'>
							Fryzura dla Chłopca – TOP 7 inspiracji i pomysłów
						</h1>
						<p
							className='description text-[13px] mt-4 max-w-xl  text-gray-300'
							style={{ lineHeight: 2 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
							porttitor tellus, porta laoreet erat. Nunc commodo nulla eget
							condimentum congue. Nullam in felis ultrices, faucibus metus
							commodo, facilisis urna. Interdum et malesuada fames ac ante ipsum
							primis in faucibus.
						</p>
						<button
							className='button p-[12px] border-2 w-full border-prime rounded-[16px] text-prime mb-[96px] mt-[24px]'
							onClick={() => navigate("/blog/boy-haircut")}>
							Kliknij aby przeczytać
						</button>
					</div>

					<div className='flex flex-col items-center space-y-3 mb-[96px]'>
						{[...Array(7)].map((_, index) => (
							<div
								key={index}
								className={`${
									index === 0 &&
									"w-5 h-5 border-[1px] border-gray-500 rounded-full flex items-center justify-center"
								}}`}>
								<div
									className={`rounded-full border-2 ${
										index === 0
											? "bg-orange-500 border-orange-500 w-3 h-3 m-auto"
											: "border-[#FFF8E7] w-5 h-5"
									}`}
								/>
							</div>
						))}
					</div>
				</div>
				<img
					src={Gradient}
					alt='Gradient'
					className='absolute top-0 right-0 w-1/1 h-auto pointer-events-none z-10'
					style={{ top: -700, right: -650 }}
				/>
				{/* <img
					src={Photo1}
					alt='Background'
					className='absolute bottom-0 right-0 w-[40%] h-auto pointer-events-none z-10'
					style={{ bottom: -60 }}
				/> */}
				<div
					className='absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10'
					style={{
						background:
							"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
					}}></div>
			</div>
			<style>{`
				@media (min-width: 1800px) {
					.title {
						font-size: 48px;
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

export default Blog;
