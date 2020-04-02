const addCart = item => {
	return {
		type: 'addCart',
		data: item
	};
};

const removeCart = item => {
	return {
		type: 'removeCart',
		data: item
	};
};

const removeAll = () => {
	return {
		type: 'removeAll'
	};
};

const onCheck = id => {
	return {
		type: 'onCheck',
		data: id
	};
};

const checkAll = () => {
	return {
		type: 'checkAll'
	};
};

const removeCheck = () => {
	return {
		type: 'removeCheck'
	};
};

export default {
	onCheck,
	checkAll,
	removeCheck,
	addCart,
	removeCart,
	removeAll
};