/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export const getAppList = async (cse: string) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const urlSeeder = apiUrl + 'cse/m1_configuration/create';
	const url = apiUrl + 'cse/m1_configuration/read?id_cse=' + cse;
	try {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const seeder = await axios.post(urlSeeder, { id_cse: cse });

		const { data } = await axios(url);
		alert('Lista de aplicabilidad obtenida exitosamente');
		return data;
	} catch (error) {
		alert('error al obtener lista de aplicabilidad');
		return error;
	}
};

export const updateAppList = async (cse: string, appList: any) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'cse/m1_configuration/update';

	function createCommentsObject(obj: any): any {
		const comments: any = {};
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				for (const subKey in obj[key]) {
					const items = obj[key][subKey].filter(
						(item: any) => item.have_comment === true
					);
					for (const item of items) {
						comments[item.internal_id] = item.comment;
					}
				}
			}
		}
		return comments;
	}

	const filteredObject = createCommentsObject(appList);

	const auxObject = { id_cse: cse, comments: filteredObject };

	try {
		const { data } = await axios.patch(url, auxObject);
		alert('Lista de aplicabilidad enviada correctamente');
		return data;
	} catch (error) {
		alert('error al enviar la lista de aplicabilidad');
		return error;
	}
};
