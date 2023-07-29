/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

interface MonthlyInterface {
	'EM-01': string;
	'EM-02': string;
	'EM-03': string;
	'EM-04': string;
	'EM-05': string;
	'EM-06': string;
	'EM-07': string;
	'EM-08': string;
	'EM-09': string;
}
export const postMonthly = async (
	idCse: string,
	providedData: MonthlyInterface
) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'monthly_evaluation/submit';

	try {
		const aux = {
			id_cse: idCse,
			monthly_evaluation_submited: providedData,
		};

		const { data } = await axios.post(url, aux);
		return data;
	} catch (error) {
		alert('Se ha producido un error al envíar los parametros');
		return error;
	}
};

export const getResults = async (
	idEvaluation: string,
) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'monthly_evaluation/read?id_monthly_evaluation=' + idEvaluation;
	try {
		const { data } = await axios(url);
		return data;
	} catch (error) {
		alert('Se ha producido un error al envíar los parametros');
		return error;
	}
};
