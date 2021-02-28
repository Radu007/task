import React from 'react'
import Button from '../Button/Button'
import './Footer.sass'
function Footer() {
	return (
		<footer className="footer">
		<h3 className="footer-title">Abonează-te la Newsletter</h3>
		<h6 className="footer-subtitle">Pentru a fi la curent cu ultimile noutăți ale comunității noastre</h6>
		<input type="text" placeholder="Adresa de Email" className='footer-inputw'/>
		<button className='button primary'>Abonează-mă</button>
		</footer>
	)
}

export default Footer
