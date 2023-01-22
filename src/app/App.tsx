import { Fragment } from "react";
import { NavBar } from "./components/global/NavBar";
import { Home } from "./pages/Home";
import { Recomendados } from "./pages/Recomendados";
import { Destacados } from "./pages/Destacados";
import { Footer } from "./pages/Footer";
import { TavBar } from "./components/global/TavBar";
// import { Faqs } from "./pages/Faqs";

function App() {
	return (
		<Fragment>
			<section className="w-full h-screen">
				<NavBar />
				<Home />
				<div className="w-full h-auto lg:px-2 ">
					<Recomendados />
					<Destacados />
					{/* <Faqs/> */}
					<Footer />
				</div>
			</section>
			<TavBar />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</Fragment>
	);
}

export default App;
