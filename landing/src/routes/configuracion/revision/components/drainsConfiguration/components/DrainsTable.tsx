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
	disabled: boolean;
}

export default function DrainsTable({
	data,
	sectors,
	disabled,
}: Configurations) {
	const wallsSector = sectors
	console.log(sectors)
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
							<FormControl variant="standard" sx={{ m: 1, width: 100 }}>
								<Input
									defaultValue={datos.drainName}
									value={datos.drainName}
									inputProps={ariaLabel}
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
											disabled={
												handleDisabled(index2, datos.drainName) || disabled
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
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
