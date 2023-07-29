/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './DrainsTable.module.css';

import basket from './media/basket.svg';
import { Checkbox, FormControl, Input } from '@mui/material';
import { useState } from 'react';

const ariaLabel = { 'aria-label': 'description' };

interface Configurations {
	data: {
		idDrain: number;
		drainName: string;
	}[];
	sectors: {
		nameWall: string;
		idWall: string;
		idSector: string;
		nameSector: string;
		drains?: string[];
	}[];
	deleteDrain: (
		e: number,
		idDrain: number,
		providedData: {
			nameWall: string;
			idWall: string;
			nameSector: string;
			idSector: string;
			drains?: string[];
		}[]
	) => void;
	handleTable: (
		e: {
			nameWall: string;
			idWall: string;
			nameSector: string;
			idSector: string;
		}[]
	) => void;
	handleName: (value: string, index: number) => void;
	disabled: boolean;
}

export default function DrainsTable({
	data,
	sectors,
	deleteDrain,
	handleTable,
	handleName,
	disabled,
}: Configurations) {
	const [wallsSector, setWallsSector] = useState(sectors);

	const addProfile = (index: number, drain: string) => {
		const aux = [...wallsSector];
		if (
			typeof aux[index].drains === 'undefined' ||
			!Array.isArray(aux[index].drains)
		) {
			aux[index].drains = [drain];
		} else {
			aux[index].drains?.push(drain);
		}
		handleTable(aux);
	};

	const eraseProfile = (index: number, drain: string) => {
		const aux = [...wallsSector];
		const elementIndex = aux[index].drains?.findIndex(
			(datos: string) => datos === drain
		);
		if (elementIndex !== undefined && elementIndex !== -1) {
			aux[index].drains?.splice(elementIndex, 1);
		}
		handleTable(aux);
		setWallsSector(aux);
	};

	const handleChecked = (index: number, drain: string) => {
		const aux = [...wallsSector];
		if (
			typeof aux[index].drains === 'undefined' ||
			!Array.isArray(aux[index].drains)
		) {
			return false;
		} else {
			const value = aux[index].drains?.includes(drain);
			return value;
		}
	};

	const handleDelete = (index: number, idDrain: number) => {
		const aux = [...wallsSector];
		deleteDrain(index, idDrain, aux);
	};

	const handleDisabled = (index: number, idDrain: string) => {
		const aux = [...wallsSector];
		if (aux[index].drains?.length === 1) {
			if (handleChecked(index, idDrain)) {
				return false;
			} else {
				return true;
			}
		}
	};

	return (
		<div className={styles.container}>
			<table className={styles.leftTable}>
				<thead>
					<tr>
						<th>ID Sistema de Drenaje</th>
					</tr>
				</thead>
				<tbody>
					{data.map((datos, index: number) => (
						<tr key={index}>
							<FormControl variant="standard" sx={{ m: 1, width: 120 }}>
								<Input
									defaultValue={datos.drainName}
									value={datos.drainName}
									inputProps={ariaLabel}
									placeholder={"Nombre drenaje"}
									onChange={(e) => handleName(e.target.value, index)}
									disabled={disabled}
								/>
							</FormControl>
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.middleContainer}>
				<table className={styles.middleTable}>
					<thead>
						<tr>
							{sectors.map((datos, index: number) => (
								<th key={index} className={styles.middleHeader}>
									{datos.nameWall}
									<br />
									{datos.nameSector}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((datos, index: number) => (
							<tr key={index}>
								{sectors.map((_datos2, index2: number) => (
									<td key={index2} className={styles.middleCell}>
										<Checkbox
											onChange={() => {
												handleChecked(index2, datos.drainName)
													? eraseProfile(index2, datos.drainName)
													: addProfile(index2, datos.drainName);
											}}
											disabled={
												handleDisabled(index2, datos.drainName) || disabled || datos.drainName === ""
											}
											checked={handleChecked(index2, datos.drainName)}
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
						<th className={styles.endTableHeader}>Acción</th>
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
										if (!disabled) {
											handleDelete(index, datos.idDrain);
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
