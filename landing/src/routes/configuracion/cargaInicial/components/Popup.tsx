import styles from './Popup.module.css';
import close from './media/close.svg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

interface PopupProps {
	handleClose: () => void;
	open: boolean;
	action: (e: boolean) => void;
}
export default function Popup({ handleClose, open, action }: PopupProps) {
	return (
		<Modal open={open} onClose={handleClose}>
			<div className={styles.general}>
				<div className={styles.content}>
					<div className={styles.text}>
						<div className={styles.headerContainer}>
							<div className={styles.title}></div>
							<img
								className={styles.close}
								src={close}
								onClick={handleClose}
							></img>
						</div>
						<div className={styles.bodyContainer}>
							¿Seguro(a) que desea enviar?
						</div>
						<div className={styles.buttonContainer}>
							<Button variant="text" color="primary" onClick={handleClose}>
								<div className={styles.buttonCancel}>cancelar</div>
							</Button>
							<Button
								variant="text"
								onClick={() => {
									action(true);
									handleClose();
								}}
							>
								<div className={styles.buttonContinue}>SI, ESTOY SEGURO(A)</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
