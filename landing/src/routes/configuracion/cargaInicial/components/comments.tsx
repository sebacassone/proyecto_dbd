import { Button, TextField } from '@mui/material';
import styles from '../CargaInicial.module.css';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Comment = () => {
	return (
		<div className={styles.general}>
			<div className="container" style={{ color: 'black' }}>
				<div className={styles.container}>
					<div className={styles.table3}>
						<div className={styles.tableContent}>
							<div style={{ textAlign: 'left', backgroundColor: '#f6f6f8' }}>
								<MessageOutlinedIcon style={{ color: '#1976d1' }} />
							</div>

							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									marginTop: '20px',
								}}
							>
								<TextField
									sx={{ width: '100%', maxWidth: 'auto' }}
									id="standard-basic"
									label="Insertar comentario"
									variant="standard"
								/>
								<Button
									sx={{ minWidth: '150px' }}
									startIcon={<SendOutlinedIcon />}
									variant="outlined"
								>
									Enviar
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Comment;
