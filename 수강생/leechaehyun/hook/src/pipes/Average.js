const getAverage = (numbers) => {
	if (numbers.length === 0) {
		return 0;
	}
	const sum = numbers.reduce((acc, cur) => acc + cur);
	const avg = sum / numbers.length;
	return Math.round(avg);
};

export default getAverage;