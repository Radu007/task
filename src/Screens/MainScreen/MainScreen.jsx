import React from 'react'
import Button from '../../Components/Button/Button'
import ComponentWith3Buttons from '../../Components/ComponentWith3Buttons/ComponentWith3Buttons'
import SomeStatistics from '../../Components/SomeStatistics/SomeStatistics'
import './MainScreen.sass'

function MainScreen() {
	return (
		<div className="main-screen">
			<div className="main">
				<h1 className='main-screen-title'>Primul program de mentorat din Moldova</h1>
				<p className='main-screen-description'>Conectăm și ajutăm <strong>gratuit</strong> tinerii să-și urmeze studiile peste hotare, să-și accelereze dezvoltarea profesională și să identifice noi oportunități de afaceri.</p>
				<Button className='button' buttonText={'Join Us'} backgroundColor={'gray'} width='298px' height='94px' fontSize='32px'/>
			</div>
			<ComponentWith3Buttons title={'În ce constă programul?'} mainDescription={'Programul de mentorat constă în discuții, tête-à-tête sau virtuale, dintre un mentor și un mentee, în care pot fi abordate următoarele subiecte:'}/>
			<SomeStatistics />
		</div>
	)
}

export default MainScreen
