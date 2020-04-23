import React from 'react';
import Item from '../components/Item';
import './List.css';

const ITEMS = [
	{id: 1, main: true, name: 'LushItem1', price: 11, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 2, main: false, name: 'LushItem2', price: 22, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 3, main: false, name: 'LushItem3', price: 33, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 4, main: false, name: 'LushItem4', price: 44, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 5, main: false, name: 'LushItem5', price: 55, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 6, main: false, name: 'LushItem6', price: 66, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 7, main: false, name: 'LushItem7', price: 77, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 8, main: false, name: 'LushItem8', price: 88, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 9, main: false, name: 'LushItem9', price: 99, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 10, main: false, name: 'LushItem10', price: 101, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 9, main: false, name: 'LushItem9', price: 99, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
	{id: 10, main: false, name: 'LushItem10', price: 101, src: 'https://res.cloudinary.com/lush/image/upload/s--gK8DlE0M--/c_fill,h_340,q_jpegmini,w_340/v1/products/main/2128.jpg?itok=ennTzL8z'},
];

const List = () => {
	return (
		<div className="container">
			{ITEMS.map((item, index) => (
				<Item key={`ITEM${item.id}`} item={item} />
			))}
		</div>
	);
};

export default List;