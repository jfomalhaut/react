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
const checkAll = () => {
	return {
		type: 'checkAll'
	};
};

const removeCheck = () =>{
	return {
		type: 'removeCheck'
	}
}

const onCheck = id => {
	return{
		type: 'onCheck',
		data: id
	};
};

export default {
	onCheck,
	checkAll,
	addCart,
	removeCart,
	removeAll,
	removeCheck
};