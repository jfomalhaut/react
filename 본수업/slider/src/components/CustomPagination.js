import React, { useState, useEffect } from 'react';

// Props 정리
// onPage: 화면 넘어가는 이벤트, 
// total: 전체 상품 수, 
// view: 한 페이지에 노출될 상품 수, 
// page: 현재 보고 있는 페이지

const CustomPagination = ({ onPage, total, view, page }) => {
	const [pages, setPages] = useState([]);
	
	useEffect(() => {
		const ct = Math.ceil(total / view);
		const _pages = [...Array(ct)].map((item, index) => (index + 1));
		setPages(_pages);
	}, []);

	return (
		<ul className="pagination">
			{pages.map((item) => (
				<li 
					key={`PAGE${item}`} 
					onClick={() => onPage(item)} 
					className={item === Number(page) ? 'activePage' : ''}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default CustomPagination;