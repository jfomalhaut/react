import React from 'react';
import ItemList from '../components/ItemList';
import Navi from '../components/Navi';


const WomenNavi = [
	{id: 1, label: 'new', path: 'new'},
	{id: 2, label: 'best', path: 'best'},
	{id: 3, label: 'outer', path: 'outer'},
];

const MenNavi = [
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 3, label: 'outer', path: 'outer'},
	{id: 2, label: 'best', path: 'best'},
	{id: 1, label: 'new', path: 'new'},
];

const Event3 = () => {
	return (
		<div>
			<Navi list={WomenNavi}/>
		</div>
	);
};

export default Event3;