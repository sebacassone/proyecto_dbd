/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ProfileTable from './components/ProfileTable';

import styles from './ProfileConfiguration.module.css';

import * as step4 from './useApi';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import rigthArrow from './media/rigthArrow.svg';
import leftArrow from './media/leftArrow.svg';

interface Profiles {
	data: {
		idProfile: number | string;
		profile: string;
	}[];
	handleContinue: () => void;
	sectors: {
		detail: string;
		sectors: { id: string; name: string }[];
		idWall: string;
		nameWall: string;
	}[];
	deleteProfile: (e: number) => void;
	addProfile: () => void;
	setData: (
		e: any
	) => void;
	confirmProfiles: Array<any>;
	setConfirmProfiles: (a: any) => void;
	setLoadingStepper: (e: boolean) => void;
}

interface Sector {
	id: string;
	name: string;
	profiles?: string[]; 
}

interface Wall {
	detail: string;
	sectors: Sector[];
	nameWall: string;
	idWall: string;
}

export default function WallConfiguration({
	data,
	handleContinue,
	sectors,
	deleteProfile,
	addProfile,
	setData,
	setConfirmProfiles,
	confirmProfiles,
	setLoadingStepper,
}: Profiles) {

	const [active, setActive] = useState(0);
	const [submited, setSubmit] = useState(confirmProfiles.length > 0);
	const [loading, setLoading] = useState(false);

	function checkDuplicateProfiles(
		arr: {
			idProfile: number | string;
			profile: string;
		}[]
	) {
		const names: string[] = [];
		for (let i = 0; i < arr.length; i++) {
			const name = arr[i].profile;
			if (names.includes(name)) {
				return true;
			}
			names.push(name);
		}
		return false;
	}

	function hasNonEmptyProfiles(walls: Wall[]): boolean {
		for (const wall of walls) {
			if (wall.sectors.length === 0) {
				return false;
			}
			for (const sector of wall.sectors) {
				if (sector.profiles === undefined || sector.profiles.length === 0) {
					return false;
				}
			}
		}
		return true;
	}	

	function checkProfile(
		arreglo: Wall[],
		perfil: string,
		indice: number
	): boolean {
		for (let i = 0; i < arreglo.length; i++) {
			if (i !== indice) {
				const elemento = arreglo[i];
				const sectores = elemento.sectors || [];
				for (const sector of sectores) {
					const perfiles = sector.profiles || [];
					if (perfiles.includes(perfil)) {
						return true;
					}
				}
			}
		}
		return false;
	}

	const profileWraping = (perfil: string, index: number) => {
		return checkProfile(sectors, perfil, index);
	};

	function removeInvalidProfiles(walls: Wall[], profiles: Profiles["data"]): Wall[] {
		const validProfiles = profiles.map((profile) => profile.profile);
			const filteredWalls = walls.map((wall) => {
				const filteredSectors = wall.sectors.map((sector) => {
				const filteredProfiles = sector.profiles!.filter((profile) =>
					validProfiles.includes(profile)
				);
				return { ...sector, profiles: filteredProfiles };
			});
				return { ...wall, sectors: filteredSectors };
			});
			return filteredWalls;
	}
	
	const submitProfile = async () => {
		setLoading(true);
		setLoadingStepper(true);
		const dataToFetch = removeInvalidProfiles(sectors, data);
		try {
			const res = await step4.createProfiles(dataToFetch);
			setSubmit(true);
			setLoading(false);
			setLoadingStepper(false);
			return res;
		} catch(error){
			setSubmit(false);
			setLoading(false);
			setLoadingStepper(false);
		}
	};

	const handleProfiles = async () => {
		const dataToCheck = removeInvalidProfiles(sectors, data);
		if (checkDuplicateProfiles(data)) {
			alert(
				'Los perfiles deben tener un ID único (cambie el ID de los perfiles con el mismo ID)'
			);
			return;
		}
		if (!hasNonEmptyProfiles(dataToCheck)) {
			alert('Los sectores deben tener asignado al menos un perfil');
			return;
		}
		
		const createdProfiles = await submitProfile();
		setConfirmProfiles(createdProfiles);
		handleContinue();
	};

	const handleName = (value: string, index: number) => {
		const aux = [...data];
		aux[index].profile = value;
		setData(aux);
	};

	return (
		<div>
			<div className={styles.tabs}>
				<Tabs
					value={active}
					onChange={() => ''}
					variant="fullWidth"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
				>
					{sectors.map((datos) => (
						<>
							<Tab label={datos.nameWall} />
						</>
					))}
				</Tabs>
			</div>
			<div>
				{sectors.map((_datos: any, index: number) => (
					<>
						{active === index && (
							<ProfileTable
								data={data}
								sectors={sectors[index]}
								deleteProfile={deleteProfile}
								handleName={handleName}
								disabled={submited}
								arrayIndex={index}
								profileWraping={profileWraping}
							/>
						)}
					</>
				))}
			</div>
			<div className={styles.buttons}>
				<Button
					variant="outlined"
					sx={{ fontWeight: 600 }}
					startIcon={<AddCircleIcon />}
					onClick={addProfile}
					disabled={loading || submited}
				>
					Agregar PERFIL
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 600 }}
					startIcon={
						<img
							className={active === 0 ? styles.deactivated : ''}
							src={leftArrow}
						/>
					}
					onClick={() => setActive(active - 1)}
					disabled={active === 0}
				>
					anterior
				</Button>
				{sectors.length === active + 1 ? (
					<Button
						variant="contained"
						onClick={() => handleProfiles()}
						sx={{ fontWeight: 600 }}
						disabled={loading || submited}
					>
						<div className={styles.buttonText}>GUARDAR Y CONTINUAR</div>
					</Button>
				) : (
					<Button
						variant="outlined"
						sx={{ fontWeight: 600 }}
						endIcon={<img src={rigthArrow} />}
						onClick={() => setActive(active + 1)}
					>
						siguiente
					</Button>
				)}
			</div>
		</div>
	);
}
