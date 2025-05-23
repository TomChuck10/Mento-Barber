import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import BlogBoyHaircut from "./pages/BlogBoyHaircut";
import BlogSlickBack from "./pages/BlogSlickBack";
import BlogNewHaircuts from "./pages/BlogNewHaircuts";
import BlogBangs from "./pages/BlogBangs";
import BlogSkinFade from "./pages/BlogSkinFade";
import BlogBeardDandruff from "./pages/BlogBeardDandruff";
import BlogBarberPole from "./pages/BlogBarberPole";
import BlogBuzzCut from "./pages/BlogBuzzCut";
import BlogRecedingHairlineHairstyle from "./pages/BlogRecedingHairlineHairstyle";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/training' element={<Training />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/boy-haircut' element={<BlogBoyHaircut />} />
				<Route path='/blog/slick-back' element={<BlogSlickBack />} />
				<Route path='/blog/new-haircuts' element={<BlogNewHaircuts />} />
				<Route path='/blog/bangs' element={<BlogBangs />} />
				<Route path='/blog/skin-fade' element={<BlogSkinFade />} />
				<Route path='/blog/beard-dandruff' element={<BlogBeardDandruff />} />
				<Route path='/blog/barber-pole' element={<BlogBarberPole />} />
				<Route path='/blog/buzz-cut' element={<BlogBuzzCut />} />
				<Route
					path='/blog/receding-hairline-hairstyle'
					element={<BlogRecedingHairlineHairstyle />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
