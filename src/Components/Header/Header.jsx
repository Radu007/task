import React from 'react'
import './Header.sass'
import Button from '../Button/Button'

const Header = () => {

	return (
		<div className='header'>
			<img className='header_logo' src="./images/Logo.png" alt=""/>

			<ul className="header-list">
				<li className="header-list_item"><a href="#">Acasă</a></li>
				<li className="header-list_item"><a href="#">Despre Noi</a></li>
				<li className="header-list_item"><a href="#">Blog</a></li>
				<li className="header-list_item"><a href="#">FAQ</a></li>
				<li className="header-list_item"><a href="#">Contact</a></li>
			</ul>
			<Button buttonText={'Join Us'} backgroundColor={'white'} className={'button'} border={'bordered'} width='190px' height='60px' fontSize='24px'/>
		</div>
	)
}

export default Header
