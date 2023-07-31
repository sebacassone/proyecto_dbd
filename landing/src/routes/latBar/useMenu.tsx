import dashboard from './media/dashboard.svg';
import cerrarSesion from './media/cerrarSesion.svg';

import book from "./media/book.svg";
import account from "./media/account.svg";
import star from "./media/star.svg";



const menuItems = [
	{
		logo: dashboard,
		name: 'Dashboard',
		link: 'dashboard',
		subMenu: false,
		toggled: false,
	},
	{
		logo: star,
		name: 'Favoritos',
		link: 'datos',
		subMenu: false,
		toggled: false,
	},
	{
		logo: book,
		name: 'Mis libros',
		link: 'eventos',
		subMenu: false,
		toggled: false,
	},
	{
		logo: account,
		name: 'Mi cuenta',
		link: 'informacion',
		subMenu: false,
		toggled: false,
	},
	{
		logo: cerrarSesion,
		name: 'Cerrar sesión',
		link: '/',
		subMenu: false,
		toggled: false,
	},
];
export default function useMenu() {
	return menuItems;
}
