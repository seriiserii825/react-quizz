import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
	state = {
		quiz: [
			{
				answers: [
					{text: 'Вопрос 1'},
					{text: 'Вопрос 2'},
					{text: 'Вопрос 3'},
					{text: 'Вопрос 4'},
				]
			}
		]
	}

	render() {
		return (
			<div className={'Quiz'}>
				<h1>Ответьте на все вопросы:</h1>
				<div>
					<ActiveQuiz
						answers={this.state.quiz[0].answers}
					/>
				</div>
			</div>
		)
	}
}

export default Quiz