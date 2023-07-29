/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export const postGeneral = async (a: {
	spindle: string;
	sys_coord: string;
}) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'cse/general_configuration/create';
	try {
		const testData = {
			deposit_id: "420300015",
			serna_code: '158',
			company_name: 'AMSA',
			site_name: 'El Mauro',
			region: 'Coquimbo',
			province: 'Choapa',
			commune_ins: 'Los Vilos',
			name_ins: 'Los Pelambres',
			sys_coord: a.sys_coord,
			spindle: a.spindle,
			decimal_format: 1.0,
			miles_format: 1.0,
		};

		const { data } = await axios.post(url, testData);

		alert('información general creada correctamente');
		return data;
	} catch (error) {
		alert('error al Crear Información general');
		return error;
	}
};
