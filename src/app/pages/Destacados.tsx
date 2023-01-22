
const Destacados = () => {
	return (
		<div className="px-6 h-full" id="rentas_destacadas">
			<p className="text-3xl font-semibold text-principal pb-6 dark:text-white">
				Estancias destacadas
			</p>
			<div className="w-full h-full flex flex-col items-center justify-center lg:flex-col">
				<div className="w-full h-96 bg-chicago bg-cover rounded-2xl mb-8 lg:flex-none lg:bg-center ">
					<p className="CardTitle lg:text-black">Chicago</p>
					<p className="text-md pl-8 text-white mr-24 lg:text-black">
						2 habitaciones, baño y cocina
					</p>
				</div>
				<div className="lg:flex lg:w-full lg:h-1/3 lg:flex-none md:w-full sm:w-full">
					<div className="w-full h-96 bg-LA bg-cover rounded-2xl mb-8 lg:w-3/5 lg:h-auto">
						<p className="CardTitle">Los Angeles</p>
						<p className="text-md pl-8 text-white mr-24">
							4 habitaciones, 3 baños, cocina y piscina privada
						</p>
					</div>
					<div className="lg:flex lg:flex-col lg:w-full lg:pl-8">
						<div className="w-full h-96 bg-miami bg-cover rounded-2xl mb-8">
							<p className="CardTitle">Miami</p>
							<p className="text-md pl-8 text-white mr-24 ">
								3 habitaciones, 2 baños, cocina y excelente
								vista al mar
							</p>
						</div>
						<div className="w-full h-96 bg-bali bg-cover rounded-2xl mb-8">
							<p className="CardTitle ">Bali</p>
							<p className="text-md pl-8 text-white mr-24 ">
								2 habitaciones, baño, cocina y piscina privada
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Destacados };
