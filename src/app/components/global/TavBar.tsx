const TavBar = () => {
	return (
		<div className="w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center dark:bg-gray-800 lg:hidden">
			<a href="#home">
				<i className="bi bi-house-door-fill dark:text-white md:text-2xl"></i>
			</a>
			<a href="#rentas_destacadas">
				<i className="bi bi-bookmark-heart-fill dark:text-white md:text-2xl"></i>
			</a>
			<a href="#recomendados">
				<i className="bi bi-search dark:text-white md:text-2xl"></i>
			</a>
			<button id="toggle-sm">
				<i className="bi bi-moon-fill fill-current text-black-200 dark:text-white"></i>
			</button>
			<a href="#">
				<i className="bi bi-person-fill dark:text-white md:text-2xl"></i>
			</a>
		</div>
	);
};

export { TavBar };
