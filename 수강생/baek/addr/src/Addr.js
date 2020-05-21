import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const ADDR_API = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const VIEW = "10";


const Addr = () => {
	const [list, setList] = useState([]);
	const [currentPage, setCureentPage]=useState(1);
	const [count, setTotalCount]= useState(0);
	
	const getAddress = () => {
		Axios.get(`${ADDR_API}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=용답동`).then(res =>{
			const {data : {results : {common :{totalCount}, juso}}} = res;
			setList(juso);
			console.log(res);
			setTotalCount(totalCount);
		})
	}

	const next = _index =>{
		setCureentPage(currentPage + 1);
	}

	const prev = _index =>{
		if(currentPage===1){
			return;
		}
		setCureentPage(currentPage - 1);
	}

	useEffect(() => {
		console.log(currentPage);
		getAddress()	
	},[currentPage])

	return(
		<div className="container">
			<h1>검색한 총 결과 수 : {count}</h1>
			<div className="list">
			{list.map((item,index)=> (
				<div className="addr">
					<div className="addr_left">{item.zipNo}</div>
					<div className="addr_right">
						<div className="road_addr">{item.roadAddr}</div>
						<div className="jibun_addr">{item.jibunAddr}</div>
					</div>
				</div>
			))}
			</div>
			<div className="btn">
				<button onClick={next}>다음</button>
				<button onClick={()=>prev()}>이전</button>
			</div>
		</div>
	);
};

export default Addr;