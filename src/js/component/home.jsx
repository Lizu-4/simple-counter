import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter, one, two, three, four, five, six}) => {
	return (
		<div className="container justify-content-center">
			<div className="d-flex flex-row-reverse justify-content-center fs-1 mt-5">
				<div className="p-3 bg-dark text-white border"><i class="fa-solid fa-clock"></i></div>
				<div className="p-3 bg-dark text-white  border"> {Math.floor(one % 10)}  </div>
				<div className="p-3 bg-dark text-white  border">{Math.floor(two % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(three % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(four % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(five % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(six % 10)}</div>
			</div>
		</div>
	);
};

export default Home;
