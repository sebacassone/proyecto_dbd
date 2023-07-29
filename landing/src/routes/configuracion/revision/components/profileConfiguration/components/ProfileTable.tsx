/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './ProfileTable.module.css';

import basket from './media/basket.svg';
import { FormControl, Input, Radio } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };
interface Configurations {
	data: {
		id: string;
		topographic_profile: string;
	}[];
	sectors: {
		detail: string;
		sectors: { id: string; name: string; profiles?: string[] }[];
		idWall: string;
	};
}

export default function WallConfiguration({
	data,
	sectors,
}: Configurations) {

	const handleChecked = (index: number, profile: string) => {
		const aux = [...sectors.sectors];
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
										defaultValue={a.topographic_profile}
										value={a.topographic_profile}
										inputProps={ariaLabel}

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
											checked={handleChecked(index2, datos.topographic_profile)}
											value="a"
											name="radio-buttons"
											inputProps={{ 'aria-label': 'A' }}
											
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
					{data.map((_datos, index: number) => (
						<tr key={index}>
							<td>
								<img
									className={styles.action}
									src={basket}
									
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
