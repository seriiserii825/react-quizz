import React from "react";
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswerLists";

const ActiveQuiz = props => {
	return (
		<div className={'ActiveQuiz'}>
			<div className={'Question'}>
				<p>
					<strong>{props.answerNumber}</strong>&nbsp;
					<span>{props.question}</span>
				</p>
				<p>
					{props.answerNumber} из {props.quizLength}
				</p>
			</div>
			<AnswersList
				answers={props.answers}
				onAnswerClick={props.onAnswerClick}
				state={props.state}
			/>
		</div>
	)
}

export default ActiveQuiz