(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-menu");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();