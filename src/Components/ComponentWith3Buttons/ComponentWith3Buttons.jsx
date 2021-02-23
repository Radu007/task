import React from 'react';
import Button from '../Button/Button';
import './ComponentWith3Buttons.sass'

const ComponentWith3Buttons = ({title,description	}) => {
	return (
		<div className="three-buttons">
			<h1 className="three-buttons-title">{title}</h1>
			<p className='three-buttons-description'>{description}</p>

			<div className="content-wrapper">
				<img className="content-wrapper_img" src="./images/ThreeButtonsComponents/FirstThreeButtons/1.png" alt=""/>
				<p className="content-wrapper_description">Planuri pentru studii sau carieră</p>
			</div>

			<div className="buttons-wrapper">
				<Button buttonText={'1.'} backgroundColor={'rgba(207, 206, 206, 0.4)'} width='190px' height='136px' fontSize='80px'/>
				<Button buttonText={'2.'} backgroundColor={'rgba(207, 206, 206, 0.4)'} width='190px' height='136px' fontSize='80px'/>
				<Button buttonText={'3.'} backgroundColor={'rgba(207, 206, 206, 0.4)'} width='190px' height='136px' fontSize='80px'/>
			</div>
		</div>
	)
}

export default ComponentWith3Buttons