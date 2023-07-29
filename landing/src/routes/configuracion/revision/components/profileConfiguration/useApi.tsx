/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export const createProfiles = async (
	profiles: {
		detail: string;
		sectors: { id: string; name: string; profiles?: string[] }[];
		idWall: string;
		nameWall: string;
	}[]
) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'cse/profile_configuration/create';

	try {
		const auxContent: any = [];
		console.log(profiles)
		for (let i = 0; i < profiles.length; i++) {
			const auxSectors = profiles[i].sectors;
			for (let j = 0; j < auxSectors.length; j++) {
				const auxProfiles = [];

				if (
					typeof auxSectors[j].profiles !== 'undefined' &&
					Array.isArray(auxSectors[j].profiles)
				) {
					const iterableAux = auxSectors[j].profiles;
					for (let k = 0; k < iterableAux!.length; k++) {
						auxProfiles.push({ topographic_profile: iterableAux![k] });
					}
				}
				const aux = {
					id_sector: auxSectors[j].id,
					profiles: auxProfiles,
				};
				const { data } = await axios.post(url, aux);
				auxContent.push(data);
			}
		}
		alert('Los perfiles se han registrado');
		return auxContent;
	} catch (error) {
		alert('No se han registrado los perfiles');
		return error;
	}
};
