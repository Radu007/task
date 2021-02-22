import React from 'react'
import Button from '../../Components/Button/Button'
import './MainScreen.sass'

function MainScreen() {
	return (
		<div className="main-screen">
			<h1>Primul program de mentorat din Moldova</h1>
			<p>Conectăm și ajutăm <strong>gratuit</strong> tinerii să-și urmeze studiile peste hotare, să-și accelereze dezvoltarea profesională și să identifice noi oportunități de afaceri.</p>
			<Button className='button' buttonText={'Join Us'} backgroundColor={'#CFCECE'} width='298px' height='94px' fontSize='32px'/>
		</div>
	)
}

export default MainScreen
