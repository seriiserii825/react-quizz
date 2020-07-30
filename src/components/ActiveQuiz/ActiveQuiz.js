import React from "react";
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswerLists";

const ActiveQuiz = props => (
	<div className={'ActiveQuiz'}>
		<div className={'Question'}>
			<p>
				<strong>2</strong> <span>Как дела?</span>
			</p>
			<p>
				4 из 12
			</p>
		</div>
		<AnswersList
			answers={props.answers}
		/>
	</div>
)

export default ActiveQuiz