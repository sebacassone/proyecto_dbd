/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import styles from './CargaInicial.module.css';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ErrorIcon from '@mui/icons-material/Error';
import AdsClickIcon from '@mui/icons-material/AdsClick';


import * as revitionHook from "./components/useApi"

import { Tab, Tabs } from '@mui/material';
import GeneralTable from './components/generalTable/GeneralTable';
import Comment from './components/commentsTable/comments';
import FormPlanos from './components/FormPlanos';
import WallConfiguration from './components/wallConfiguration/WallConfiguration';
import SectionConfiguration from './components/sectionConfiguration/SectionConfiguration';
import ProfileConfiguration from './components/profileConfiguration/ProfileConfiguration';
import DrainsConfiguration from './components/drainsConfiguration/DrainsConfiguration';
import FormLista from './components/AplicationList/FormLista';
import Popup from './components/Popup';
import useModal from './useModal';

const commentsExample = ["Hola, soy un ejemplo de comentarios", "aquí iran los comentarios, prueba escribir uno"]
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
		drainName: 'Drenaje 0',
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
	
	const [cseId, setCse] = useState("c3279e3e-f479-40f4-979e-b404333af6cb");
	const [width, setWidth] = useState(document.documentElement.clientWidth);

	const [preLoading, setPreLoading] = useState(true);

	const [comments1, setComments1] = useState<string[]>([]);
	const [comments2, setComments2] = useState<string[]>([]);
	const [comments3, setComments3] = useState<string[]>([]);
	const [comments4, setComments4] = useState<string[]>([]);
	const [comments5, setComments5] = useState<string[]>([]);
	const [comments6, setComments6] = useState<string[]>([]);
	const [comments7, setComments7] = useState<string[]>([]);


	const [page, setPage] = useState(0);
	const [sended, setSended] = useState(false);
	const [loading, setLoading] = useState(false);
	const [stepper, setStepper] = useState(steps);
	const [plansPage, setPlansPage] = useState(0);

	const [failed, setFailed] = useState(false)



	const [wallsConfig, setWallConfig] = useState([]);
	const [sectorsConfig, setSectorsConfig] = useState([]);
	const [profileConfig, setProfileConfig] = useState([]);
	const [sectorsProfiles, setSectorsProfiles] = useState([]);
	const [drainConfig, setDrainConfig] = useState([]);
	const [appList, setAppList] = useState({});

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

	useEffect(() => {
		setPreLoading(true);
		const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
		
		function updateDrainages(arr1: any[], arr2: any[]): any[] {
			const updatedArr = arr1.map((item) => {
				const updatedDrainages = item.drainages.map((drainageId) => {
					const foundDrain = arr2.find((drain) => drain.idDrain === drainageId);
					return foundDrain ? foundDrain.drainName : drainageId;
				});
				return {
					...item,
					drainages: updatedDrainages,
				};
			});
			return updatedArr;
		}

		function renameKeys(arr: any[], keyMap: Record<string, string>): any[] {
			return arr.map((item) => {
				const renamedItem = Object.entries(item).reduce((acc, [key, value]) => {
				const newKey = keyMap[key] || key;
				return { ...acc, [newKey]: value };
				}, {});
				return renamedItem;
			});
		}

		function removeDuplicates(arr: any[]): any[] {
			const uniqueArr = arr.filter((item, index, self) => {
				const currentIndex = JSON.stringify(item);
				return index === self.findIndex((obj) => JSON.stringify(obj) === currentIndex);
			});
			return uniqueArr;
		}

		const fetchApplicationList = async () => {
			const url = apiUrl + 'cse/m1_configuration/read?id_cse=' + cseId;
			try {
				const { data } = await axios(url);
				setAppList(data);
				console.log(data)
				return data;
			} catch (error) {
				alert('error al obtener lista de aplicabilidad');
				return error;
			}
		}
		const fetchDrainages = async (sectors: any) => {
			console.log(sectors)
			const url = apiUrl + "cse/drainage_configuration/read_sector?id_sector=";
			const savedDrains = [];
			for(let i = 0; i < sectors.length; i++) {
				const { data } = await axios(url + sectors[i].idSector)
				savedDrains.push(data);
			}
			console.log(savedDrains)
			const urlNames = apiUrl + "cse/drainage_configuration/read?id_drainage=";
			const drainsNames = []
			for(let i = 0; i < savedDrains.length; i++) {
				for(let j = 0; j < savedDrains[i].drainages.length; j++){
					const { data } = await axios(urlNames + savedDrains[i].drainages[j]);
					console.log(data)
					drainsNames.push({idDrain: data.id, drainName: data.drainage_system});
				}
				
			}
			const updateDrainsNames = removeDuplicates(drainsNames)
			const updateSavedDrains = updateDrainages(savedDrains, drainsNames);

			const keyMap = {
				"wall_name": "nameWall",
				"wall_id": "idWall",
				"sector_id": "idSector",
				"sector_name": "nameSector",
				"drainages": "drains"
			};
			
			const updateNamesSavedDrains = renameKeys(updateSavedDrains, keyMap)
			setDrainConfig(updateDrainsNames);
			setSaveDrains(updateNamesSavedDrains)
		}

		const fetchProfiles = async (sectors: any) => {
			const url = apiUrl + "cse/profile_configuration/read?id_sector=";
			console.log(sectors)
			const aux = [];
			const profilesNames = [];
	
			if (sectors.length > 0){
				for (let i = 0; i < sectors.length; i++){
					const auxSectors = {
						idWall: sectors[i].idWall,
						nameWall: sectors[i].nombreMuro,
						sectors: [],
						detail: "a"
					}
					const { data } = await axios(url + sectors[i].idSector);
					const profilesOnlyNames = [];
					if (data.name === "AxiosError"){
						return alert("Error al cargar Perfiles");
					} else {
						
						for(let j = 0; j < data.Profiles.length; j++){
							profilesNames.push(data.Profiles[j]);
							profilesOnlyNames.push(data.Profiles[j].topographic_profile);
						}
						auxSectors.sectors.push({id: sectors[i].idSector, name: sectors[i].name, profiles: profilesOnlyNames})
						aux.push(auxSectors);
					}
				}
			} else {
				return alert("Error al cargar sectores");
			}
			setProfileConfig(profilesNames);
			console.log(profilesNames);
			console.log(aux);
			fetchApplicationList();
			setSectorsProfiles(aux);
			setPreLoading(false);
		}
		const fetchSectors = async (walls: any) => {
			const url = apiUrl + "cse/sector_configuration/read?id_wall=";
			const aux = [];
			if (walls.length > 0){
				for (let i = 0; i < walls.length; i++){
					const { data } = await axios(url + walls[i].id);
					if (data.name === "AxiosError"){
						return alert("Error al cargar sectores");
					} else {
						for(let j = 0; j < data.Sectors.length; j++){
						const auxObject = {
							idSector: data.Sectors[j].id,
							name: data.Sectors[j].name,
							estribo: data.Sectors[j].estribo,
							nombreMuro: walls[i].name,
							idWall: walls[i].id,
						}
						aux.push(auxObject)
						}
					}
				}
			} else {
				return alert("Error al cargar sectores");
			}
			console.log(aux);
			fetchProfiles(aux);
			fetchDrainages(aux);
			setSectorsConfig(aux);
		}
		const fetchWalls = async () => {
			const url = apiUrl + "cse/wall_configuration/read?id_cse=" + cseId;
			try { 
				const { data } = await axios(url);
				console.log(data);
				setWallConfig(data.Walls);
				fetchSectors(data.Walls)
				return data.Walls
			} catch (error) {
				setFailed(true)	
			}
		};
		fetchWalls();		
	}, [])

	const handleCancel = () => {
		if (page === 0) {
			setPage(0);
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

	const checkResponses = (arr: { name: string, value: string, completed: boolean }[]): boolean => {
		return arr.every(step => step.value !== 'none');
	}

	const handleNext = () => {
		setPage(page + 1)
	}
	
	const handleApprove = async () => {
		setLoading(true);
		const data = await revitionHook.approveStep(cseId, page);
		console.log(data)
		if (data.name !== "AxiosError"){
			const aux = [...stepper]
			aux[page].completed = true;
			aux[page].value = "approved"
			setStepper(aux);
			setLoading(false);
			return;
		}
		alert("No se puede generar esta acción en este momento");
		setLoading(false);
	}

	const handleDisapprove = async () => {
		setLoading(true);
		const data = await revitionHook.disapproveStep(cseId, page);
		if (data.name !== "AxiosError"){
			const aux = [...stepper]
			aux[page].completed = true;
			aux[page].value = "rejected"
			setStepper(aux);
			setLoading(false);
			return;
		}
		alert("No se puede generar esta acción en este momento");
		setLoading(false);
	}


	function errorIconFunction() {
		return <ErrorIcon color='error'/>
	}

	function loadingIconFunction(){
		return <div className={styles.rotate}><AutorenewIcon color="primary"/></div>
	}

	const handleAddComment = async (comment: string) => {
		const data = await revitionHook.addComment(cseId, page, comment);
		console.log(data);
	}

	const handleSendComment = (comment: string) => {
		handleAddComment(comment);
	}
	return (
		<>
			{preLoading ? (
				<> 
					{!failed ? ( 
						<div className={styles.general}>
							<div className={styles.titleContainer} style={{ justifyContent: "center", margin: "auto", textAlign: "center"}}>
								<div className={styles.titleHeader}>Cargando datos</div>
									<div className={styles.titleDescription}>
										Se estan obteniendo los datos del servidor
									</div>
								</div>
								<div style={{ justifyContent: "center", margin: "auto", textAlign: "center", width: "40px", marginTop: "30px"}}>
									<div className={styles.rotate}><AutorenewIcon color="primary" fontSize='inherit' sx={{fontSize: "40px"}}/>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.general}>
							<div className={styles.titleContainer} style={{ justifyContent: "center", margin: "auto", textAlign: "center"}}>
								<div className={styles.titleHeader}>No se han cargado los datos</div>
									<div className={styles.titleDescription}>
										Ha existido un error desde el servidor
									</div>
								</div>
								<div style={{ justifyContent: "center", margin: "auto", textAlign: "center", width: "40px", marginTop: "30px"}}>
								
							</div>
						</div>
					)}
					
				</>
			):(
			<div className={styles.general}>
				<div className={styles.titleContainer}>
					{page === 0 && (
						<>
							<div className={styles.titleHeader}>Configuración General</div>
							<div className={styles.titleDescription}>
							A continuación se presenta la Configuración General que requiere revisión.
							</div>
						</>
					)}
					{page === 1 && (
						<>
							<div className={styles.titleHeader}>Configuración de Muro</div>
							<div className={styles.titleDescription}>
							A continuación se presenta la Configuración Muro que requiere revisión.
							</div>
						</>
					)}
					{page === 2 && (
						<>
							<div className={styles.titleHeader}>Configuración de Sectores</div>
							<div className={styles.titleDescription}>
							A continuación se presenta la Configuración Sectores que requiere revisión.
							</div>
						</>
					)}
					{page === 3 && (
						<>
							<div className={styles.titleHeader}>Configuración de Perfiles</div>
							<div className={styles.titleDescription}>
							A continuación se presenta la Configuración Perfiles que requiere revisión.
							</div>
						</>
					)}
					{page === 4 && (
						<>
							<div className={styles.titleHeader}>
								Configuración de Sistemas de Drenaje
							</div>
							<div className={styles.titleDescription}>
							A continuación se presenta la Configuración Sistema de Drenaje que requiere revisión.
							</div>
						</>
					)}
					{page === 5 && (
						<>
							<div className={styles.titleHeader}>
								Configuración Planos y Mapas
							</div>
							<div className={styles.titleDescription}>
							&nbsp;
							</div>
						</>
					)}
					{page === 6 && (
						<>
							<div className={styles.titleHeader}>
								Lista de Aplicabilidad de Módulo 1
							</div>
							<div className={styles.titleDescription}>
							A continuación se presenta la Lista de Aplicabilidad que requiere revisión.
							</div>
						</>
					)}
				</div>
				<div className={styles.stateContainer}>
					<Stepper
						activeStep={page}
						alternativeLabel={width < 610 ? false : true}
						orientation={width < 610 ? 'vertical' : 'horizontal'}
						nonLinear
					>
						{stepper.map((data: StepperInterface, index: number) => {
						if (loading && index === page) {
							return (
								<Step
								key={data.name}
								sx={{
								'& .MuiStepIcon-root.Mui-completed': {
									color: '#D32F2F',
									minWidth: '29px',
									minHeight: '29px',
								},
								}}
								completed={data.completed}
							>
								<StepLabel StepIconComponent={loadingIconFunction}>{data.name}</StepLabel>
							</Step>
							)
						}
						if (data.value === 'none') {
							return (
							<Step
								key={data.name}
								sx={{
								'& .MuiStepIcon-root.Mui-completed': {
									color: '#4CAF50',
								},
								}}
								completed={data.completed}
							>
								<StepLabel>{data.name}</StepLabel>
							</Step>
							);
						} else if (data.value === 'approved') {
							return (
							<Step
								key={data.name}
								sx={{
								'& .MuiStepIcon-root.Mui-completed': {
									color: '#4CAF50',
								},
								}}
								completed={data.completed}
							>
								<StepLabel>{data.name}</StepLabel>
							</Step>
							);
						} else if (data.value === 'rejected') {
							return (
							<Step
								key={data.name}
								sx={{
								'& .MuiStepIcon-root.Mui-completed': {
									color: '#D32F2F',
									minWidth: '29px',
									minHeight: '29px',
								},
								}}
								completed={data.completed}
							>
								<StepLabel StepIconComponent={errorIconFunction}>{data.name}</StepLabel>
							</Step>
							);
						} else {
							return null;
						}
						})}
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
										disabled={loading}
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
										disabled={loading}
									>
										Siguiente
									</Button>
								</div>

								<div className={styles.table}>
									<WallConfiguration
										data={wallsConfig}
										disabled={true}
									/>
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
										disabled={loading}
									>
										Siguiente
									</Button>
								</div>

								<div className={styles.table}>
									<SectionConfiguration data={sectorsConfig} walls={wallsConfig} disabled={true}/>
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
										disabled={loading}
									>
										Siguiente
									</Button>
								</div>
								<div className={styles.tableNoPadding}>
										<ProfileConfiguration
											data={profileConfig}
											sectors={sectorsProfiles}
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
										disabled={loading}
									>
										Siguiente
									</Button>
								</div>
								<div className={styles.tableNoPadding}>
									<DrainsConfiguration
										data={drainConfig}
										savedDrains={savedDrains}
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
										
									>
										Siguiente
									</Button>
								</div>
								<FormPlanos />
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
										disabled={checkResponses(stepper) ? false : false}
										
									>
										Finalizar
									</Button>
								</div>
								<FormLista
									data={appList}
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
									{sended ? "Su configuración ha sido enviada exitosamente" : "La configuración ha sido revisada exitosamente, ¿desea ahora aprobar?"}
									
								</div>
								{!sended && (
								<div style={{display: "flex", gap: "10px", justifyContent: "center", margin: "auto"}}>
									
									<Button variant="outlined" color={"error"} startIcon={<ArrowBackIcon/>}>ENVIAR A CORRECCIÓN</Button>
									<Button
										variant="contained"
										onClick={() => {
											handleOpenModal();
										}}
										endIcon={<AdsClickIcon />}
									>
										
										<div className={styles.buttonText}>ENVIAR A REVISIÓN</div>
										
									</Button>
								</div>)}
								
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
					<div className={styles.revisionContainer}>
						{page === 0 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments1} setData={setComments1} sendComment={handleSendComment} disabled={stepper[0].value !== "rejected"}/></div>
								
							</>
						)}
						{page === 1 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments2} setData={setComments2} sendComment={handleSendComment} disabled={stepper[1].value !== "rejected"}/></div>
								
							</>
						)}
						{page === 2 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments3} setData={setComments3} sendComment={handleSendComment} disabled={stepper[2].value !== "rejected"}/></div>
								
							</>
						)}
						{page === 3 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments4} setData={setComments4} sendComment={handleSendComment} disabled={stepper[3].value !== "rejected"}/></div>
								
							</>
						)}
						{page === 4 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments5} setData={setComments5} sendComment={handleSendComment} disabled={stepper[4].value !== "rejected"}/></div>
								
							</>
						)}
						{page === 5 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments6} setData={setComments6} sendComment={handleSendComment} disabled={stepper[5].value !== "rejected"}/></div>
								
							</>
						)}
						{page === 6 && (
							<>
								<div className={styles.revisionButtonContainer}> 
									<button 
										className={`${styles.acceptButton} ${stepper[page].value === "approved" ? styles.acceptButtonSelected : ""}`} 
										onClick={handleApprove}
									> 
										<CheckCircleIcon color="success" fontSize="inherit" sx={{fontSize: "28.8px"}}/> 
										Aprobar
									</button>
									<button 
										className={`${styles.declineButton} ${stepper[page].value === "rejected" ? styles.declineButtonSelected : ""}`} 
										onClick={handleDisapprove}
									>
										<ErrorIcon color="error" fontSize="inherit" sx={{fontSize: "28.8px"}}/> Rechazar</button>
								</div>
								<div className={styles.revisionButtonContainer}> <Comment data={comments7} setData={setComments7} sendComment={handleSendComment} disabled={stepper[6].value !== "rejected"}/></div>
								
							</>
						)}
					</div>
				</div>
				{openModal && (
					<Popup
						handleClose={handleOpenModal}
						open={openModal}
						action={setSended}
					/>
				)}
			</div>)}
		</>
	);
}
