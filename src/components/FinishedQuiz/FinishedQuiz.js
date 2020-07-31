import React from "react";
import './FinishedQuiz.css'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if(props.results[key] === 'success'){
			total++
		}
		return total
	}, 0)

	return (
		<div className={'FinishedQuiz'}>
			<ul>
				{props.quiz.map((quizItem, index) => {
					const cls = [
						'fa',
						props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
						props.results[quizItem.id]
					]

					return (
						<li
							key={index}
						>
							<strong>{index + 1}</strong>.&nbsp;
							{quizItem.question}
							<i className={cls.join(' ')}/>
						</li>
					)

				})}
			</ul>
			<p>Правильно {successCount} из {props.quiz.length}</p>
			<button onClick={props.onRetry}>Повторить</button>
		</div>
	)
}

export default FinishedQuiz
