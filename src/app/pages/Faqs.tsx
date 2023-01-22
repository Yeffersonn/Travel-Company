const Faqs = () => {
	return (
		<div className="w-full h-full lg:px-8" id="faqs">
			<div className="w-full h-full px-6 flex flex-col space-y-4">
				<p className="text-3xl font-semibold text-principal lg:text-5xl lg:pb-4 dark:text-white">
					FAQS
				</p>
				<div>
					<p className="text-xl font-medium text-principal dark:text-white">
						Política de Cancelación
					</p>
					<p className="text-md pt-2 dark:text-white">
						Para estancias menores a una semana es importante avisar
						con 3 días de anticipación, de caso contario será
						sancionado.
					</p>
				</div>
				<div>
					<p className="text-xl font-medium text-principal dark:text-white">
						Métodos de pago
					</p>
					<p className="text-md pt-2 dark:text-white">
						Aceptamos distintos métodos de pago: VISA, MasterCard,
						American Express, Paypal y Binance{" "}
					</p>
				</div>
				<div>
					<p className="text-xl font-medium text-principal dark:text-white">
						Mascotas
					</p>
					<p className="text-md pt-2 dark:text-white">
						El tema de las mascotas dependerá directamente del
						anfitrión.
					</p>
				</div>
				<div>
					<p className="text-xl font-medium text-principal dark:text-white">
						Información de Seguridad
					</p>
					<p className="text-md pt-2 dark:text-white">
						Todas nuestras estancias cuentan con seguro en caso de
						accidentes
					</p>
				</div>
				<div>
					<p className="text-xl font-medium text-principal dark:text-white">
						Estancias Largas
					</p>
					<p className="text-md pt-2 dark:text-white">
						Contamos con estancias de hasta 3 meses, en este caso es
						requerido un anticipo con un monto del 50% del valor de
						la renta
					</p>
				</div>
			</div>
		</div>
	);
};

export { Faqs };
