import React from "react";
import './ActiveQuiz.css'

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
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	</div>
)

export default ActiveQuiz