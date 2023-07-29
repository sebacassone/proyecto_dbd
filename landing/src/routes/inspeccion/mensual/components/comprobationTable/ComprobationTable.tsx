/* eslint-disable @typescript-eslint/restrict-plus-operands */
import styles from './ComprobationTable.module.css';


export default function ComprobationTable() {

	const newDate = new Date()
	const date = newDate.getDate();
	const month = newDate.getMonth() + 1 < 10 ? ("0" + (newDate.getMonth() + 1)) : newDate.getMonth() + 1
	const year = newDate.getFullYear();
	const today = new Date();
	const time =
		today.getHours() +
		':' +
		(today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());

	return (
		<table className={styles.table}>
			<tr className={styles.masterRow}>
				<th>Datos del comprobante</th>
				<th></th>
			</tr>
			<tr className={styles.row}>
				<td>Fecha de Evaluación</td>
				<td>{date}/{month}/{year} {time}</td>
			</tr>
			<tr className={styles.row}>
				<td>Estado</td>
				<td>Realizada</td>
			</tr>
			<tr className={styles.row}>
				<td>Usuario</td>
				<td>TEST_MINER1</td>
			</tr>
			<tr className={styles.row}>
				<td>Datos registrados</td>
				<td>9</td>
			</tr>
		</table>
	);
}

