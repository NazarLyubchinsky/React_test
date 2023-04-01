import React from 'react'
// import custom modules
import { Calculator } from '../../modules/Calculator';

const First = () => {
	const calc = new Calculator();
	const SOME_TEXT = 'Testtgg';
	const arrayNumber = [1, 3, 2, 5];

	function calcTwoNumbers(a, b) {
		return a + b
	}
	return (
		<>
			<h2>{calcTwoNumbers(5, 5)}</h2>
			<div>
				<p>{SOME_TEXT}</p>
				<p>{calc.sum(3, 15)}</p>
			</div>
			<div>
				{
					arrayNumber.map((el) => {
						return (
							<p key={el}>{el}</p>
						)
					})
				}
			</div>
		</>
	);
};

export default First