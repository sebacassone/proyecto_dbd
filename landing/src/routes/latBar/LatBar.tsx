/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from './LatBar.module.css';
import useMenu from './useMenu';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import logoTranque from './media/logoTranque.svg';
import menuLogo from './media/menu.svg';
import arrow from './media/arrow.svg';

export const LatBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menu, setMenu] = useState(useMenu);

	const toggleMenu = (index: number) => {
		const auxMenu = menu.map((item, i) => {
			if (i === index) {
				return {
					...item,
					toggled: !item.toggled,
				};
			} else if (item.toggled) {
				return {
					...item,
					toggled: false,
				};
			} else {
				return item;
			}
		});
		setMenu(auxMenu);
	};

	const handleOpen = () => {
		toggleMenu(-1);
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	interface NewType {
		subMenu: {
			name: string;
			link: string;
		}[];
		logo: string;
		name: string;
		toggled: boolean;
		link: string;
	}

	interface NewType1 {
		subMenu: boolean;
		logo: string;
		name: string;
		toggled: boolean;
		link: string;
	}

	return (
		<>
			<div
				className={
					styles.fondoDummy + (isOpen ? ' ' + styles.fondoOpenDummy : '')
				}
			>
				<div className={styles.fondo + (isOpen ? ' ' + styles.fondoOpen : '')}>
					<div className={styles.logoTranque} onClick={handleClick}>
						<img src={logoTranque} height={'32px'}></img>
					</div>
					<div className={styles.logoMenu} onClick={() => handleOpen()}>
						<img src={menuLogo} height={'16px'}></img>
					</div>
					<div className={styles.items}>
						{menu.map((data: NewType1 | NewType, index: number) => {
							return (
								<Link
									to={data.subMenu ? '#' : data.link}
									onClick={() => {
										isOpen ? (data.subMenu ? '' : handleOpen()) : '';
									}}
									key={index}
								>
									<div
										className={isOpen ? styles.itemOpen : styles.item}
										onClick={() => {
											isOpen
												? typeof data.subMenu !== 'boolean'
													? toggleMenu(index)
													: ''
												: (handleOpen(),
												typeof data.subMenu !== 'boolean'
														? toggleMenu(index)
														: '');
										}}
									>
										<div className={styles.itemLogo}>
											<img src={data.logo} height={'24px'} />
											
										</div>
										<div
											className={isOpen ? styles.infoOpen : styles.infoClosed}
										>
											<div> {data.name} </div>
											{typeof data.subMenu !== 'boolean' && (
												<div
													className={
														data.toggled
															? styles.arrowContainerOpen
															: styles.arrowContainer
													}
												>
													<img src={arrow} width={'10px'} />
												</div>
											)}
										</div>
									</div>

									<div
										className={
											data.toggled ? styles.accordeonOpen : styles.accordeon
										}
									>
										{typeof data.subMenu !== 'boolean' && (
											<div className={styles.subMenuSx}>
												{data.subMenu.map(
													(
														datos: {
															name: string;
															link: string;
															separator?: boolean;
														},
														menuIndex: number
													) => (
														<Link
															to={datos.link}
															key={menuIndex}
															onClick={() => {
																isOpen
																	? typeof data.subMenu !== 'boolean'
																		? (toggleMenu(index), handleOpen())
																		: ''
																	: (handleOpen(),
																		typeof data.subMenu !== 'boolean'
																			? toggleMenu(index)
																			: '');
															}}
														>	
														{datos.separator ? (
															<div className={styles.separatorText}> 
																{datos.name}
															</div>
															) : (
															<div className={styles.subMenuOpen}>
																<KeyboardArrowRightIcon />
																{datos.name}
															</div>
															)}
															
														</Link>
													)
												)}
											</div>
										)}
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
