/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './ProfileTable.module.css';

import basket from './media/basket.svg';
import { FormControl, Input, Radio } from '@mui/material';
import { useState } from 'react';

const ariaLabel = { 'aria-label': 'description' };
interface Configurations {
	data: {
		idProfile: number | string;
		profile: string;
	}[];
	sectors: {
		detail: string;
		sectors: { id: string; name: string; profiles?: string[] }[];
		idWall: string;
	};
	deleteProfile: (e: number) => void;
	handleName: (value: string, index: number) => void;
	disabled: boolean;
	arrayIndex: number;
	profileWraping: (e: string, f: number) => boolean;
}

export default function WallConfiguration({
	data,
	deleteProfile,
	sectors,
	handleName,
	disabled,
	arrayIndex,
	profileWraping,
}: Configurations) {
	const [sectorProfile, setProfile] = useState(sectors.sectors);

	const handleChecked = (index: number, profile: string) => {
		const aux = [...sectorProfile];
		if (
			typeof aux[index].profiles === 'undefined' ||
			!Array.isArray(aux[index].profiles)
		) {
			return false;
		} else {
			const value = aux[index].profiles?.includes(profile);
			return value;
		}
	};

	const handleChange = (index: number, profile: string) => {
		const aux = [...sectorProfile];
		const profileExists = aux.some(
			(obj: { id: string; name: string; profiles?: string[] | undefined }) =>
				obj.profiles?.includes(profile)
		);
		if (!profileExists) {
			if (
				typeof aux[index].profiles === 'undefined' ||
				!Array.isArray(aux[index].profiles)
			) {
				aux[index].profiles = [profile];
			} else {
				aux[index].profiles?.push(profile);
			}
			setProfile(aux);
		} else {
			const indexSector = aux.findIndex(
				(obj: { id: string; name: string; profiles?: string[] | undefined }) =>
					obj.profiles?.includes(profile)
			);
			if (indexSector !== -1) {
				const indexProfile = aux[indexSector].profiles?.findIndex(
					(obj: string) => obj === profile
				);
				if (typeof indexProfile === 'number') {
					aux[indexSector].profiles?.splice(indexProfile, 1);
					if (
						typeof aux[index].profiles === 'undefined' ||
						!Array.isArray(aux[index].profiles)
					) {
						aux[index].profiles = [profile];
					} else {
						aux[index].profiles?.push(profile);
					}
					setProfile(aux);
				}
			}
		}
	};

	function deleteProfileFromArray(sectorsArray: Configurations["sectors"]["sectors"], profileToDelete: string): Configurations["sectors"]["sectors"] {
		return sectorsArray.map((sector) => {
			if (!sector.profiles || sector.profiles.length === 0) {
				return sector;
			}
			const updatedProfiles = sector.profiles.filter((profile) => profile !== profileToDelete);
	
			return { ...sector, profiles: updatedProfiles };
		});
	}

	const deleteProfileWrapping = (e: number) => {
		const aux = deleteProfileFromArray(sectorProfile, data[e].profile);
		setProfile(aux);
		deleteProfile(e);
	}

	return (
		<div className={styles.container}>
			<table className={styles.leftTable}>
				<thead>
					<tr>
						<th>ID del Perfil</th>
					</tr>
				</thead>
				<tbody>
					{data.map((a, index: number) => (
						<tr key={index}>
							<td>
								<FormControl variant="standard" sx={{ m: 1, width: 100 }}>
									<Input
										defaultValue={a.profile}
										value={a.profile}
										inputProps={ariaLabel}
										onChange={(e) => handleName(e.target.value, index)}
										disabled={disabled || profileWraping(a.profile, arrayIndex)}
									/>
								</FormControl>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.middleContainer}>
				<table className={styles.middleTable}>
					<thead>
						<tr>
							{sectors.sectors.map((datos, index: number) => (
								<th key={index} className={styles.middleHeader}>
									{datos.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((datos, index: number) => (
							<tr key={index}>
								{sectors.sectors.map((_datos2, index2: number) => (
									<td key={index2} className={styles.middleCell}>
										<Radio
											checked={handleChecked(index2, datos.profile)}
											onChange={() => handleChange(index2, datos.profile)}
											value="a"
											name="radio-buttons"
											inputProps={{ 'aria-label': 'A' }}
											disabled={
												disabled || profileWraping(datos.profile, arrayIndex)
											}
										/>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<table className={styles.endTable}>
				<thead>
					<tr>
						<th>Acción</th>
					</tr>
				</thead>
				<tbody>
					{data.map((datos, index: number) => (
						<tr key={index}>
							<td>
								<img
									className={styles.action}
									src={basket}
									onClick={() => {
										if (profileWraping(datos.profile, arrayIndex)){
											alert("Este perfil pertenece a otra muralla, eliminelo de la muralla correspondiente");
											return;
										}
										if (!disabled) {
											deleteProfileWrapping(index);
										}
									}}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
