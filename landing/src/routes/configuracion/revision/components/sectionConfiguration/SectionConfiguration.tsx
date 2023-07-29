import styles from './SectionConfiguration.module.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import basket from './media/basket.svg';
import { Input } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };
interface DataWalls {
	data: {
		idSector: number;
		name: string;
		estribo: string;
		nombreMuro: string;
		idWall: string;
	}[];
	walls: { id: string; name: string }[];
	disabled: boolean;
}

export default function SectionConfiguration({
	data,
	walls,
	disabled,
}: DataWalls) {

	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.masterRow}>
					<th className={styles.headerCell}>ID del Sector</th>
					<th className={styles.headerCell}>Estribo</th>
					<th className={styles.headerCell}>ID del muro</th>
					<th>Acción</th>
				</tr>
			</thead>
			<tbody>
				{data.map((datos, index: number) => (
					<tr className={styles.row} key={index}>
						<td className={styles.dataCell}>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 130, width: '100%', marginTop: '24px' }}
							>
								<Input
									defaultValue={datos.name}
									value={datos.name}
									inputProps={ariaLabel}
									disabled={disabled}
								/>
							</FormControl>
						</td>
						<td className={styles.dataCell}>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 130, width: '100%', marginTop: '24px' }}
							>
								<Input
									defaultValue={datos.estribo ? "Si" : "No"}
									value={datos.estribo ? "Si" : "No"}
									inputProps={ariaLabel}
									disabled={disabled}
								/>
								
							</FormControl>
						</td>
						<td className={styles.dataCell}>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 130, width: '100%' }}
							>
								<InputLabel id="demo-simple-select-standard-label">
									
								</InputLabel>
								<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={datos.idWall}

									label="Seleccionar"
									disabled={disabled}
								>
									<MenuItem disabled value="">
										Seleccione una opción
									</MenuItem>
									{walls.map((data2, index2: number) => (
										<MenuItem value={data2.id} key={index2}>
											{data2.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</td>
						<td
							className={styles.action}
							
						>
							<img src={basket} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
