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
	deleteSector: (e: number) => void;
	walls: { id: string; name: string }[];
	setSectorConfig: (
		a: {
			idSector: number;
			name: string;
			estribo: string;
			nombreMuro: string;
			idWall: string;
		}[]
	) => void;
	disabled: boolean;
}

export default function SectionConfiguration({
	data,
	deleteSector,
	walls,
	setSectorConfig,
	disabled,
}: DataWalls) {

	const handleNameWall = (value: string, index: number) => {
		const aux = [...data];
		const auxIndex = walls.map((datos) => datos.id).indexOf(value);
		aux[index].idWall = value;
		aux[index].nombreMuro = walls[auxIndex].name;
		setSectorConfig(aux);
	};

	const handleEstribo = (value: string, index: number) => {
		const aux = [...data];
		aux[index].estribo = value;
		setSectorConfig(aux);
	};

	const handleName = (value: string, index: number) => {
		const aux = [...data];
		aux[index].name = value;
		setSectorConfig(aux);
	};

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
									onChange={(e) => handleName(e.target.value, index)}
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
									Seleccionar
								</InputLabel>
								<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									onChange={(e) => handleEstribo(e.target.value, index)}
									defaultValue={datos.estribo}
									value={datos.estribo}
									label="Seleccionar"
									disabled={disabled}
								>
									<MenuItem disabled value="">
										Seleccione una opción
									</MenuItem>
									<MenuItem value={'si'}>Sí</MenuItem>
									<MenuItem value={'no'}>No</MenuItem>
								</Select>
							</FormControl>
						</td>
						<td className={styles.dataCell}>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 130, width: '100%' }}
							>
								<InputLabel id="demo-simple-select-standard-label">
									Seleccionar
								</InputLabel>
								<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={datos.idWall}
									onChange={(e) => {
										handleNameWall(e.target.value, index);
									}}
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
							onClick={() => {
								if (!disabled) {
									deleteSector(datos.idSector);
								}
							}}
						>
							<img src={basket} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
