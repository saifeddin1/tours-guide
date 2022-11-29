const header = document.querySelector("header");
// const wrappers = document.querySelectorAll('.popover__wrapper')



// wrappers.forEach((el, index) => {
// 	el.addEventListener('click', () => {
// 		document.querySelectorAll(`.popover__wrapper .popover__content`).forEach(one => { one.style.visibility = 'hidden' });
// 		// setTimeout(() => {

// 		document.querySelectorAll(`.popover__wrapper .popover__content`)[index].style.visibility = "visible";
// 		document.querySelectorAll(`.popover__wrapper .popover__content`)[index].style.zIndex = 10;
// 		document.querySelectorAll(`.popover__wrapper .popover__content`)[index].style.opacity = 1;
// 		document.querySelectorAll(`.popover__wrapper .popover__content`)[index].style.transform = "translate(0, -20px)";
// 		document.querySelectorAll(`.popover__wrapper .popover__content`)[index].style.transition = "all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)";
// 		// }, 1000);


// 	})
// })

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

