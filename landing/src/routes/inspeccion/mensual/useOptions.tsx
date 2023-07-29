const radioOptions = [
	{
		title: 'Estado del depósito',
		options: [
			{
				label: 'Abandonado',
				value: 'Abandonado',
			},
			{
				label: 'Inactivo',
				value: 'Inactivo',
			},
			{
				label: 'Activo',
				value: 'Activo',
			},
		],
	},
	{
		title: 'Tipo de relave',
		options: [
			{
				label: 'Convencional',
				value: 'Convencional',
			},
			{
				label: 'Espesado',
				value: 'Espesado',
			},
			{
				label: 'En pasta',
				value: 'Pasta',
			},
			{
				label: 'Filtrado',
				value: 'Filtrado',
			},
		],
	},
	{
		title: 'Método constructivo del muro del depósito',
		options: [
			{
				label: 'Aguas arriba',
				value: 'Aguas arriba',
			},
			{
				label: 'Eje central',
				value: 'Eje central',
			},
			{
				label: 'Aguas abajo',
				value: 'Aguas abajo',
			},
		],
	},
	{
		title: 'Modelo de sistema de gobernanza',
		options: [
			{
				label: 'Claramente definido',
				value: 'Sistema de gobernanza claramente definido',
			},
			{
				label: 'Parcialmente definido',
				value: 'Sistema de gobernanza parcialmente definido',
			},
			{
				label: 'Sin sistema',
				value: 'No cuenta con sistema de gobernanza',
			},
		],
	},
	{
		title: 'Instrumentación operativa',
		options: [
			{
				label: 'Si',
				value: 'Si',
			},
			{
				label: 'No',
				value: 'No',
			},
		],
	},
	{
		title: 'Exposición a crecidas de ríos y/o aluviones',
		options: [
			{
				label: 'Si',
				value: 'Si',
			},
			{
				label: 'No',
				value: 'No',
			},
		],
	},
	{
		title: 'Exposición a acumulaciones de escorrentías',
		options: [
			{
				label: 'Si',
				value: 'Si',
			},
			{
				label: 'No',
				value: 'No',
			},
		],
	},
	{
		title: 'Exposición a remoción en masas del terreno natural',
		options: [
			{
				label: 'Si',
				value: 'Si',
			},
			{
				label: 'No',
				value: 'No',
			},
		],
	},
	{
		title:
			'Diseño actualizado (si ha estado sujeto a modificaciones durante la construcción)',
		options: [
			{
				label: 'Si',
				value: 'Si',
			},
			{
				label: 'No',
				value: 'No',
			},
		],
	},
];

export default function useOptions() {
	return radioOptions;
}
