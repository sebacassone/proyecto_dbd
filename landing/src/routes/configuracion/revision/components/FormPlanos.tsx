import styles from '../CargaInicial.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
	name: string,
	calories: string,
	fat: string,
	carbs: string,
	protein: string,
	extra: string
) {
	return { name, calories, fat, carbs, protein, extra };
}

const rows = [
	createData(
		'Muro sin sectorizacion',
		'ver plano',
		'Norte (UTM)',
		'Este (UTM)',
		'Norte (UTM)',
		'Este (UTM)'
	),
	createData(
		'Muro con sectorizacion',
		'ver plano',
		'Norte (UTM)',
		'Este (UTM)',
		'Norte (UTM)',
		'Este (UTM)'
	),
	createData(
		'Plano muro general',
		'ver plano',
		'Norte (UTM)',
		'Este (UTM)',
		'Norte (UTM)',
		'Este (UTM)'
	),
];
const FormPlanos = () => {
	return (
		<div>
			<div className={styles.general}>
				<div className="container" style={{ color: 'black' }}>
					<div className={styles.container}>
						<div className={styles.table2}>
							<div className={styles.tableContent}>
								<div className={styles.titleContainer}>
									<div className={styles.titleHeader}>Planos por Muros</div>
								</div>
								<TableContainer component={Paper}>
									<Table
										sx={{ minWidth: 650 }}
										aria-label="simple table"
										size={'small'}
									>
										<TableHead>
											<TableRow>
												<TableCell>Nombre</TableCell>
												<TableCell align="left">Plano</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{rows.map((row) => (
												<TableRow
													key={row.name}
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}
												>
													<TableCell
														component="th"
														scope="row"
														sx={{ fontSize: '11px' }}
													>
														{row.name}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														<u style={{color: "#03A9F4", cursor: "pointer"}}> {row.calories}</u>
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.fat}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.carbs}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.protein}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.extra}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
								<div className={styles.titleContainer}>
									<div className={styles.titleHeader}>Planos por deposito</div>
								</div>

								<TableContainer component={Paper}>
									<Table
										sx={{ minWidth: 650 }}
										size={'small'}
										aria-label="simple table"
									>
										<TableHead>
											<TableRow>
												<TableCell>Nombre</TableCell>
												<TableCell align="left">Plano</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
												<TableCell align="left">
													Vertice Superior Derecho
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{rows.map((row) => (
												<TableRow
													key={row.name}
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}
												>
													<TableCell
														component="th"
														scope="row"
														sx={{ fontSize: '11px' }}
													>
														{row.name}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														<u style={{color: "#03A9F4", cursor: "pointer"}}> {row.calories}</u>
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.fat}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.carbs}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.protein}
													</TableCell>
													<TableCell sx={{ fontSize: '11px' }} align="left">
														{row.extra}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FormPlanos;
