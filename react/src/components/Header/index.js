import React from 'react';

import logo from '../../assets/images/logo.png';

import './index.scss';

function Header() {
	return (
		<div className="flex justify-between w-100 header">
			<div className="flex flex-row header__left">
				<div className="header__menu">
					<span className="menu-lines"></span>
					<span className="menu-lines"></span>
					<span className="menu-lines"></span>
				</div>
				<div className="header__logo">
					<h2>XMS</h2>
				</div>
			</div>

			<div className="header__right">
				<div className="header__notifications"></div>
				<div className="header__account"></div>
			</div>
		</div>
	);
}

export default Header;