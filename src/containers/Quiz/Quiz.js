import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends React.Component {
	state = {
		results: {}, // {[id]: success error}
		answerState: null,
		activeQuestion: 0,
		isFinished: true,
		// isFinished: false,
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				id:1,
				answers: [
					{text: 'Черное', id: 1},
					{text: 'Синие', id: 2},
					{text: 'Красное', id: 3},
					{text: 'Зеленое', id: 4},
				]
			},
			{
				question: 'В каком году основал Санкт-Путербург?',
				rightAnswerId: 2,
				id: 2,
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
		if (this.state.answerState) {
			const key = Object.keys(this.state.answerState)[0];
			if (this.state.answerState[key] === 'success') {
				return
			}
		}

		const question = this.state.quiz[this.state.activeQuestion]
		const results = this.state.results

		if (question.rightAnswerId === answerId) {
			if (!results[question.id]) {
				results[question.id] = 'success'
			}

			this.setState({
				answerState: {[answerId]: 'success'},
				results
			})

			const timeout = window.setTimeout(() => {
				if (this.isQuizFinished()) {
					this.setState({isFinished: true})
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState: null
					})
				}

				window.clearTimeout(timeout)
			}, 1000)


		} else {
			results[question.id] = 'error'
			this.setState({
				answerState: {[answerId]: 'error'},
				results
			})
		}
	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	retryHandler = () => {
		this.setState({
			results: {}, // {[id]: success error}
			answerState: null,
			activeQuestion: 0,
			isFinished: false,
		})
	}

	render() {
		return (
			<div className={'Quiz'}>
				<h1>Ответьте на все вопросы:</h1>
				<div>
					{
						this.state.isFinished
							? <FinishedQuiz
								results={this.state.results}
								quiz={this.state.quiz}
								onRetry={this.retryHandler}
							/>
							: <ActiveQuiz
								question={this.state.quiz[this.state.activeQuestion].question}
								answers={this.state.quiz[this.state.activeQuestion].answers}
								onAnswerClick={this.onAnswerClickHandler}
								quizLength={this.state.quiz.length}
								answerNumber={this.state.activeQuestion + 1}
								state={this.state.answerState}
							/>
					}
				</div>
			</div>
		)
	}
}

export default Quiz