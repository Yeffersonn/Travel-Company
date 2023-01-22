

const NavBar = () => {


	return (
		<nav className="hidden lg:flex w-full h-14 bg-white justify-between p-4 dark:bg-gray-800 fixed top-0 z-10">
			<div className="w-auto h-auto">
				<p className="font-black text-principal text-lg dark:text-white">
					Travel Company
				</p>
			</div>
			<div className=" flex flex-row space-x-10">
				<a
					href="#home"
					className="font-bold text-principal dark:text-white"
				>
					Inicio
				</a>
				<a
					href="#recomendados"
					className="font-bold text-principal dark:text-white"
				>
					Recomendados
				</a>
				<a
					href="#rentas_destacadas"
					className="font-bold text-principal dark:text-white"
				>
					Rentas
				</a>
				<a
					href="#nosotros"
					className="font-bold text-principal dark:text-white"
				>
					Contacto
				</a>
			</div>
			<div className="flex space-x-4">
				<svg
					width="22"
					height="22"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{" "}
					<path
						className="fill-current text-principal  dark:text-white"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
						fill="#3F3F46"
					/>{" "}
				</svg>
				<button id="toggle">
					<i className="bi bi-moon-fill fill-current text-black-200 dark:text-white"></i> 
				</button>
				<svg
					width="22"
					height="22"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="fill-current text-black-300 dark:text-white"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
						fill="#3F3F46"
					/>
				</svg>
			</div>
		</nav>
	);
};

export { NavBar };
