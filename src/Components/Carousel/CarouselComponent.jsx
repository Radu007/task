import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselComponent.sass'

function CarouselComponent() {
	const itemData = [{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit psum dolor.',
		date: '17 Decembrie 2020 • 5 min ',
	},{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit psum dolor.',
		date: '17 Decembrie 2020 • 5 min '
	},{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit psum dolor.',
		date: '17 Decembrie 2020 • 5 min '
	},{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit psum dolor.',
		date: '17 Decembrie 2020 • 5 min '
	},{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit psum dolor.',
		date: '17 Decembrie 2020 • 5 min '
	},{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit psum dolor.',
		date: '17 Decembrie 2020 • 5 min '
	}
]

	const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
		items: 5,
		slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1
  }
};
	return (
		<div className="carousel">
		<h1 className='carousel-title'>Ultimele interviuri</h1>
			<div>
					<Carousel
					responsive={responsive}
					infinite={true}
					keyBoardControl={true}
					removeArrowOnDeviceType={["tablet", "mobile"]}
					draggable={false}
					containerClass="carousel-container"
					itemClass="carousel-item"
					>
					
				{itemData.map((element, index) => (
					<div className="card-wrapper">
						<div className="card">
							<img src="./images/Carousel/play.png" alt="" className="play-button"/>
						</div>
						<div className="card-content">
							<h3 className='card-title'>{element.title}</h3>
							<p className="card-subtitle">{element.subtitle}</p>
							<p className="card-date">{element.date}</p>
						</div>
					</div>
				))}

					</Carousel>	
			</div>
		</div>
		
	)
}

export default CarouselComponent
