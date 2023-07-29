import styles from './ResumeTable.module.css';

interface Datavalues {
	data: {
		value1?: string;
		value2?: string;
		value3?: string;
		value4?: string;
		value5?: string;
		value6?: string;
		value7?: string;
		value8?: string;
		value9?: string;
	};
}

export default function ResumeTable({ data }: Datavalues) {
	return (
		<table className={styles.table}>
			<tr className={styles.masterRow}>
				<th>Resumen</th>
				<th>Opción seleccionada</th>
			</tr>
			<tr className={styles.row}>
				<td>Estado del depósito</td>
				<td className={styles.leftTd}>{data.value1}</td>
			</tr>
			<tr className={styles.row}>
				<td>Tipo de relave</td>
				<td className={styles.leftTd}>{data.value2}</td>
			</tr>
			<tr className={styles.row}>
				<td>Método constructivo del muro del depósito</td>
				<td className={styles.leftTd}>{data.value3}</td>
			</tr>
			<tr className={styles.row}>
				<td>Modelo de gobernanza</td>
				<td className={styles.leftTd}>{data.value4}</td>
			</tr>
			<tr className={styles.row}>
				<td>Instrumentación operativa</td>
				<td className={styles.leftTd}>{data.value5}</td>
			</tr>
			<tr className={styles.row}>
				<td>Exposición a crecidas de ríos y/o aluviones</td>
				<td className={styles.leftTd}>{data.value6}</td>
			</tr>
			<tr className={styles.row}>
				<td>Exposición a acumulaciones de escorrentías</td>
				<td className={styles.leftTd}>{data.value7}</td>
			</tr>
			<tr className={styles.row}>
				<td>Exposición a remoción en masas del terreno natural</td>
				<td className={styles.leftTd}>{data.value8}</td>
			</tr>
			<tr className={styles.row}>
				<td>Diseño actualizado (si ha estado sujeto a modificaciones durante la construcción)</td>
				<td className={styles.leftTd}>{data.value9}</td>
			</tr>
		</table>
	);
}
