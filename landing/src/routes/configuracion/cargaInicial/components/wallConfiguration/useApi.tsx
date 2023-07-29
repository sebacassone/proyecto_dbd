/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export const createWall = async (
	id: string,
	wallsgived: { idMuro: number; name: string; materialidad: string }[]
) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'cse/wall_configuration/create';

	try {
		const auxArray = wallsgived.map((data) => {
			return { name: data.name, type: data.materialidad };
		});

		const auxPost = {
			id_cse: id,
			walls: auxArray,
		};

		const { data } = await axios.post(url, auxPost);
		alert('Murallas asignadas correctamente');
		return data;
	} catch (error) {
		alert('Error al asignar murallas');
		return error;
	}
};
