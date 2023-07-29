import * as React from 'react';
import styles from './EvaluationCard.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface EvaluationCardProps {
	result: (value: string) => void;
	data: FrantasticObject;
	option: string | (() => string);
}

interface FrantasticObject {
	title: string;
	options: { label: string; value: string }[];
}

export default function EvaluationCard({
	result,
	data,
	option,
}: EvaluationCardProps) {
	const [value, setValue] = React.useState(option);

	React.useEffect(() => {
		setValue(option);
	}, [option]);

	
	const options = data.options;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
		result((event.target as HTMLInputElement).value);
	};

	return (
		<div className={styles.general}>
			<div className={styles.titleContainer}>{data.title}</div>
			<div className={styles.options}>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={value}
					onChange={handleChange}
				>
					{options.map(
						(datos: { label: string; value: string }, index: number) => (
							<FormControlLabel
								value={datos.value}
								key={index}
								control={<Radio />}
								label={<div className={styles.selectText}>{datos.label}</div>}
								sx={{
									'@media (prefers-color-scheme: dark)': {
										'& .MuiTypography-root': { color: '#000000' },
									},
								}}
							/>
						)
					)}
				</RadioGroup>
			</div>
		</div>
	);
}
