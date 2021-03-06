import React from 'react';

const Card2 = ({ goods: { name, age, tel } , index, onDelete }) => {
	return (
		<div className="card">
			<div className="info">
				<div className="row">
					<span className="label">이름</span>
					<span className="content">{name}</span>
				</div>
				<div className="row">
					<span className="label">연령</span>
					<span className="content">{age}세</span>
				</div>
				<div className="row">
					<span className="label">전화번호</span>
					<span className="content">{tel}</span>
				</div>
			</div>
			<div className="delete">
				<button onClick={() => onDelete(index)}>삭제</button>
			</div>
		</div>
	);
};

export default Card2;