import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import BlogBoyHaircut from "./pages/BlogBoyHaircut";
import BlogSlickBack from "./pages/BlogSlickBack";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/training' element={<Training />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/boy-haircut' element={<BlogBoyHaircut />} />
				<Route path='/blog/slick-back' element={<BlogSlickBack />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
