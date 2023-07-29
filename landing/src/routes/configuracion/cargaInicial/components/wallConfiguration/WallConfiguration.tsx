import styles from './WallConfiguration.module.css';

import useModal from './useModal';
import Popup from './Popup';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';

import basket from './media/basket.svg';
import { useState } from 'react';

const ariaLabel = { 'aria-label': 'description' };

interface DataWalls {
	data: {
		idMuro: number;
		name: string;
		materialidad: string;
	}[];
	deleteWall: (e: number) => void;
	setWallConfig: (
		a: { idMuro: number; name: string; materialidad: string }[]
	) => void;
	disabled: boolean;
}

export default function WallConfiguration({
	data,
	deleteWall,
	setWallConfig,
	disabled,
}: DataWalls) {
	const { handleOpenModal, openModal } = useModal();
	const [wall, setWall] = useState(0);

	const handleDelete = () => {
		deleteWall(wall);
	};

	const handleMaterialidad = (value: string, index: number) => {
		const aux = [...data];
		aux[index].materialidad = value;
		setWallConfig(aux);
	};

	const handleName = (value: string, index: number) => {
		const aux = [...data];
		aux[index].name = value;
		setWallConfig(aux);
	};

	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.masterRow}>
					<th className={styles.headerCell}>ID del Muro</th>
					<th className={styles.headerCell}>Materialidad</th>
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
									defaultValue={datos.materialidad}
									value={datos.materialidad}
									onChange={(e) => handleMaterialidad(e.target.value, index)}
									label="Seleccionar"
									disabled={disabled}
								>
									<MenuItem disabled value="">
										Seleccione una opción
									</MenuItem>
									<MenuItem value='Arena cicloneada'>
										Arena cicloneada
									</MenuItem>
									<MenuItem value='Empréstito'>Empréstito</MenuItem>
								</Select>
							</FormControl>
						</td>
						<td
							className={styles.action}
							onClick={() => {
								if (!disabled) {
									handleOpenModal();
									setWall(datos.idMuro);
								}
							}}
						>
							<img src={basket} />
						</td>
					</tr>
				))}
			</tbody>
			{openModal && (
				<Popup
					handleClose={handleOpenModal}
					open={openModal}
					action={handleDelete}
				/>
			)}
		</table>
	);
}
