const Footer = () => {
	return (
		<footer
			className="w-full bg-gray-50 p-6 space-y-2 lg:px-14 text-center flex  justify-center items-baseline space-x-2 dark:bg-gray-900 xs:hidden lg:flex"
			id="nosotros"
		>
			<p className="text-xl font-bold dark:text-white">Developed by Jefferson Munguia</p>
			<a href="https://github.com/Yeffersonn/Travel-Company" target='_blank'      className="text-2xl bi bi-github dark:text-white" rel="noopener" ></a>
			{/* <a href="#" className="text-2xl bi bi-linkedin dark:text-white"></a> */}
		</footer>
	);
};

export { Footer };
