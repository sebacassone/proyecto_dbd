/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import { useState } from 'react';
import DrainsTable from './components/DrainsTable';

import * as step5 from './useApi';

import styles from './DrainsConfiguration.module.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Profiles {
	data: {
		idDrain: number;
		drainName: string;
	}[];
	sectors: {
		detail: string;
		sectors: { id: string; name: string }[];
		idWall: string;
		nameWall: string;
	}[];
	setData: (
		e: {
			idDrain: number;
			drainName: string;
		}[]
	) => void;
	deleteDrain: (e: number) => void;
	addDrain: () => void;
	handleContinue: () => void;
	confirmDrains: object;
	setConfirmDrains: (a: any) => void;
	setSaveDrains: (a: any) => void;
	savedDrains: {
		nameWall: string;
		idWall: string;
		idSector: string;
		nameSector: string;
		drains: string[];
	}[];
	setLoadingStepper: (e: boolean) => void;
}
export default function DrainsConfiguration({
	data,
	handleContinue,
	sectors,
	addDrain,
	deleteDrain,
	setData,
	confirmDrains,
	setConfirmDrains,
	savedDrains,
	setSaveDrains,
	setLoadingStepper,
}: Profiles) {

	const [submited, setSubmit] = useState('detail' in confirmDrains);
	const [loading, setLoading] = useState(false);

	let auxSectors = [];

	if (savedDrains.length > 0) {
		auxSectors = [...savedDrains];
	} else {
		for (let i = 0; i < sectors.length; i++) {
			for (let j = 0; j < sectors[i].sectors.length; j++) {
				auxSectors.push({
					nameWall: sectors[i].nameWall,
					idWall: sectors[i].idWall,
					idSector: sectors[i].sectors[j].id,
					nameSector: sectors[i].sectors[j].name,
				});
			}
		}
	}

	const [drainsConfig, setDrains] = useState(auxSectors);

	const handleTable = (
		providedData: {
			nameWall: string;
			idWall: string;
			nameSector: string;
			idSector: string;
			drains?: string[];
		}[]
	) => {
		setDrains(providedData);
	};

	const handleDelete = (
		index: number,
		idDrain: number,
		providedData: {
			nameWall: string;
			idWall: string;
			nameSector: string;
			idSector: string;
			drains?: string[];
		}[]
	) => {
		const aux = [...providedData];
		for (let i = 0; i < aux.length; i++) {
			const elementIndex = aux[i].drains?.findIndex(
				(datos: string) => datos === data[index].drainName
			);
			if (elementIndex !== undefined && elementIndex !== -1) {
				aux[i].drains?.splice(elementIndex, 1);
			}
		}
		handleTable(aux);
		deleteDrain(idDrain);
	};

	function checkDuplicateDrains(
		arr: {
			idDrain: number;
			drainName: string;
		}[]
	) {
		const names: string[] = [];
		for (let i = 0; i < arr.length; i++) {
			const name = arr[i].drainName;
			if (names.includes(name)) {
				return true;
			}
			names.push(name);
		}
		return false;
	}

	function checkDrainsExistence(arr: any[]): boolean {
		return arr.every((element) => {
			return (
				'drains' in element &&
				Array.isArray(element.drains) &&
				element.drains.length > 0
			);
		});
	}

	const submitDrains = async () => {
		if (checkDuplicateDrains(data)) {
			alert(
				'Los drenajes deben tener un ID unico (cambie el ID de los drenajes con el mismo ID o elimine los vacíos)'
			);
			return;
		}
		if (!checkDrainsExistence(drainsConfig)) {
			alert('Los sectores deben tener un drenaje asignado');
			return;
		}
		setLoading(true);
		setLoadingStepper(true);
		try {
			
			const res = await step5.createProfiles(drainsConfig);
			setLoading(false);
			setLoadingStepper(false);
			setSubmit(true);
			setSaveDrains(drainsConfig);
			setConfirmDrains(res);
			
		} catch(error) {
			setSubmit(false);
			setLoading(false);
			setLoadingStepper(false);
			return;
		}
		handleContinue();
	};

	function removeItemByName(arr: any[], name: string): any[] {
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i];
			if (item.drains === undefined ){
				return arr;
			}
			const index = item.drains.indexOf(name);
			if (index !== -1) {
				item.drains.splice(index, 1);
				break;
			}
		}
		return arr;
	}

	const handleName = (value: string, index: number) => {
		const aux = [...data];
		const removed = removeItemByName(drainsConfig, aux[index].drainName);
		setDrains(removed);
		aux[index].drainName = value;
		setData(aux);
	};

	return (
		<div className={styles.generalContainer}>
			<div>
				<DrainsTable
					data={data}
					sectors={drainsConfig}
					deleteDrain={handleDelete}
					handleTable={handleTable}
					handleName={handleName}
					disabled={submited}
				/>
			</div>
			<div className={styles.buttons}>
				<Button
					variant="outlined"
					sx={{ fontWeight: 600 }}
					onClick={addDrain}
					startIcon={<AddCircleIcon />}
					disabled={loading || submited}
				>
					Agregar drenaje
				</Button>

				<Button
					variant="contained"
					onClick={submitDrains}
					sx={{ fontWeight: 600 }}
					disabled={loading || submited}
				>
					<div className={styles.buttonText}>GUARDAR Y CONTINUAR</div>
				</Button>
			</div>
		</div>
	);
}
