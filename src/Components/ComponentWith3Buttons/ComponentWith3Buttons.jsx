import React, {useState} from 'react';
import Button from '../Button/Button';
import './ComponentWith3Buttons.sass'

const ComponentWith3Buttons = ({title,mainDescription}) => {
	const [tabIndex, setTabIndex] = useState(1);
	
	const tabsState = [{
		id: 1,
		image: './images/ThreeButtonsComponents/FirstThreeButtons/1.png',
		description: 'Planuri pentru studii sau carieră'
	}, {
		id: 2,
		image: './images/ThreeButtonsComponents/FirstThreeButtons/1.png',
		description: 'Oportunități pentru dezvoltare personală, experiență și lecțiile învățate de mentori'
	}, {
		id: 3,
		image: './images/ThreeButtonsComponents/FirstThreeButtons/1.png',
		description: 'Acces la platforma de cursuri online create de experți din diverse industrii'
	}]

	function findById(source, id) {
  for (let i = 0; i < source.length; i++) {
    if (source[i].id === id) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

const filteredTabContent = findById(tabsState, tabIndex)

console.log(filteredTabContent);

	// const findTabContent = (neededID, id) => {
  //   const tabReturned = neededID && neededID.find(function(tabContent, index) {
  //     return tabContent.id === id
  //   })
  //   return tabReturned
	// }

	// const neededContent = findTabContent(tabsState, tabIndex)
	// console.log(neededContent);


	return (
		<div className="three-buttons">
			<h1 className="three-buttons-title">{title}</h1>

			{mainDescription ? 
			<p className='three-buttons-description'>{mainDescription}</p> : 
			<p style={{display: 'none'}} className='three-buttons-description'>{mainDescription}</p>}

			<div className={tabIndex === filteredTabContent.id ? "content content-active" : "content"}>
				<div className='content-wrapper'>
				<img className="content-wrapper_img" src={filteredTabContent.image} alt=""/>
				<p className="content-wrapper_description">{filteredTabContent.description}</p>
			</div>
			</div>

			<div className="buttons-wrapper">
				<Button onClick={() => setTabIndex(1)} buttonText={'1.'} backgroundColor={tabIndex === 1 ? 'gray' : 'light'} className='button button-light-gray' width='190px' height='136px' fontSize='80px'/>
				<Button onClick={() => setTabIndex(2)} buttonText={'2.'} backgroundColor={tabIndex === 2 ? 'gray' : 'light'} className='button button-light-gray' width='190px' height='136px' fontSize='80px'/>
				<Button onClick={() => setTabIndex(3)} buttonText={'3.'} backgroundColor={tabIndex === 3 ? 'gray' : 'light'} className='button button-light-gray' width='190px' height='136px' fontSize='80px'/>
			</div>
		</div>
	)
}

export default ComponentWith3Buttons