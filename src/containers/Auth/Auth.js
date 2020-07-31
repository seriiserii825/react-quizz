import React, {Component} from "react";
import './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {
	submitHanlder = (e) => {
		e.preventDefault()
	}
	loginHandler = () => {

	}
	registerHandler = () => {

	}

	render() {
		return (
			<div className={'Auth'}>
				<div>
					<h1>Auth</h1>
					<form onSubmit={this.submitHanlder} className={'AuthForm'}>
						<Input label="Email"/>
						<Input
							label="Пароль"
							errorMessage="test"
						/>
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
