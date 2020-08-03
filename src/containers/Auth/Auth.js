import React, {Component} from "react";
import './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {
	state = {
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите корректный email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				errorMessage: 'Введите корректный пароль',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			},
		}
	}

	submitHanlder = (e) => {
		e.preventDefault()
	}
	loginHandler = () => {

	}
	registerHandler = () => {


	}
	validateControl = () => {

	}
	onChangeHandler = (event, controlName) => {
		const formControl = {...this.state.formControls}
		const control = {...formControl[controlName]}

		control.value = event.target.value
		control.valid = this.validateControl(control.value, control.validation)

		formControl[controlName] = control
		this.setState({
			formControl
		})
	}


	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]
			return (
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					errorMessage={control.errorMessage}
					souldValidate={true}
					onChange={event => this.onChangeHandler(event, controlName)}
				/>
			)
		})
	}

	render() {
		return (
			<div className={'Auth'}>
				<div>
					<h1>Auth</h1>
					<form onSubmit={this.submitHanlder} className={'AuthForm'}>
						{this.renderInputs()}
						<Button type="success"
								onClick={this.loginHandler}
						>Войти</Button>

						<Button
							type="primary"
							onClick={this.registerHandler}
						>Зарегистрироваться</Button>

					</form>
				</div>
			</div>
		)
	}
}
