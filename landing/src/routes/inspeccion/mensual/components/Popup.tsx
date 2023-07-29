/* eslint-disable @typescript-eslint/no-misused-promises */
import styles from './Popup.module.css';
import alert from './media/alert.svg';
import close from './media/close.svg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

interface PopupProps {
	handleClose: () => void;
	open: boolean;
	handlePost: () => Promise<void>;
}

export default function Popup({ handleClose, open, handlePost }: PopupProps) {
	return (
		<Modal open={open} onClose={handleClose}>
			<div className={styles.general}>
				<div className={styles.content}>
					<img className={styles.image} src={alert}></img>
					<div className={styles.text}>
						<div className={styles.headerContainer}>
							<div className={styles.title}>Atención</div>
							<img
								className={styles.close}
								src={close}
								onClick={handleClose}
							></img>
						</div>
						<div className={styles.bodyContainer}>
							Está a punto de enviar y cargar la información al sistema ¿Desea
							continuar?
						</div>
						<div className={styles.buttonContainer}>
							<Button variant="text" color="primary" onClick={handleClose}>
								<div className={styles.buttonCancel}>Cancelar</div>
							</Button>
							<Button variant="text" onClick={handlePost}>
								<div className={styles.buttonContinue}>Continuar</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
