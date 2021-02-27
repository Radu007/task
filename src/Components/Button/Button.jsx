import React from 'react'
import './Button.sass'

const Button = ({buttonText,backgroundColor, width, height, fontSize, onClick, border, className}) => {
	const styles = {
		backgroundColor: backgroundColor === 'gray' ? "#CFCECE" : '' ? backgroundColor === 'light' ? 'rgba(207, 206, 206, 0.4)' : '' : 'none',
		width,
		height,
		fontSize,
		border: border === 'bordered' ? '1px solid #000000' : 'none'
	}
	return (
		<button onClick={onClick} className={className} style={styles}>{buttonText}</button>
	)
}

export default Button