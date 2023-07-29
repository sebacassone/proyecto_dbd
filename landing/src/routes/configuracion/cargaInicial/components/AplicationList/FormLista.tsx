/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../../CargaInicial.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RampLeftIcon from '@mui/icons-material/RampLeft';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Input } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

interface Formlista {
	nextPage: () => void;
	data:
		| any
		| {
				id_cse: string;
				m1: {
					'Design Diviations': {
						internal_id: string;
						name: string;
						have_comment: boolean;
						comment: string;
					}[];
					'Trigger Events': {
						internal_id: string;
						name: string;
						have_comment: boolean;
						comment: string;
					}[];
					'Weather Forecasts': {
						internal_id: string;
						name: string;
						have_comment: boolean;
						comment: string;
					}[];
				};
		};
	setData: (e: any) => void;
}
const FormLista = ({ nextPage, data, setData }: Formlista) => {
	const [value, setValue] = React.useState(0);

	const label = { inputProps: { 'aria-label': 'Switch demo' } };

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleSwitch = (e: boolean, index: number, type: number) => {
		const aux = { ...data };
		if (type === 1) {
			aux.m1['Design Diviations'][index].have_comment = !e;
			setData(aux);
		}
		if (type === 2) {
			aux.m1['Trigger Events'][index].have_comment = !e;
			setData(aux);
		}
		if (type === 3) {
			aux.m1['Weather Forecasts'][index].have_comment = !e;
			setData(aux);
		}
	};

	const handleComment = (
		providedComment: string,
		index: number,
		type: number
	) => {
		const aux = { ...data };
		if (type === 1) {
			aux.m1['Design Diviations'][index].comment = providedComment;
			setData(aux);
		}
		if (type === 2) {
			aux.m1['Trigger Events'][index].have_comment = providedComment;
			setData(aux);
		}
		if (type === 3) {
			aux.m1['Weather Forecasts'][index].have_comment = providedComment;
			setData(aux);
		}
	};

	return (
		<div className={styles.general}>
			<div className="container" style={{ color: 'black' }}>
				<div className={styles.container}>
					<div className={styles.table}>
						<div className={styles.tableContent}>
							<Box sx={{ width: '100%' }}>
								<Tabs value={value} onChange={handleChange}>
									<Tab
										sx={{ width: '33%' }}
										label={
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<RampLeftIcon style={{ marginRight: '10px' }} />{' '}
												Desviaciones
											</div>
										}
										{...a11yProps(0)}
									/>

									<Tab
										sx={{ width: '33%' }}
										label={
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<ReportProblemOutlinedIcon
													style={{ marginRight: '10px' }}
												/>{' '}
												Gatilladores
											</div>
										}
										{...a11yProps(1)}
									/>

									<Tab
										sx={{ width: '33%' }}
										label={
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<FilterDramaOutlinedIcon
													style={{ marginRight: '10px' }}
												/>{' '}
												meteorología
											</div>
										}
										{...a11yProps(2)}
									/>
								</Tabs>

								<TabPanel value={value} index={0}>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell
													sx={{
														color: '#01579B',
														fontWeight: 500,
														minWidth: '40px',
													}}
												>
													ID
												</TableCell>
												<TableCell
													align="left"
													sx={{ color: '#01579B', fontWeight: 500 }}
												>
													Desviación del Diseño
												</TableCell>
												<TableCell
													align="left"
													sx={{ color: '#01579B', fontWeight: 500 }}
												>
													Seleccionar
												</TableCell>
												<TableCell
													align="left"
													sx={{ color: '#01579B', fontWeight: 500 }}
												>
													Comentarios
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{data.m1['Design Diviations'].map(
												(
													row: {
														internal_id: string;
														name: string;
														have_comment: boolean;
														comment: string;
													},
													index: number
												) => (
													<TableRow
														key={row.name}
														sx={{
															'&:last-child td, &:last-child th': { border: 0 },
														}}
													>
														<TableCell scope="row">{row.internal_id}</TableCell>
														<TableCell align="left">{row.name}</TableCell>
														<TableCell align="left">
															<Switch
																{...label}
																checked={!row.have_comment}
																onChange={() =>
																	handleSwitch(row.have_comment, index, 1)
																}
															/>
														</TableCell>
														<TableCell align="left">
															<Input
																multiline
																placeholder="vacio"
																maxRows={4}
																value={row.comment}
																inputProps={ariaLabel}
																disabled={!row.have_comment}
																onChange={(e) =>
																	handleComment(e.target.value, index, 1)
																}
															/>
														</TableCell>
													</TableRow>
												)
											)}
										</TableBody>
									</Table>
								</TabPanel>

								<TabPanel value={value} index={1}>
									<TableContainer component={Paper}>
										<Table sx={{ minWidth: 650 }} aria-label="simple table">
											<TableHead>
												<TableRow>
													<TableCell
														sx={{
															color: '#01579B',
															fontWeight: 500,
															minWidth: '38px',
														}}
													>
														ID
													</TableCell>
													<TableCell
														align="left"
														sx={{ color: '#01579B', fontWeight: 500 }}
													>
														Desviación del Diseño
													</TableCell>
													<TableCell
														align="left"
														sx={{ color: '#01579B', fontWeight: 500 }}
													>
														Seleccionar
													</TableCell>
													<TableCell
														align="left"
														sx={{ color: '#01579B', fontWeight: 500 }}
													>
														Comentarios
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{data.m1['Trigger Events'].map(
													(
														row: {
															internal_id: string;
															name: string;
															have_comment: boolean;
															comment: string;
														},
														index: number
													) => (
														<TableRow
															key={row.name}
															sx={{
																'&:last-child td, &:last-child th': {
																	border: 0,
																},
															}}
														>
															<TableCell component="th" scope="row">
																{row.internal_id}
															</TableCell>
															<TableCell align="left">{row.name}</TableCell>
															<TableCell align="left">
																<Switch
																	{...label}
																	checked={!row.have_comment}
																	onChange={() =>
																		handleSwitch(row.have_comment, index, 2)
																	}
																/>
															</TableCell>
															<TableCell align="left">
																<Input
																	multiline
																	placeholder="vacio"
																	maxRows={4}
																	inputProps={ariaLabel}
																	disabled={!row.have_comment}
																	onChange={(e) =>
																		handleComment(e.target.value, index, 2)
																	}
																/>
															</TableCell>
														</TableRow>
													)
												)}
											</TableBody>
										</Table>
									</TableContainer>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<TableContainer component={Paper}>
										<Table sx={{ minWidth: 650 }} aria-label="simple table">
											<TableHead>
												<TableRow>
													<TableCell
														sx={{
															color: '#01579B',
															fontWeight: 500,
															minWidth: '38px',
														}}
													>
														ID
													</TableCell>
													<TableCell
														align="left"
														sx={{ color: '#01579B', fontWeight: 500 }}
													>
														Desviación del Diseño
													</TableCell>
													<TableCell
														align="left"
														sx={{ color: '#01579B', fontWeight: 500 }}
													>
														Seleccionar
													</TableCell>
													<TableCell
														align="left"
														sx={{ color: '#01579B', fontWeight: 500 }}
													>
														Comentarios
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{data.m1['Weather Forecasts'].map(
													(
														row: {
															internal_id: string;
															name: string;
															have_comment: boolean;
															comment: string;
														},
														index: number
													) => (
														<TableRow
															key={row.name}
															sx={{
																'&:last-child td, &:last-child th': {
																	border: 0,
																},
															}}
														>
															<TableCell component="th" scope="row">
																{row.internal_id}
															</TableCell>
															<TableCell align="left">{row.name}</TableCell>
															<TableCell align="left">
																<Switch
																	{...label}
																	checked={!row.have_comment}
																	onChange={() =>
																		handleSwitch(row.have_comment, index, 3)
																	}
																/>
															</TableCell>
															<TableCell align="left">
																<Input
																	multiline
																	placeholder="vacio"
																	maxRows={4}
																	inputProps={ariaLabel}
																	disabled={!row.have_comment}
																	onChange={(e) =>
																		handleComment(e.target.value, index, 3)
																	}
																/>
															</TableCell>
														</TableRow>
													)
												)}
											</TableBody>
										</Table>
									</TableContainer>
								</TabPanel>
							</Box>
						</div>
						<div className={styles.buttons}>
							<Button
								variant="outlined"
								sx={{ fontWeight: 600 }}
								onClick={() => ''}
								startIcon={<DraftsOutlinedIcon />}
							>
								Guardar
							</Button>
							<Button
								variant="outlined"
								sx={{ fontWeight: 600 }}
								startIcon={<ArrowBackOutlinedIcon />}
								onClick={() => setValue(value - 1)}
								disabled={value === 0}
							>
								anterior
							</Button>
							{value === 2 ? (
								<Button
									variant="contained"
									sx={{ fontWeight: 600 }}
									onClick={() => {
										handleClick();
										nextPage();
									}}
								>
									<div className={styles.buttonText}>FINALIZAR</div>
								</Button>
							) : (
								<Button
									variant="contained"
									sx={{ fontWeight: 600 }}
									endIcon={<ArrowForwardIosOutlinedIcon />}
									onClick={() => setValue(value + 1)}
								>
									siguiente
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FormLista;
