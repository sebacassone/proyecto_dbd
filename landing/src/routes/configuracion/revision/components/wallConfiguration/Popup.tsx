import styles from './Popup.module.css';
import alert from './media/alert.svg';
import close from './media/close.svg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

interface PopupProps {
	handleClose: () => void;
	action: () => void;
	open: boolean;
}
export default function Popup({ handleClose, open, action }: PopupProps) {
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
							¿Seguro que desea eliminar este elemento?, puede que tega otras
							dependencias dentro de la CSE
						</div>
						<div className={styles.buttonContainer}>
							<Button variant="text" color="primary" onClick={handleClose}>
								<div className={styles.buttonCancel}>cancelar</div>
							</Button>
							<Button
								variant="text"
								onClick={() => {
									action();
									handleClose();
								}}
							>
								<div className={styles.buttonContinue}>Continuar</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
