/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ProfileTable from './components/ProfileTable';

import styles from './ProfileConfiguration.module.css';


interface Profiles {
	data: {
		id: string;
		topographic_profile: string;
	}[];
	sectors: {
		detail: string;
		sectors: { id: string; name: string }[];
		idWall: string;
		nameWall: string;
	}[];
}

export default function WallConfiguration({
	data,
	sectors,
}: Profiles) {
	const [active, setActive] = useState(0);


	
	return (
		<div>
			<div className={styles.tabs}>
				<Tabs
					value={active}
					onChange={() => ''}
					variant="fullWidth"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
				>
					{sectors.map((datos, index: number) => (
						<>
							<Tab label={datos.nameWall} onClick={() => setActive(index)}/>
						</>
					))}
				</Tabs>
			</div>
			<div>
				{sectors.map((_datos: any, index: number) => (
					<>
						{active === index && (
							<ProfileTable
								data={data}
								sectors={sectors[index]}

							/>
						)}
					</>
				))}
			</div>
			
		</div>
	);
}
