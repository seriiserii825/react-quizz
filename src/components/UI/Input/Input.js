import React from "react";
import './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
	return !valid && shouldValidate && touched
}

export default props => {
	const inputType = props.type || 'text'
	const cls = ['Input']
	const htmlFfor = `${inputType}-${Math.random()}`

	if (isInvalid(props)) {
		cls.push('invalid')
	}
	return (
		<div className={cls.join(' ')}>
			<label htmlFor={htmlFfor}>{props.label}</label>
			<input
				type={inputType}
				id={htmlFfor}
				value={props.value}
				onChange={props.onChange}
			/>
			{
				isInvalid(props)
					? <span>{props.errorMessage}</span>
					: null
			}

		</div>
	)
}
