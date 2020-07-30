import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
	state = {
		quiz: []
	}
	render() {
		return (
			<div className={'Quiz'}>
				<h1>Quiz</h1>
				<div>
					<ActiveQuiz/>
				</div>
			</div>
		)
	}
}
export default Quiz