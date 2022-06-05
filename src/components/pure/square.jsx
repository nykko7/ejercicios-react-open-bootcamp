import React, { useState, useEffect } from 'react';

const Square = () => {
	const [color, setColor] = useState('black');
	const [generateColor, setGenerateColor] = useState(false);

	const generateRandomColor = () => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
		return 'rgb(' + red + ',' + green + ',' + blue + ')';
	};

	useEffect(() => {
		let timeout;
		if (generateColor) {
			timeout = setInterval(() => setColor(generateRandomColor()), 500);
		}
		return () => clearInterval(timeout);
	}, [generateColor]);

	return (
		<div
			onMouseEnter={() => setGenerateColor(true)}
			onMouseLeave={() => setGenerateColor(false)}
			onDoubleClick={() => setGenerateColor(!generateColor)}
			style={{ width: '255px', height: '255px', backgroundColor: color }}
		></div>
	);
};

export default Square;
