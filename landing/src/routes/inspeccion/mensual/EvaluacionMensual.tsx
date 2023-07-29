/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import styles from './EvaluacionMensual.module.css';
import * as submitData from './components/useApi';
import useOptions from './useOptions';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import EvaluationCard from './components/evaluationCard/EvaluationCard';
import ResumeTable from './components/resumeTable/ResumeTable';
import Popup from './components/Popup';
import ComprobationTable from './components/comprobationTable/ComprobationTable';

import arrow from './components/media/arrow.svg';
import useModal from './useModal';
import axios from 'axios';
import PopupCuation from './components/PopupCuation';

export default function Inspeccion() {
	const { openModal, handleOpenModal } = useModal();
	const { openModal: openModalCuation, handleOpenModal: handleOpenModalCuation } = useModal();
	
	const [page, setPage] = useState(0);

	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [value3, setValue3] = useState('');
	const [value4, setValue4] = useState('');
	const [value5, setValue5] = useState('');
	const [value6, setValue6] = useState('');
	const [value7, setValue7] = useState('');
	const [value8, setValue8] = useState('');
	const [value9, setValue9] = useState('');
	const [loading, setLoading] = useState(false);
	const [idCse, setIdCse] = useState('');
	const [results, setResults] = useState({id_monthly_evaluation: "", "variables_data": [], vulnerability: ""});

	useEffect(() => {
		const getIdCse = async () => {
			try {
				const apiUrl = process.env.REACT_APP_API_BASE_URL as string;
				const url = apiUrl + 'cse/general_configuration/operation';
				const { data } = await axios(url);
				if (data.code === 'ERR_BAD_REQUEST') {
					alert('No se ha logrado obtener la CSE en operación');
					return;
				}
				setIdCse(data.id_cse);
			} catch (error) {
				alert('No se ha logrado obtener la CSE en operación');
			}
		};
		void getIdCse();
	}, []);

	const [totalValues, setTotal] = useState({});
	const [toBackValues, setBackValues] = useState({
		'EM-01': '',
		'EM-02': '',
		'EM-03': '',
		'EM-04': '',
		'EM-05': '',
		'EM-06': '',
		'EM-07': '',
		'EM-08': '',
		'EM-09': '',
		'EM-10': '-',
	});

	const data = useOptions();

	const setValue = (index: number) => {
		switch (index) {
			case 1:
				return setValue1;
			case 2:
				return setValue2;
			case 3:
				return setValue3;
			case 4:
				return setValue4;
			case 5:
				return setValue5;
			case 6:
				return setValue6;
			case 7:
				return setValue7;
			case 8:
				return setValue8;
			case 9:
				return setValue9;
			default:
				return () => '';
		}
	};

	const steps = [
		{ name: 'Evaluación', value: 'none' },
		{ name: 'Validación', value: 'validation' },
		{ name: 'Comprobante', value: 'none' },
	];
	const passValue = (index: number) => {
		switch (index) {
			case 1:
				return value1;
			case 2:
				return value2;
			case 3:
				return value3;
			case 4:
				return value4;
			case 5:
				return value5;
			case 6:
				return value6;
			case 7:
				return value7;
			case 8:
				return value8;
			case 9:
				return value9;
			default:
				return () => '';
		}
	};

	const handleNext = () => {
		if (page === 0) {
			const aux = {
				value1,
				value2,
				value3,
				value4,
				value5,
				value6,
				value7,
				value8,
				value9,
			};
			setTotal(aux);
			if (
				value1 === '' ||
				value2 === '' ||
				value3 === '' ||
				value4 === '' ||
				value5 === '' ||
				value6 === '' ||
				value7 === '' ||
				value8 === '' ||
				value9 === ''
			) {
				handleOpenModalCuation();
			} else {
				setPage(1);
			}
		}
		if (page === 1) {
			const aux = {
				'EM-01': value1,
				'EM-02': value2,
				'EM-03': value3,
				'EM-04': value4,
				'EM-05': value5,
				'EM-06': value6,
				'EM-07': value7,
				'EM-08': value8,
				'EM-09': value9,
				'EM-10': '-',
			};
			setBackValues(aux);
			handleOpenModal();
		}
	};

	const handleCancel = () => {
		if (page === 0){
			setValue1("");
			setValue2("");
			setValue3("");
			setValue4("");
			setValue5("");
			setValue6("");
			setValue7("");
			setValue8("");
			setValue9("");
		}
		if (page === 1) {
			setPage(0);
		}
	};

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	const getResults = async (id: string) => {
		setLoading(true);
		const res = await submitData.getResults(id);
		setResults(res);
		setLoading(false);
	}

	const handlePost = async () => {
		setLoading(true);
		try {
			handleOpenModal();
			const res = await submitData.postMonthly(idCse, toBackValues);
			let auxString = res.detail;
			let aux = auxString.split(".");
			auxString = aux[0];
			aux = auxString.split(" ");
			getResults(aux[6]);
			setLoading(false);
			alert('Evaluación mensual creada correctamente');
			setPage(3);
		}catch(error){
			alert('Se ha encontrado un problema de conexión al servidor.');
			setLoading(false);
		}
	};


	const downloadPDF = () => {
		const input = document.getElementById('PdfId');	// Nombre del elemento a imprimir
		if (input) {
			void html2canvas(input).then((canvas) => {
				const imageData = canvas.toDataURL('image/png', 100);
				const pdf = new jsPDF();
				const pdfWidth = 190;					// hay que modificar segun ancho y alto del PDF
				const pdfHeight = 250;					// hasta que quede bien
				const imgWidth = canvas.width;
				const imgHeight = canvas.height;
				const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
				pdf.addImage(
					imageData,
					'PNG',
					30,
					10,
					imgWidth * ratio,
					imgHeight * ratio
				);
				pdf.save('Comprobante.pdf');
			});
		} else {
			alert('Error al generar el Documento PDF');
		}
	};

	function loadingIconFunction(){
		return <div className={styles.rotate}><AutorenewIcon color="primary"/></div>
	}

	return (
		<> 
			<div className={styles.general}>
			<div className={styles.pageHeader}>
				<div className={styles.headerLink}>Inicio</div>
				<KeyboardArrowRightIcon sx={{margin: "0px 8px 0px 8px"}}/>
				<div className={styles.headerLink}>Inspección y evaluaciones</div>
				<KeyboardArrowRightIcon sx={{margin: "0px 8px 0px 8px"}}/>
				<div className={styles.headerLinkSelected}>Evaluación mensual</div>
			</div>
				<h1>Ingreso Evaluación Mensual</h1>
				<div className={styles.stateContainer}>
					<Stepper activeStep={page} alternativeLabel>
						{steps.map((datos) =>
							datos.value === 'validation' ? (
								<Step
									key={datos.name}
									sx={{
										'& .MuiStepIcon-root.Mui-completed': {
											color: '#4CAF50',
										},
									}}
								>	
									{loading ? (
										<StepLabel StepIconComponent={loadingIconFunction}>{datos.name}</StepLabel>
									):(
										<StepLabel>{datos.name}</StepLabel>
									)}
									
								</Step>
							) : (
								<Step
									key={datos.name}
									sx={{
										'& .MuiStepIcon-root.Mui-completed': {
											color: '#4CAF50',
										},
									}}
								>
									<StepLabel>{datos.name}</StepLabel>
								</Step>
							)
						)}
					</Stepper>
				</div>
				<div className={styles.container}>
					<div className={styles.infoContainer}>
						{page === 0 && (
							<>
								<h1>
									Evaluación de vulnerabilidad física del depósito de relaves:
								</h1>
								<div className={styles.cardsContainer}>
									{data.map((datos, index) => (
										<EvaluationCard
											key={index}
											data={datos}
											result={setValue(index + 1)}
											option={passValue(index + 1)}
										/>
									))}
								</div>
							</>
						)}
						{page === 1 && (
							<>
								<h1>Validación</h1>
								<div className={styles.table}>
									<ResumeTable data={totalValues} />
								</div>
							</>
						)}
						{page === 3 && (
							<>
								<h1>Comprobante</h1>
								<div>
									<div className={styles.comprobationContainer}>
										<h2>INGRESO EVALUACIÓN MENSUAL</h2>
										<div className={styles.table}>
											<ComprobationTable/>
										</div>
										<h2>RESULTADO DE LA EVALUACIÓN</h2>
										<div className={styles.table}>
											<table className={styles.tableContent}>
												<tr className={styles.row}>
													<td>Vulnerabilidad física del depósito</td>
													<td><b>{results.vulnerability}</b></td>
												</tr>
											</table>
										</div>
										<h2>REGISTRO DE RESPUESTAS</h2>
										<div className={styles.table}>
											<ResumeTable data={totalValues} />
										</div>
										<div style={{display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "10px"}}>
										{page === 3 && (
											<>
												<Button variant="contained">
													<div
														className={styles.buttonText}
														onClick={() => downloadPDF()}
													>
														Descargar PDF
													</div>
												</Button>
												<Button variant="contained" endIcon={<img src={arrow} />}>
													<div className={styles.buttonText}>Ver registros</div>
												</Button>
											</>
											
											)}
									</div>
									</div>
									<div className={styles.pdfSection}>
										<div id="PdfId">
											<div className={styles.comprobationContainer}>
												<h2>INGRESO EVALUACIÓN MENSUAL</h2>
												<div>
													<ComprobationTable/>
												</div>
												
												<h2>REGISTRO DE RESPUESTAS</h2>
												<div>
													<ResumeTable data={totalValues} />
												</div>
												<h2>RESULTADO DE LA INSPECCIÓN</h2>
												<div>
													<table className={styles.tableContent}>
														<tr className={styles.row} >
															<td>Vulnerabilidad física del depósito</td>
															<td style={{fontWeight: 800}}>{results.vulnerability}</td>
														</tr>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
					<div className={styles.buttonContainer}>
						{page === 0 && (
							<>
								<Button
									variant="outlined"
									onClick={() => {
										handleCancel();
										handleClick();
									}}
								>
									<div className={styles.buttonText}>CANCELAR</div>
								</Button>
								<Button
									variant="contained"
									onClick={() => {
										handleNext();
									}}
									endIcon={<img src={arrow} />}
								>
									<div className={styles.buttonText}>SIGUIENTE</div>
								</Button>
							</>
						)}
						{page === 1 && (
							<>
								<Button
									variant="outlined"
									onClick={() => {
										handleCancel();
										handleClick();
									}}
									startIcon={<KeyboardBackspaceIcon />}
									disabled={loading}
								>
									<div className={styles.buttonText}>VOLVER</div>
								</Button>
								<Button
									variant="contained"
									onClick={() => {
										handleNext();
										handleClick();
									}}
									endIcon={<img src={arrow} />}
									disabled={loading}
								>
									<div className={styles.buttonText}>ENVIAR INFORMACIÓN</div>
								</Button>
							</>
						)}
						
					</div>
				</div>
				{openModal && (
					<Popup
						handleClose={handleOpenModal}
						open={openModal}
						handlePost={handlePost}
					/>
				)}
				{openModalCuation && (
					<PopupCuation
						handleClose={handleOpenModalCuation}
						open={openModalCuation}
					/>
				)}
			</div>
		</>
	);
}
