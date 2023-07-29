/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './GeneralTable.module.css';
import { Theme, useTheme } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { useState } from 'react';

const coorSystem = ['PSAD 56/UTM', 'WGS84/UTM'];
const huso = ['Zona 18S', 'Zona 19S'];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 200,
		},
	},
};

interface ConfigInterface {
	setConfig: (a: { spindle: string; sys_coord: string }) => void;
	config: { spindle: string; sys_coord: string };
	disabled: boolean;
}

export default function ResumeTable({
	setConfig,
	config,
	disabled,
}: ConfigInterface) {
	const theme = useTheme();

	const [currentCoor, setCoor] = useState(config.sys_coord);
	const [currentHuso, setHuso] = useState(config.spindle);

	const handleChangeCoor = (value: string) => {
		setCoor(value);
		setConfig({ spindle: currentHuso, sys_coord: value });
	};

	const handleChangeHuso = (value: string) => {
		setHuso(value);
		setConfig({ spindle: value, sys_coord: currentCoor });
	};

	return (
		<table className={styles.table}>
			<tr className={styles.row}>
				<td>Sistema de Coordenadas:</td>
				<td className={styles.selectSpace}>
					<Select
						displayEmpty
						value={currentCoor}
						onChange={(e) => handleChangeCoor(e.target.value)}
						MenuProps={MenuProps}
						inputProps={{ 'aria-label': 'Without label' }}
						sx={{
							maxHeight: 'px',
							minWidth: '200px',
							boxShadow: 'none',
							'.MuiOutlinedInput-notchedOutline': { border: 0 },
						}}
						disabled={disabled}
					>
						<MenuItem disabled value="none">
							<div>Seleccionar</div>
						</MenuItem>
						{coorSystem.map((name) => (
							<MenuItem
								key={name}
								value={name}
								style={getStyles(name, [], theme)}
							>
								{name}
							</MenuItem>
						))}
					</Select>
				</td>
			</tr>
			<tr className={styles.row}>
				<td>Huso</td>
				<td>
					<Select
						displayEmpty
						value={currentHuso}
						onChange={(e) => handleChangeHuso(e.target.value)}
						MenuProps={MenuProps}
						inputProps={{ 'aria-label': 'Without label' }}
						sx={{
							maxHeight: 'px',
							minWidth: '200px',
							boxShadow: 'none',
							'.MuiOutlinedInput-notchedOutline': { border: 0 },
						}}
						disabled={disabled}
					>
						<MenuItem disabled value="none">
							<div>Seleccionar</div>
						</MenuItem>
						{huso.map((name) => (
							<MenuItem
								key={name}
								value={name}
								style={getStyles(name, [], theme)}
							>
								{name}
							</MenuItem>
						))}
					</Select>
				</td>
			</tr>

			<tr className={styles.row}>
				<td>Formato de Fechas:</td>
				<td>
					<input
						className={styles.inputs}
						placeholder="DD/MM/AAAA"
						disabled
					></input>
				</td>
			</tr>
			<tr className={styles.row}>
				<td>Formato de Horas:</td>
				<td>
					<input
						className={styles.inputs}
						placeholder="HH:MM:SS"
						disabled
					></input>
				</td>
			</tr>
			<tr className={styles.row}>
				<td>Formato Decimal:</td>
				<td>
					<input
						className={styles.inputs}
						placeholder="Comas (,)"
						disabled
					></input>
				</td>
			</tr>
			<tr className={styles.row}>
				<td>Formato de Miles:</td>
				<td>
					<input
						className={styles.inputs}
						placeholder="Puntos (.)"
						disabled
					></input>
				</td>
			</tr>
		</table>
	);
}
