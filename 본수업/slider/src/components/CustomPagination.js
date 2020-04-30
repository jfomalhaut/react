import React, { useState, useEffect } from 'react';

// Props 정리
// onPage: 화면 넘어가는 이벤트, 
// total: 전체 상품 수, 
// view: 한 페이지에 노출될 상품 수, 
// page: 현재 보고 있는 페이지
// count: 총 페이지 수

const CustomPagination = ({ onPage, total, view, page }) => {
	const [pages, setPages] = useState([]);
	const [count, setCount] = useState(1);

	const first = () => {
		if (page === 1) {
			alert('첫 페이지입니다');
		} else {
			onPage(1);
		}
	};

	const prev = () => {
		if (page === 1) {
			alert('첫 페이지입니다');
		} else {
			onPage( page - 1 );
		}
	};

	const last = () => {
		if (page === count) {
			alert('마지막 페이지입니다');
		} else {
			onPage(count);
		}
	};

	const next = () => {
		if (page === count) {
			alert('마지막 페이지입니다');
		} else {
			onPage(page + 1);
		}
	};
	
	useEffect(() => {
		const ct = Math.ceil(total / view);
		if (page < 1 || page > ct) {
			onPage(1);
		}
		const _pages = [...Array(ct)].map((item, index) => (index + 1));
		setPages(_pages);
		setCount(ct);
	}, []);

	return (
		<ul className="pagination">
			<li onClick={first}>처음으로</li>
			<li onClick={prev}>앞으로한칸</li>
			{pages.map((item) => (
				<li 
					key={`PAGE${item}`} 
					onClick={() => onPage(item)} 
					className={item === page ? 'activePage' : ''}
				>
					{item}
				</li>
			))}
			<li onClick={next}>뒤로한칸</li>
			<li onClick={last}>마지막으로</li>
		</ul>
	);
};

export default CustomPagination;