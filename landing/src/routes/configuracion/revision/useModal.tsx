import { useState } from 'react';

const useModal = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal((prev) => !prev);
	};

	return {
		openModal,
		handleOpenModal,
	};
};

export default useModal;
