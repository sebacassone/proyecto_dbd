/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import styles from './CargaInicial.module.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ErrorIcon from '@mui/icons-material/Error';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import * as step1 from './components/generalTable/useApi';
import * as step2 from './components/wallConfiguration/useApi';
import * as step3 from './components/sectionConfiguration/useApi';
import * as step6 from './components/AplicationList/useApi';

import arrow from './media/arrow.svg';
import GeneralTable from './components/generalTable/GeneralTable';
import WallConfiguration from './components/wallConfiguration/WallConfiguration';
import SectionConfiguration from './components/sectionConfiguration/SectionConfiguration';
import ProfileConfiguration from './components/profileConfiguration/ProfileConfiguration';
import DrainsConfiguration from './components/drainsConfiguration/DrainsConfiguration';
import PlansAndMaps from './components/plansAndMaps/PlansAndMaps';
import { Tab, Tabs } from '@mui/material';
import FormLista from './components/AplicationList/FormLista';
import Popup from './components/Popup';
import useModal from './useModal';
import axios from 'axios';

const datosMuro = [
	{
		idMuro: 0,
		name: 'Muro_0',
		materialidad: 'none',
	},
];

const datosSectores = [
	{
		idSector: 0,
		name: 'Sector_0',
		estribo: 'none',
		nombreMuro: 'none',
		idWall: 'none',
	},
];

const perfiles = [
	{
		idProfile: 0,
		profile: 'Perfil_0',
	},
];

const drains = [
	{
		idDrain: 0,
		drainName: '',
	},
];

const steps = [
	{ name: 'Información', value: 'none', completed: false },
	{ name: 'Muros', value: 'none', completed: false },
	{ name: 'Sectores', value: 'none', completed: false },
	{ name: 'Perfiles', value: 'none', completed: false },
	{ name: 'Drenajes', value: 'none', completed: false },
	{ name: 'Planos y Mapas', value: 'none', completed: false },
	{ name: 'Lista Aplicabilidad', value: 'none', completed: false },
];

interface StepperInterface {
	name: string;
	value: string;
	completed: boolean;
}

export default function CargaInicial() {
	const { openModal, handleOpenModal } = useModal();
	const [cseId, setCse] = useState('');
	const [width, setWidth] = useState(document.documentElement.clientWidth);

	const [drainConfig, setDrain] = useState(drains);
	const [wallsConfig, setWalls] = useState(datosMuro);
	const [sectorConfig, setSector] = useState(datosSectores);
	const [profileConfig, setProfile] = useState(perfiles);

	const [page, setPage] = useState(0);
	const [sended, setSended] = useState(false);
	const [loading, setLoading] = useState(false);
	const [stepper, setStepper] = useState(steps);
	const [plansPage, setPlansPage] = useState(0);

	const [appList, setAppList] = useState({});

	const [linkToFile1, setLink1] = useState("");
	const [linkToFile2, setLink2] = useState("");
	const [linkToFile3, setLink3] = useState("");
	const [linkToFile4, setLink4] = useState("");
	const [linkToFile5, setLink5] = useState("");
	const [linkToFile6, setLink6] = useState("");

	const [savedDrains, setSaveDrains] = useState([]);
	const [confirmWalls, setConfirmWalls] = useState([]);
	const [confirmSectors, setConfirmSectors] = useState([]);
	const [confirmProfiles, setConfirmProfiles] = useState([]);

	const [confirmDrains, setConfirmDrains] = useState({});

	const [generalConfig, setGeneralConfig] = useState({
		spindle: 'none',
		sys_coord: 'none',
	});

	useEffect(() => {
		const handleResize = () => {
			setWidth(document.documentElement.clientWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const stepsPlans = ['Planos por muro', 'Planos por depósito'];

	const handleCancel = () => {
		if (page === 0) {
			setPage(0);
		} else {
			setPage(page - 1);
		}
		if (page === 1) {
			if (
				confirm(
					'Su trabajo se perdera si se retrocede sin guardar, ¿Continuar la acción?'
				)
			) {
				setPage(0);
			} else {
				setPage(page);
			}
		} else {
			setPage(page - 1);
		}
		if (page === 2) {
			if (
				confirm(
					'Su trabajo se perdera si se retrocede sin guardar, ¿Continuar la acción?'
				)
			) {
				setPage(1);
			} else {
				setPage(page);
			}
		} else {
			setPage(page - 1);
		}
	};

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	const makeIdWalls = () => {
		if (wallsConfig.length === undefined) {
			return 0;
		} else {
			for (let i = 0; i < wallsConfig.length; i++) {
				if (wallsConfig[i].idMuro !== i) {
					return i;
				}
			}
			return wallsConfig.length;
		}
	};

	const addWalls = () => {
		const aux = [
			...wallsConfig,
			{
				idMuro: makeIdWalls(),
				name: 'Muro_' + makeIdWalls(),
				materialidad: 'none',
			},
		];
		setWalls(aux.sort((x, y) => x.idMuro - y.idMuro));
	};

	const deleteWall = (id: number) => {
		if (wallsConfig.length === 1) {
			alert('Se necesita como mínimo una muralla');
			return;
		}
		const auxArray = wallsConfig.filter(function (datos) {
			return datos.idMuro !== id;
		});
		setWalls(auxArray);
	};

	const makeIdSector = () => {
		if (sectorConfig.length === undefined) {
			return 0;
		} else {
			for (let i = 0; i < sectorConfig.length; i++) {
				if (sectorConfig[i].idSector !== i) {
					return i;
				}
			}
			return sectorConfig.length;
		}
	};

	const addSector = () => {
		const aux = [
			...sectorConfig,
			{
				idSector: makeIdSector(),
				name: 'Sector_' + makeIdSector(),
				estribo: 'none',
				nombreMuro: 'none',
				idWall: 'none',
			},
		];
		setSector(aux.sort((x, y) => x.idSector - y.idSector));
	};

	const deleteSector = (id: number) => {
		if (sectorConfig.length === 1) {
			alert('Se necesita como mínimo un sector por muro');
			return;
		}
		const auxArray = sectorConfig.filter(function (datos) {
			return datos.idSector !== id;
		});
		setSector(auxArray);
	};

	const makeIdProfile = () => {
		if (profileConfig.length === undefined) {
			return 0;
		} else {
			for (let i = 0; i < profileConfig.length; i++) {
				if (profileConfig[i].idProfile !== i) {
					return i;
				}
			}
			return profileConfig.length;
		}
	};

	const makeIdDrain = () => {
		if (drainConfig.length === undefined) {
			return 0;
		} else {
			for (let i = 0; i < drainConfig.length; i++) {
				if (drainConfig[i].idDrain !== i) {
					return i;
				}
			}
			return drainConfig.length;
		}
	};

	const addProfile = () => {
		const aux = [
			...profileConfig,
			{
				idProfile: makeIdProfile(),
				profile: 'Perfil_' + makeIdProfile(),
			},
		];
		setProfile(aux.sort((x, y) => x.idProfile - y.idProfile));
	};

	const deleteProfile = (index: number) => {
		if (profileConfig.length === 1) {
			alert('Se necesita por lo menos 1 perfil por muralla');
			return;
		}
		const auxArray = profileConfig.filter((_, i) => i !== index);
		setProfile(auxArray);
	};

	const addDrain = () => {
		const aux = [
			...drainConfig,
			{
				idDrain: makeIdDrain(),
				drainName: "",
			},
		];
		setDrain(aux.sort((x, y) => x.idDrain - y.idDrain));
	};

	const deleteDrain = (id: number) => {
		if (drainConfig.length === 1) {
			alert('Se necesita por lo menos 1 drenaje por muralla');
			return;
		}
		const auxArray = drainConfig.filter(function (datos) {
			return datos.idDrain !== id;
		});
		setDrain(auxArray);
	};

	function checkDuplicateWalls(
		arr: { idMuro: number; name: string; materialidad: string }[]
	) {
		const names: string[] = [];
		for (let i = 0; i < arr.length; i++) {
			const name = arr[i].name;
			if (names.includes(name)) {
				return true;
			}
			names.push(name);
		}
		return false;
	}

	function checkMateriality(
		arr: { idMuro: number; name: string; materialidad: string }[]
	) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].materialidad === 'none') {
				return true;
			}
			if (arr[i].materialidad === '') {
				return true;
			}
		}
		return false;
	}

	function checkEstribos(
		arr: {
			idSector: number;
			name: string;
			estribo: string;
			nombreMuro: string;
			idWall: string;
		}[]
	) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].estribo === 'none') {
				return true;
			}
			if (arr[i].estribo === '') {
				return true;
			}
		}
		return false;
	}

	function checkDuplicateSectors(
		arr: {
			idSector: number;
			name: string;
			estribo: string;
			nombreMuro: string;
			idWall: string;
		}[]
	) {
		const names: string[] = [];
		for (let i = 0; i < arr.length; i++) {
			const name = arr[i].name;
			if (names.includes(name)) {
				return true;
			}
			names.push(name);
		}
		return false;
	}

	function checkSectorWalls(
		arr: {
			idSector: number;
			name: string;
			estribo: string;
			nombreMuro: string;
			idWall: string;
		}[],
		arr2: {
			id: string;
			name: string;
		}[]
	) {
		const nombresMuro = arr.map((item) => item.nombreMuro);
		const nombresMuro2 = arr2.map((item) => item.name);
		return nombresMuro2.every((name) => nombresMuro.includes(name));
	}

	const submitGeneralConfig = async (id: number) => {
		if (
			generalConfig.spindle === 'none' &&
			generalConfig.sys_coord === 'none'
		) {
			alert('Se debe asignar el sistema de coordenadas y el huso');
			return;
		}
		if (generalConfig.spindle === 'none' || generalConfig.sys_coord === '') {
			alert('Se debe asignar el huso');
			return;
		}
		if (generalConfig.sys_coord === 'none' || generalConfig.sys_coord === '') {
			alert('Se debe asignar el sistema de coordenadas');
			return;
		}
		setLoading(true);
		const auxCseId = await step1.postGeneral(generalConfig);
		if (auxCseId.name !== 'AxiosError') {
			setCse(auxCseId.GeneralConfiguration.id_cse);
			const aux = [...steps];
			aux[id].completed = true;
			setStepper(aux);
			setLoading(false);
		}
		setLoading(false);
	};

	const submitWalls = async (id: number) => {
		if (checkDuplicateWalls(wallsConfig)) {
			alert(
				'Las murallas deben tener un ID unico (cambie el ID de las murallas con el mismo ID)'
			);
			return;
		}
		if (checkMateriality(wallsConfig)) {
			alert('Las murallas deben tener un material asignado');
			return;
		}
		setLoading(true);
		const data = await step2.createWall(cseId, wallsConfig);
		setConfirmWalls(data.walls);
		const aux = [...steps];
		aux[id].completed = true;
		setStepper(aux);
		setLoading(false);
	};

	const submitSector = async (id: number) => {
		if (sectorConfig.length < wallsConfig.length) {
			alert(
				'Debes ingresar al menos un sector por muro. Antes de continuar, debes crear los sectores del muro'
			);
			return;
		}
		if (checkEstribos(sectorConfig)) {
			alert(
				'Cada sector debe contar la identificación de si este corresponde a un estribo'
			);
			return;
		}
		if (checkDuplicateSectors(sectorConfig)) {
			alert(
				'No puede haber sectores con un mismo ID. Cada sector debe contar con un ID único'
			);
			return;
		}
		if (!checkSectorWalls(sectorConfig, confirmWalls)) {
			alert('Todas las murallas deben ser asignadas');
			return;
		}
		setLoading(true);
		const data = await step3.createSector(sectorConfig);
		setConfirmSectors(data);
		const aux = [...steps];
		aux[id].completed = true;
		setStepper(aux);
		setLoading(false);
	};

	const getData = async (id: number) => {
		setLoading(true);
		const data = await step6.getAppList(cseId);
		setAppList(data);
		const aux = [...steps];
		aux[id].completed = true;
		setStepper(aux);
		setLoading(false);
	};
	const handleStepper = (id: number) => {
		if (id == 0) {
			submitGeneralConfig(id);
			return;
		}
		if (id == 1) {
			submitWalls(id);
			return;
		}
		if (id == 2) {
			submitSector(id);
			return;
		}
		if (id == 5) {
			getData(id);
			return;
		}
		if (id == 6) {
			const aux = [...steps];
			aux[id].completed = true;
			setStepper(aux);
		} else {
			const aux = [...steps];
			aux[id].completed = true;
			setStepper(aux);
		}
	};

	const handleNext = async () => {
		handleClick();
		if (page === 6) {
			setLoading(true);
			try {
				const result = await step6.updateAppList(cseId, appList);
				if ('detail' in result) {
					setPage(page + 1);
				}
				handleStepper(6);
				setLoading(false);
			} catch(error){
				setLoading(false);
			}
			
		} else {
			setPage(page + 1);
		}
	};

	const handleSendToM3 = async (value: boolean) => {
		setLoading(true);
		const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
		const urlSend = apiUrl + 'cse/m3_configuration/send_cse_to_m3';
		try {
			const { data } = await axios.post(urlSend, { id_cse: cseId });
			setSended(value);
			setLoading(false);
		} catch (error) {
			alert('Ha existido un error al enviar la CSE');
			setSended(!value);
			setLoading(false);
		}
	};

	const handlePlansPage = (index: number) => {
		if (index === 1) {
			if (linkToFile1 === "" || linkToFile2 === "" || linkToFile3 === ""){
				alert("Se deben subir todos los planos y mapas solicitados")
				return;
			}
			setPlansPage(index);
			return;
		}
		
		if (index === 2){
			if (linkToFile4 === "" || linkToFile5 === "" || linkToFile6 === ""){
				alert("Se deben subir todos los planos y mapas solicitados")
				return;
			}
			handleStepper(5);
		}
	}

	function loadingIconFunction(){
		return <div className={styles.rotate}><AutorenewIcon color="primary"/></div>
	}

	return (
	<> 
		
		<div className={styles.general}>
		<div className={styles.pageHeader}>
			<div className={styles.headerLink}>Inicio</div>
			<KeyboardArrowRightIcon color={"action"} sx={{margin: "0px 8px 0px 8px"}}/>
			<div className={styles.headerLink}>Configuración</div>
			<KeyboardArrowRightIcon color={"action"} sx={{margin: "0px 8px 0px 8px"}}/>
			<div className={styles.headerLinkSelected}>Carga inicial</div>
		</div>
			<div className={styles.titleContainer}>
				{page === 0 && (
					<>
						<div className={styles.titleHeader}>Configuración General</div>
						<div className={styles.titleDescription}>
							Ingresa las opciones para la configuración general del sistema. -
							Todos los campos son obligatorios a menos que se indique lo
							contrario.
						</div>
					</>
				)}
				{page === 1 && (
					<>
						<div className={styles.titleHeader}>Configuración de Muro</div>
						<div className={styles.titleDescription}>
							Ingresa los muros que desea configurar
						</div>
					</>
				)}
				{page === 2 && (
					<>
						<div className={styles.titleHeader}>Configuración de Sectores</div>
						<div className={styles.titleDescription}>
							Ingresa los sectores del muro que desea configurar
						</div>
					</>
				)}
				{page === 3 && (
					<>
						<div className={styles.titleHeader}>Configuración de Perfiles</div>
						<div className={styles.titleDescription}>
							Ingrese los perfiles topográficos de los sectores del muro que
							desea configurar
						</div>
					</>
				)}
				{page === 4 && (
					<>
						<div className={styles.titleHeader}>
							Configuración de Sistemas de Drenaje
						</div>
						<div className={styles.titleDescription}>
							Ingrese el sistema de drenaje para cada sector que desea
							configurar
						</div>
					</>
				)}
				{page === 5 && (
					<>
						<div className={styles.titleHeader}>
							Configuración Planos y Mapas
						</div>
					</>
				)}
				{page === 6 && (
					<>
						<div className={styles.titleHeader}>
							Lista de Aplicabilidad de Módulo 1
						</div>
						<div className={styles.titleDescription}>
							Desactiva los botones de los factores agravantes que no apliquen a
							la configuración del depósito y agregue un comentario para
							justificar esta acción.
						</div>
					</>
				)}
			</div>
			<div className={styles.stateContainer}>
				<Stepper
					activeStep={page}
					alternativeLabel={width < 610 ? false : true}
					orientation={width < 610 ? 'vertical' : 'horizontal'}
				>
					{stepper.map((data: StepperInterface, index: number) =>
						data.value === 'none' ? (
							<Step
								key={data.name}
								sx={{
									'& .MuiStepIcon-root.Mui-completed': {
										color: '#4CAF50',
									},

								}}
								completed={data.completed}
							>
								{loading && index === page ? (
										<StepLabel StepIconComponent={loadingIconFunction}>{data.name}</StepLabel>
									):(
										<StepLabel>{data.name}</StepLabel>
									)}
							</Step>
						) : (
							<Step
								key={data.name}
								sx={{
									'& .MuiStepIcon-root.Mui-completed': {
										color: '#000000',
									},
								}}
							>
								<StepLabel>{data.name}</StepLabel>
							</Step>
						)
					)}
				</Stepper>
			</div>
			<div className={styles.container}>
				<div className={styles.infoContainer}>
					{page === 0 && (
						<>
							<div className={styles.backButtonInitiate}>
								<Button
									variant="text"
									endIcon={<ArrowForwardIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleNext();
										handleClick();
									}}
									disabled={!stepper[0].completed}
								>
									Siguiente
								</Button>
							</div>
							<div className={styles.table}>
								<GeneralTable
									setConfig={setGeneralConfig}
									config={generalConfig}
									disabled={cseId !== ''}
								/>
							</div>
						</>
					)}
					{page === 1 && (
						<>
							<div className={styles.backButton}>
								<Button
									variant="text"
									startIcon={<ArrowBackIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									disabled={loading}
								>
									Atrás
								</Button>
								<Button
									variant="text"
									endIcon={<ArrowForwardIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleNext();
										handleClick();
									}}
									disabled={!stepper[1].completed}
								>
									Siguiente
								</Button>
							</div>

							<div className={styles.table}>
								<WallConfiguration
									data={wallsConfig}
									deleteWall={deleteWall}
									setWallConfig={setWalls}
									disabled={confirmWalls.length > 0}
								/>
								<div className={styles.buttonsWalls}>
									<Button
										variant="outlined"
										onClick={() => addWalls()}
										startIcon={<AddCircleIcon />}
										sx={{ fontWeight: 600 }}
										disabled={loading || confirmWalls.length > 0}
									>
										<div className={styles.buttonText}>AGREGAR MURO</div>
									</Button>
									<Button
										variant="contained"
										onClick={() => handleStepper(1)}
										sx={{ fontWeight: 600 }}
										disabled={loading || confirmWalls.length > 0}
									>
										<div className={styles.buttonText}>GUARDAR Y CONTINUAR</div>
									</Button>
								</div>
							</div>
						</>
					)}
					{page === 2 && (
						<>
							<div className={styles.backButton}>
								<Button
									variant="text"
									startIcon={<ArrowBackIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									disabled={loading}
								>
									Atrás
								</Button>
								<Button
									variant="text"
									endIcon={<ArrowForwardIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleNext();
										handleClick();
									}}
									disabled={!stepper[2].completed}
								>
									Siguiente
								</Button>
							</div>

							<div className={styles.table}>
								<SectionConfiguration
									data={sectorConfig}
									deleteSector={deleteSector}
									walls={confirmWalls}
									setSectorConfig={setSector}
									disabled={confirmSectors.length > 0}
								/>
								<div className={styles.buttonsWalls}>
									<Button
										variant="outlined"
										onClick={() => addSector()}
										startIcon={<AddCircleIcon />}
										sx={{ fontWeight: 600 }}
										disabled={loading || confirmSectors.length > 0}
									>
										<div className={styles.buttonText}>AGREGAR SECCIÓN</div>
									</Button>
									<Button
										variant="contained"
										onClick={() => handleStepper(2)}
										sx={{ fontWeight: 600 }}
										disabled={loading || confirmSectors.length > 0}
									>
										<div className={styles.buttonText}>GUARDAR Y CONTINUAR</div>
									</Button>
								</div>
							</div>
						</>
					)}
					{page === 3 && (
						<>
							<div className={styles.backButton}>
								<Button
									variant="text"
									startIcon={<ArrowBackIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									disabled={loading}
								>
									Atrás
								</Button>
								<Button
									variant="text"
									endIcon={<ArrowForwardIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleNext();
										handleClick();
									}}
									disabled={!stepper[3].completed}
								>
									Siguiente
								</Button>
							</div>
							<div className={styles.tableNoPadding}>
								<ProfileConfiguration
									data={profileConfig}
									sectors={confirmSectors}
									addProfile={addProfile}
									deleteProfile={deleteProfile}
									setData={setProfile}
									setConfirmProfiles={setConfirmProfiles}
									confirmProfiles={confirmProfiles}
									handleContinue={() => handleStepper(3)}
									setLoadingStepper={setLoading}
								/>
							</div>
						</>
					)}
					{page === 4 && (
						<>
							<div className={styles.backButton}>
								<Button
									variant="text"
									startIcon={<ArrowBackIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									disabled={loading}
								>
									Atrás
								</Button>
								<Button
									variant="text"
									endIcon={<ArrowForwardIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleNext();
										handleClick();
									}}
									disabled={!stepper[4].completed}
								>
									Siguiente
								</Button>
							</div>
							<div className={styles.tableNoPadding}>
								<DrainsConfiguration
									data={drainConfig}
									addDrain={addDrain}
									deleteDrain={deleteDrain}
									sectors={confirmSectors}
									setData={setDrain}
									setConfirmDrains={setConfirmDrains}
									confirmDrains={confirmDrains}
									handleContinue={() => handleStepper(4)}
									setSaveDrains={setSaveDrains}
									savedDrains={savedDrains}
									setLoadingStepper={setLoading}
								/>
							</div>
						</>
					)}
					{page === 5 && (
						<>
							<div className={styles.backButton}>
								<Button
									variant="text"
									startIcon={<ArrowBackIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									disabled={loading}
								>
									Atrás
								</Button>
								<Button
									variant="text"
									endIcon={<ArrowForwardIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleNext();
										handleClick();
									}}
									disabled={!stepper[5].completed}
								>
									Siguiente
								</Button>
							</div>
							<div className={styles.tabContainer}>
								<Tabs
									value={0}
									onChange={() => ''}
									centered
									variant="fullWidth"
									sx={{
										'% .MuiButtonBase-root': {
											fontWeigth: 600,
										},
									}}
								>
									<Tab label="SUBIR ARCHIVO" />
									<Tab label="ACTUALIZAR ARCHIVOS" />
									<Tab label="REVISAR HISTORIAL" />
								</Tabs>
							</div>
							<div className={styles.plansStepper}>
								<Stepper activeStep={plansPage}>
									{stepsPlans.map((label) => (
										<Step
											key={label}
											sx={{
												'& .MuiStepIcon-root.Mui-completed': {
													color: '#4CAF50',
												},
												'& .MuiStepLabel-label.Mui-completed': {
													color: '#4CAF50',
												},
											}}
										>
											<StepLabel>{label}</StepLabel>
										</Step>
									))}
								</Stepper>
							</div>
							{plansPage === 0 && (
								<>
									<div className={styles.tableNoPadding}>
										<PlansAndMaps titulo="Plano de muro sin sectorización" cseId={cseId} linkToFile={linkToFile1} setLink={setLink1} sectorizacion={"Sin Sectorizacion"} deposito={"False"}/>
									</div>
									<div className={styles.tableNoPadding}>
										<PlansAndMaps titulo="Plano de muro con sectorización" cseId={cseId} linkToFile={linkToFile2} setLink={setLink2} sectorizacion={"Con Sectorizacion"} deposito={"False"}/>
									</div>
									<div className={styles.tableNoPadding}>
										<PlansAndMaps titulo="Plano general del muro" cseId={cseId} linkToFile={linkToFile3} setLink={setLink3} sectorizacion={"General"} deposito={"False"}/>
									</div>
									<div className={styles.plansButtons}>
										<Button
											variant="contained"
											sx={{ fontWeigth: 600 }}
											onClick={() => {
												handlePlansPage(1);
												handleClick();
											}}
										>
											SIGUIENTE
										</Button>
									</div>
								</>
							)}
							{plansPage === 1 && (
								<>
									<div className={styles.tableNoPadding}>
										<PlansAndMaps titulo="Plano de depósito sin sectorización" cseId={cseId} linkToFile={linkToFile4} setLink={setLink4} sectorizacion={"Sin Sectorizacion"} deposito={"True"}/>
									</div>
									<div className={styles.tableNoPadding}>
										<PlansAndMaps titulo="Plano de depósito con sectorización" cseId={cseId} linkToFile={linkToFile5} setLink={setLink5} sectorizacion={"Con Sectorizacion"} deposito={"True"}/>
									</div>
									<div className={styles.tableNoPadding}>
										<PlansAndMaps titulo="Plano general del depósito" cseId={cseId} linkToFile={linkToFile6} setLink={setLink6} sectorizacion={"General"} deposito={"True"}/>
									</div>
									<div className={styles.plansButtons}>
										<Button
											variant="contained"
											onClick={() => handlePlansPage(2)}
											
										>
											FINALIZAR
										</Button>
									</div>
								</>
							)}
						</>
					)}
					{page === 6 && (
						<>
							<div className={styles.backButton}>
								<Button
									variant="text"
									startIcon={<ArrowBackIcon />}
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									disabled={loading}
								>
									Atrás
								</Button>
							</div>
							<FormLista
								nextPage={handleNext}
								data={appList}
								setData={setAppList}
							/>
						</>
					)}
					{page === 7 && (
						<>
							<div className={styles.endHeader}>
								Configuración Sitio Especifica{' '}
							</div>
							<div className={styles.endSubHeader}>Completada </div>
							<div className={''} style={{ marginBottom: '20px' }}>
								Su configuración ha sido completada exitosamente, ¿desea ahora
								enviarla para su revisión?{' '}
							</div>
							<Button
								variant="contained"
								onClick={() => {
									handleOpenModal();
								}}
								endIcon={<AdsClickIcon />}
								disabled={sended || loading}
							>
								{sended ? (
									<div className={styles.buttonText}>ENVIAR</div>
								) : (
									<div className={styles.buttonText}>ENVIAR A REVISIÓN</div>
								)}
							</Button>
						</>
					)}
					{sended && (
						<div className={styles.stateCSE}>
							<div className={styles.stateCSEInfo}>
								<CheckCircleIcon color="primary" fontSize="large" />
								<div> Configuración Completada</div>
							</div>
							<div className={styles.stateCSEcurrent}>
								<ReportProblemIcon color="warning" />
								<div style={{ color: '#ED6C02' }}> En revisión</div>
							</div>
							<div className={styles.stateCSEcurrent2}>
								<ErrorIcon color="error" />
								<div style={{ color: '#D32F2F' }}> Rechazada</div>
							</div>
							<div className={styles.stateCSEcurrent2}>
								<CheckCircleIcon color="success" />
								<div style={{ color: '#2E7D32' }}> Aprobada</div>
							</div>
						</div>
					)}
				</div>
				<div className={styles.buttonContainer}>
					{page === 0 && (
						<>
							<Button
								variant="contained"
								onClick={() => handleStepper(0)}
								endIcon={<img src={arrow} />}
								disabled={loading || cseId !== ''}
							>
								<div className={styles.buttonText}>GUARDAR Y CONTINUAR</div>
							</Button>
						</>
					)}
				</div>
			</div>
			{openModal && (
				<Popup
					handleClose={handleOpenModal}
					open={openModal}
					action={handleSendToM3}
				/>
			)}
		</div>
	</>
	);
}
