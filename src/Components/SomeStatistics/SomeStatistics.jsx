import React from 'react'
import Button from '../Button/Button'
import './SomeStatistics.sass'

function SomeStatistics() {

	const statistics = [{
			title: '100+',
			subtitle: 'mentori'
		}, {
			title: '700+',
			subtitle: 'conexiuni',
		}, {
			title: 'Câteva statistici ale programului nostru de mentorat',
			subtitle: ''
		}, {
			title: '24+',
			subtitle: 'țări'
		}, {
			title: '100+',
			subtitle: 'orașe'
		}, {
			title: '100+',
			subtitle: 'universități'
		}
	];

	return (
		<div className='statistics'>
			{statistics.map((statistic) => (
				<div className={statistic.title.length > 5 ? 'statistics-wrapper-text' : 'statistics-wrapper'}>
					<h1 className={statistic.title.length > 5 ? 'statistics-wrapper-text' : 'statistics-wrapper_title'}>{statistic.title}</h1>
					<p className='statistics-wrapper_subtitle'>{statistic.subtitle}</p>
				</div>
			))}



			
		</div>
	)
}

export default SomeStatistics
