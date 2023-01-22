import { Card, card } from "../components/Card";

const Recomendados = () => {
	const recomended: card[] = [
		{
			img: "yosemite",
			title: "Yosemite",
			description: "Un respiro del mundo",
		},
		{
			img: "norway",
			title: "Norway",
			description: "Conoce nuevos lugares",
		},
		{
			img: "new_york",
			title: "New York",
			description: "Gran ciudad, explora ahora!",
		},
		{
			img: "seattle",
			title: "Seattle",
			description: "Una ciudad para disfrutar al máximo",
		},
		{
			img: "switzerland",
			title: "Switzerland",
			description: "El mejor chocolate caliente que probarás",
		},
		{
			img: "sydney",
			title: "Sydney",
			description: "Conoce la famosísima Opera",
		},
		// {
		// 	img: "europe",
		// 	title: "Edinburgh",
		// 	description: "Castillos y tiempos medievales",
		// },
	];

	return (
		<div className="p-6" id="recomendados">
			<p className="text-3xl font-semibold text-principal  dark:text-white">
				Recomendados
			</p>
			<div className="flex flex-nowrap w-100% h-80  items-center mt-6 overflow-x-auto
			2xl:overflow-x-hidden overflow-y-hidden space-x-4 lg:space-x-6">
				{recomended.map((city) => (
					<Card
						key={city.title}
						img={city.img}
						title={city.title}
						description={city.description}
					/>
				))}
			</div>
		</div>
	);
};

export { Recomendados };
