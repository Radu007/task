import React, {useState} from 'react';
import Button from '../Button/Button';
import './ComponentWith3Buttons.sass'

const ComponentWith3Buttons = ({title,mainDescription}) => {
	const [activeTab, setActiveTab] = useState(1);
	
	const tabsState = [{
		id: '1',
		image: './images/ThreeButtonsComponents/FirstThreeButtons/1.png',
		description: '1Planuri pentru studii sau carieră'
	}, {
		id: '2',
		image: './images/ThreeButtonsComponents/FirstThreeButtons/1.png',
		description: '2Planuri pentru studii sau carieră'
	}, {
		id: '3',
		image: './images/ThreeButtonsComponents/FirstThreeButtons/1.png',
		description: '3Planuri pentru studii sau carieră'
	}]


	const findTabContent = (neededID, id) => {
    const tabReturned = neededID && neededID.find(function(tabContent, index) {
      return tabContent.id = id
    })
    return tabReturned
  }

	const neededContent = findTabContent(tabsState, activeTab)
	console.log(neededContent);
	console.log(activeTab);

	return (
		<div className="three-buttons">
			<h1 className="three-buttons-title">{title}</h1>

			{mainDescription ? 
			<p className='three-buttons-description'>{mainDescription}</p> : 
			<p style={{display: 'none'}} className='three-buttons-description'>{mainDescription}</p>}

			<div className={activeTab === neededContent.id ? "content content-active" : "content"}>
				<div className='content-wrapper'>
				<img className="content-wrapper_img" src={neededContent.image} alt=""/>
				<p className="content-wrapper_description">{neededContent.description}</p>
			</div>
			</div>

			<div className="buttons-wrapper">
				<Button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "tab active-tab" : "tab"} buttonText={'1.'} backgroundColor={'rgba(207, 206, 206, 0.4)'} width='190px' height='136px' fontSize='80px'/>
				<Button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "tab active-tab" : "tab"} buttonText={'2.'} backgroundColor={'rgba(207, 206, 206, 0.4)'} width='190px' height='136px' fontSize='80px'/>
				<Button onClick={() => setActiveTab(3)} className={activeTab === 3 ? "tab active-tab" : "tab"} buttonText={'3.'} backgroundColor={'rgba(207, 206, 206, 0.4)'} width='190px' height='136px' fontSize='80px'/>
			</div>
		</div>
	)
}

export default ComponentWith3Buttons