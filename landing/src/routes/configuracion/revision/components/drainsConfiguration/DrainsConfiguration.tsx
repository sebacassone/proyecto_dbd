/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import { useState } from 'react';
import DrainsTable from './components/DrainsTable';

import * as step5 from './useApi';

import styles from './DrainsConfiguration.module.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Profiles {
	data: {
		idDrain: number;
		drainName: string;
	}[];
	savedDrains: {
		nameWall: string;
		idWall: string;
		idSector: string;
		nameSector: string;
		drains: string[];
	}[]
}
export default function DrainsConfiguration({
	data,
	savedDrains,
}: Profiles) {
	console.log(savedDrains)
	const auxSectors = [...savedDrains];
	
	const [drainsConfig, setDrains] = useState(auxSectors);



	return (
		<div className={styles.generalContainer}>
			<div>
				<DrainsTable
					data={data}
					sectors={drainsConfig}
					disabled={true}
				/>
			</div>
		</div>
	);
}
