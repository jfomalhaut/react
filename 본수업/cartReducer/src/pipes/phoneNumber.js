const phoneNumber = tel => {
	if (!tel) return;
	switch (tel.length) {
	  case 9:
		 return `${tel.substr(0, 2)}-${tel.substr(2, 3)}-${tel.substr(5, 4)}`;
	  case 10: {
		 if (tel[1] === '2') {
			return `${tel.substr(0, 2)}-${tel.substr(2, 4)}-${tel.substr(6, 4)}`;
		 } else {
			return `${tel.substr(0, 3)}-${tel.substr(3, 3)}-${tel.substr(6, 4)}`;
		 }
	  }
	  case 11:
		 return `${tel.substr(0, 3)}-${tel.substr(3, 4)}-${tel.substr(7, 4)}`;
	  case 12:
		 return `${tel.substr(0, 4)}-${tel.substr(4, 4)}-${tel.substr(8, 4)}`;
	  default: 
	  	 return '유효하지 않은 번호입니다';
	}
 };
 
 export default phoneNumber;
 