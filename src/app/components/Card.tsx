export interface card {
	img: string;
	title: string;
	description: string;
}

const Card = ({ img, title, description }: card) => {
	let imgRoute = `w-72 h-3/5 rounded-t-lg bg-${img} bg-cover`;

	return (
		<div className="Card w-full h-full ">
			<div
				id="image-container"
				className={imgRoute}
			>
				<img className="h-full w-full object-cover" src={`./../../img/${img}.jpg`} alt={title} />
			</div>
			<div className=" h-2/5 rounded-b-lg dark:bg-gray-800 ">
				<p className="text-xl px-4 py-2 font-semibold text-tertiary dark:text-white">
					{title}
				</p>
				<p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary dark:text-white">
					{description}
				</p>
			</div>
		</div>
	);
};

export { Card };
