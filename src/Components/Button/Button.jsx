import React from 'react'
import './Button.sass'

const Button = ({buttonText,backgroundColor, width, height, fontSize}) => {
	const styles = {
		backgroundColor,
		width,
		height,
		fontSize,
		border: backgroundColor === 'white' ? '1px solid #000000' : 'none'
	}
	return (
		<button className='button' style={styles}>{buttonText}</button>
	)
}

export default Button