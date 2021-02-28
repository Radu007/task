import React from 'react'

import './Footer.sass'
function Footer() {
	const handleClick = (e) => {
		e.preventDefault()
	}
	return (
		<footer className="footer">
			<div className="footer-content">
				<h3 className="footer-content-title">Abonează-te la Newsletter</h3>
				<h6 className="footer-content-subtitle">Pentru a fi la curent cu ultimile noutăți ale comunității noastre</h6>
				<form action="#" method="#" className='footer-form'>
					<input type="text" placeholder="Adresa de Email" className='footer-form-input'/>
					<button onClick={handleClick} className='button primary'>Abonează-mă</button>
				</form>
				<div className="footer-social-nav">
					<a href="https://facebook.com"><img src="./images/logo1.png" alt=""/></a>
					<a href="https://youtube.com"><img src="./images/logo2.png" alt=""/></a>
					<a href="https://instagram.com"><img src="./images/logo3.png" alt=""/></a>
				</div>

				<h6 className='copyright'>&#169; 2020, MentorMe</h6>
			</div>
		</footer>
	)
}

export default Footer
