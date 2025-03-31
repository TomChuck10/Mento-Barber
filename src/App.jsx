import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import BlogBoyHaircut from "./pages/BlogBoyHaircut";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/training' element={<Training />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/boy-haircut' element={<BlogBoyHaircut />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
