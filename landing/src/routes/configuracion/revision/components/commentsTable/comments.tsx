import { Button, TextField } from '@mui/material';
import styles from './comments.module.css';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from 'react';


interface CommentInterface {
	data: string[], 
	sendComment: ((e: string) => void),
	setData: React.Dispatch<React.SetStateAction<string[]>>;
	disabled: boolean;
}

const Comment = ({data, setData, sendComment, disabled}: CommentInterface ) => {

	const [currentComment, setCurrent] = useState("");


	const handleNewMessage = () => {
		const aux = [...data];
		aux.push(currentComment)
		setData(aux)
		setCurrent("");
		console.log(aux)
	}	

	return (
		<div className={styles.general}>
			<div className="container" style={{ color: 'black' }}>
				
					<div className={styles.table3}>
						<div className={styles.tableContent}>
							<div style={{ textAlign: 'left', backgroundColor: '#f6f6f8', gap: "10px", display: "flex", padding: "5px" }}>
								<MessageOutlinedIcon style={{ color: '#01579B' }} fontSize={"inherit"} sx={{fontSize: "32px"}} />
								<div style={{fontSize: "20px", fontWeight: 700, color: "#01579B"}}>Comentarios</div>
							</div>
							<div className={styles.commentsContainer}> 
								{data.map((data) => ( 
									<div className={styles.commentContainer}> 
										<div className={styles.commentHeader}>test_miner3 20-04-2023 16:20:03</div>
										<div className={styles.commentBody}> {data}</div>
									</div>
								))}
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									marginTop: '20px',
									gap: "4px"
								}}
							>
								<TextField
									sx={{ width: '100%', maxWidth: 'auto' }}
									id="standard-basic"
									label={disabled ? "No disponible hasta rechazar el paso" : "Insertar comentario"}
									value={currentComment}
									variant="standard"
									onChange={(e) => setCurrent(e.target.value)}
									disabled={disabled}
								/>
								<Button
									sx={{ minWidth: '100px' }}
									startIcon={<SendOutlinedIcon />}
									variant="outlined"
									onClick={() => { if(currentComment !== ""){handleNewMessage(); sendComment(currentComment)}}}
									disabled={disabled}
								>
									Enviar
								</Button>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	);
};
export default Comment;
