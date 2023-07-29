/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './PlansAndMaps.module.css';
import upStream from './media/upStream.svg';
import info from './media/info.svg';
import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import axios from 'axios';
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface Title {
	titulo: string;
	cseId: string;
	linkToFile: string;
	setLink: (e: string) => void;
	sectorizacion: string;
	deposito: string;
}



export default function PlansAndMaps({titulo, cseId, linkToFile, setLink, sectorizacion, deposito}: Title, ) {


	const [file, setFile] = useState<File | string>("");
	const [north1, setNorth1] = useState("");
	const [north2, setNorth2] = useState("");
	const [south1, setSouth1] = useState("");
	const [south2, setSouth2] = useState("");

	const [loading, setLoading] = useState(false)

	const hiddenFileInput = useRef<HTMLInputElement | null>(null);

	const handleClick = () => {
	if (hiddenFileInput.current !== null) {
		hiddenFileInput.current.click();
	}
	};

	const handleChange = (fileChanged: File | null) => {
		if (fileChanged !== null) {
			const fileUploaded = fileChanged;
			setFile(fileUploaded);
		}
	  };
	const sendData = async () => {
		setLoading(true);

		if (north1 === "" || north2 === "" || south1 === "" || south2 === ""){
			alert("Se deben asignar los datos solicitados");
			setLoading(false)
			return
		}
		const url = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
		const apiUrl = url + "cse/maps/create"

		const sendValues = new FormData();
		sendValues.append('file', file);
		sendValues.append('id_cse', cseId);
		sendValues.append('coord_inf_izq_x', north1);
		sendValues.append('coord_inf_izq_y', south1);
		sendValues.append('coord_sup_der_x', north2);
		sendValues.append('coord_sup_der_y', south2);
		sendValues.append('plano', sectorizacion);
		sendValues.append('deposit_map', deposito);
		
		try {
			const { data } = await axios.post(apiUrl, sendValues);
			setLink(data.url);
			setLoading(false);
		}catch(error){
			alert("Se ha producido un error al subir el archivo");
			setLoading(false);
		}
	}

	return (
		<div className={styles.generalContainer}>
			<div className={styles.upStream}>
				<div className={styles.title}>{titulo}
				</div>
					<div className={styles.upStreamSection} onClick={handleClick}>
						{loading ? (
							<div style={{width: "24px"}}> 
								<div className={styles.rotate}><AutorenewIcon color="primary"/></div>
							</div>
						) : ( 
						<div className={styles.upStreamLogo}>
							<img src={upStream} />
						</div>
						)}
						{loading ? (
						<div className={styles.upsTreamText}>
							Subiendo archivo
						</div>
						) : (
						<>
						{file === "" || file === undefined ? (
						<div className={styles.upsTreamText}>
							<u className={styles.clickButton}>Click para subir</u> o arrastra
							hasta aquí
						</div>
						) : (
						<div className={styles.upsTreamText}>
							 {(file as File).name}
						</div>
						)} 
						
						</>
						)}					
						<div className={styles.typesImages}>
							SVG, PNG, JPG or GIF (max. 10MB)
						</div>
						
					</div>	
					<input
					type="file"
					ref={hiddenFileInput}
					onChange={(e) => handleChange(e.target.files && e.target.files[0])}
					style={{ display: 'none' }}
					disabled={loading}
					/>
					{linkToFile !== "" && (
					<div style={{marginTop: "10px"}} ><a className={styles.clickButton} href={linkToFile} target="_blank" rel="noreferrer"> <u>Ver archivo</u></a> </div>
					)}
				
			</div>
			
			<div className={styles.infoContainer}>
				<div className={styles.title}>Ingrese Coordenadas</div>
				<div className={styles.description}>
					<div>Vértice superior derecho:</div>
					<div className={styles.inputsContainer}>
						<TextField
							id="standard-basic"
							label="Norte (UTM)"
							variant="standard"
							sx={{ width: '120px' }}
							onChange={(e) => setNorth1(e.target.value)}
							disabled={loading || linkToFile !== ""}
						/>
						<TextField
							id="standard-basic"
							label="Este (UTM)"
							variant="standard"
							sx={{ width: '120px' }}
							onChange={(e) => setSouth1(e.target.value)}
							disabled={loading || linkToFile !== ""}
						/>
					</div>
				</div>
				<div className={styles.description2}>
					<div>Vértice inferior derecho:</div>
					<div className={styles.inputsContainer}>
						<TextField
							id="standard-basic"
							label="Norte (UTM)"
							variant="standard"
							sx={{ width: '120px' }}
							onChange={(e) => setNorth2(e.target.value)}
							disabled={loading || linkToFile !== ""}
						/>
						<TextField
							id="standard-basic"
							label="Este (UTM)"
							variant="standard"
							sx={{ width: '120px' }}
							onChange={(e) => setSouth2(e.target.value)}
							disabled={loading || linkToFile !== ""}
						/>
					</div>
				</div>
				<div className={styles.description3}>
					<img src={info} />
					<div className={styles.infoText}>
						Recuerda que se debe ingresar el sistema de referencia seleccionado
						al inicio de la configuración: PSAD56 UTM o WSG84 UTM
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<Button variant="text" sx={{ fontWeight: 600 }} disabled={loading || linkToFile !== ""} >
						CANCELAR
					</Button>
					<Button variant="outlined" sx={{ fontWeight: 600 }} onClick={() => void sendData()} disabled={loading || linkToFile !== ""}>
						GUARDAR
					</Button>
				</div>
			</div>
		</div>
	);
}
