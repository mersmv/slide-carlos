import { useState } from 'react';
import { INFO } from '../../constants/info';
import Title1 from '../Title1/Title1';
import Title2 from '../Title2/Title2';

const Slider = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<button onClick={() => previousElement(count, setCount)}>Previous</button>
			<Title1 text={INFO[count].title} />
			<Title2 text={INFO[count].description} />
			<button onClick={() => nextElement(count, setCount)}>Next</button>
		</>
	);
};

const nextElement = (count, setCount) => {
	setCount(count + 1);
	if (count >= INFO.length - 1) {
		setCount(0);
	}
};

const previousElement = (count, setCount) => {
	setCount(count - 1);
	if (count <= 0) {
		setCount(INFO.length - 1);
	}
};

export default Slider;
