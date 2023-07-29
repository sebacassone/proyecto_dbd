import styles from './TopBar.module.css';
import libro from './media/libro.svg';
import avatar from './media/avatar.svg';

export const TopBar = () => {


	return (
		<>
			<div className={styles.fondo}>
				<div className={styles.container}>
					<div className={styles.logoContainer}>
						<img src={libro} height={'54px'} />
						<div className={styles.logoText}>
							Libreria de <br/>Libros
						</div>
					</div>
					
					<div>
						<div className={styles.buttonContainer}>
							<div className={styles.componedButton}>
								<div>Usuario Sexy</div>
								<div className={styles.rounded}>
									<img src={avatar} height={'40px'} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
