import React from "react";
import './FinishedQuiz.css'

const FinishedQuiz = props => {
	return (
		<div className={'FinishedQuiz'}>
			<ul>
				<li>
					<strong>1.</strong>
					<span>How are you</span>
					<i className="fas fa-times error"></i>
				</li>
				<li>
					<strong>1.</strong>
					<span>How are you</span>
					<i className="fas fa-check success"></i>
				</li>
			</ul>
			<p>Правильно 4 из 10</p>
			<button>Повторить</button>
		</div>
	)
}

export default FinishedQuiz
