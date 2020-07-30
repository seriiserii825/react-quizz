import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
	state = {
		answerState: null,
		activeQuestion: 0,
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				answers: [
					{text: 'Черное', id: 1},
					{text: 'Синие', id: 2},
					{text: 'Красное', id: 3},
					{text: 'Зеленое', id: 4},
				]
			},
			{
				question: 'В каком году основал Санкт-Путербург?',
				rightAnswerId: 3,
				answers: [
					{text: '1702', id: 1},
					{text: '1703', id: 2},
					{text: '1704', id: 3},
					{text: '1804', id: 4},
				]
			}
		]
	}

	onAnswerClickHandler = answerId => {
		const question = this.state.quiz[this.state.activeQuestion]

		if (question.rightAnswerId === answerId) {

			this.setState({
				answerState: {[answerId]: 'success'}
			})

			const timeout = window.setTimeout(() => {
				if (this.isQuizFinished()) {
					console.log('Finished')
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState: null
					})
				}

				window.clearTimeout(timeout)
			}, 1000)


		} else {
			this.setState({
				answerState: {[answerId]: 'error'}
			})
		}
	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	render() {
		return (
			<div className={'Quiz'}>
				<h1>Ответьте на все вопросы:</h1>
				<div>
					<ActiveQuiz
						question={this.state.quiz[this.state.activeQuestion].question}
						answers={this.state.quiz[this.state.activeQuestion].answers}
						onAnswerClick={this.onAnswerClickHandler}
						quizLength={this.state.quiz.length}
						answerNumber={this.state.activeQuestion + 1}
						state={this.state.answerState}
					/>
				</div>
			</div>
		)
	}
}

export default Quiz