/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

interface Sector {
	name: string;
	estribo: boolean;
}

interface Muro {
	id_wall: string;
	sectors: Sector[];
}

export const createSector = async (
	sectorGived: {
		idSector: number;
		name: string;
		estribo: string;
		nombreMuro: string;
		idWall: string;
	}[]
) => {
	const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
	const url = apiUrl + 'cse/sector_configuration/create';

	const auxContent: any = [];
	try {
		const auxObject: Muro[] = sectorGived.reduce((result: Muro[], obj) => {
			const found = result.find((item) => item.id_wall === obj.idWall);
			if (found) {
				found.sectors.push({
					name: obj.name,
					estribo: obj.estribo === 'si' ? true : false,
				});
			} else {
				result.push({
					id_wall: obj.idWall,
					sectors: [
						{ name: obj.name, estribo: obj.estribo === 'si' ? true : false },
					],
				});
			}
			return result;
		}, []);

		for (let i = 0; i < auxObject.length; i++) {
			const { data } = await axios.post(url, auxObject[i]);
			const j = sectorGived
				.map((datos) => datos.idWall)
				.indexOf(auxObject[i].id_wall);
			data.nameWall = sectorGived[j].nombreMuro;
			data.idWall = auxObject[i].id_wall;
			auxContent.push(data);
		}
		alert('Los sectores se han registrado');
		return auxContent;
	} catch (error) {
		alert('No se han registrado los sectores');
		return error;
	}
};
