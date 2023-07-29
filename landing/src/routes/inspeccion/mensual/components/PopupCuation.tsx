import styles from './Popup.module.css';
import alert from './media/alert.svg';
import close from './media/close.svg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

interface PopupProps {
	handleClose: () => void;
	open: boolean;
}

export default function PopupCuation({ handleClose, open}: PopupProps) {
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
							Para continuar, se necesita evaluar todos los casos propuestos.
						</div>
						<div className={styles.buttonContainer}>						
							<Button variant="text" onClick={handleClose}>
								<div className={styles.buttonContinue}>Aceptar</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
