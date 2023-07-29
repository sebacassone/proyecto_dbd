/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

interface NewItem {
	drainage_system: string;
	ids_sectors: string[];
}

export const createProfiles = async (
	drains: {
		nameWall: string;
		idWall: string;
		nameSector: string;
		idSector: string;
		drains?: string[];
	}[]
) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'cse/drainage_configuration/create';

	try {
		const tempObj: Record<string, NewItem> = {};

		const drainages: NewItem[] = [];

		for (const item of drains) {
			for (const drain of item.drains!) {
				if (drain in tempObj) {
					tempObj[drain].ids_sectors.push(item.idSector);
				} else {
					tempObj[drain] = {
						drainage_system: drain,
						ids_sectors: [item.idSector],
					};
				}
			}
		}
		for (const key in tempObj) {
			drainages.push(tempObj[key]);
		}
		const aux = {
			drainages,
		};
		const { data } = await axios.post(url, aux);
		alert('Los drenajes se han registrado');
		return data;
	} catch (error) {
		alert('No se han registrado los drenajes');
		return error;
	}
};
