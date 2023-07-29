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
		id: number;
		name: string;
		type: string;
	}[];
	disabled: boolean;
}

export default function WallConfiguration({
	data,
	disabled,
}: DataWalls) {
	console.log(data)
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.masterRow}>
					<th className={styles.headerCell}>ID del Muro</th>
					<th className={styles.headerCell}>Materialidad</th>
					<th>&nbsp;</th>
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
								sx={{ m: 1, minWidth: 130, width: '100%' }}
							>
								<InputLabel id="demo-simple-select-standard-label">
									
								</InputLabel>
								<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={1}

									disabled={disabled}
								>
									<MenuItem disabled value={1}>
									{datos.type}
									</MenuItem>
								</Select>
							</FormControl>
						</td>

					</tr>
				))}
			</tbody>
		</table>
	);
}
