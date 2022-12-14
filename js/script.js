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

const FALLBACK_LOCAL = "en";

const locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : FALLBACK_LOCAL;
const langSwitch = document.querySelector('#lang');
langSwitch.innerHTML = locale == "en" ? "<span id='flag' class='fi fi-fr'></span> FR" : "<span id='flag' class='fi fi-us'></span> EN";
const translations = {
	// English translations
	"en": {
		"home": "Home",
		"about": "About Us",
		"destination": "Destinations",
		"contact": "Contact",
		"packages": "Packages",
		"gallery": "Gallery",
		"home-text": "Book A Tour",
		"home-text-now": "Now!",
		"home-text-content": `Our personalized tours and excursions are created specifically for you 
		to give you an immersion in South Tunisian environment, culture, and daily life.`,
		"home-btn": "Let's go now!",
		"services": `Start Your Vacation with
		 Lots of Services!`,
		"excursion-text": "Many choices with Bivouac",
		"tours-text": "A guide just for you",
		"animal-text": "With donkeys, with camels ..",
		"animal": "Animal Tours",
		"vehicle-text": "4x4, Quad bikes...",
		"vehicle": "Vehicle Tours",
		"hikes-text": "Spending nights unser the saharian sky",
		"hikes": "Hikes & Camping",
		"accommodation": "Accomodation",
		"accommodation-text": "Hotel & restaurant reservation",
		"custom-service": `Need a Custom
		 Service?`,

		"service-text": `Contact us to get more infos about our packages 
		or book your custom package right now!`,
		"cta-book": "Book Now",
		"best-pkgs": `Our Best 
						Tour Packages`,
		"best-text": `Packages and prices differ depending on several factors
		such as the place of departure, the number of individuals etc ...`,

		"matmata-tataouine-1": `Visit Berber village and ksour of tatouine.`,
		// "matmata-tataouine-2": `Lunch around noon`,
		"matmata-ghilane-1": `Tours From  Matmata To Ksar Ghilane.`,
		// "matmata-ghilane-2": `Nights under the magnific saharien sky of kesar ghilane`,
		"matmata-tozeur-1": `Departure from Matmata To Tozeur`,
		// "matmata-tozeur-2": `1-4 days at Saharas`,
		// "matmata-tozeur-3": `Tours on Camels`,
		"matmata-toujaine-1": `Excursions  in Matmata, Hedaj, Toujaine and DaHer.`,
		// "matmata-toujaine-2": `Walking tours for those who enjoy it.`,
		"gabes-tataouine": `Visit a lot of Ksours From Gab??s to Tataouine.`,
		"gabes-ghilane": `Excursion to Different Ksour From Gab??s to Ksar Ghilane`,
		"gabes-tozeur": `Southern Tunisian circuit From  Gab??s to Touzer .`,
		"djerba-tataouine": `Travel From Djerba to Tataouine via different Ksours.`,
		"djerba-ghilane": `Excursion from Djerba to Ksar Ghilane Visiting Saharas.`,
		"djerba-tozeur": `Visits to Tozeur departing from Djerba.`,
		"days": `1 day - 4 days`,
		"popular-des": `Our Most Popular 
							Destinations!`,
		"saharian-text": "Enjoy different saharas in the southern tunisian regions.",
		"saharian": "Saharian Tours",
		"meet": "Meet Your Guide, Ahmed ????",
		"about-text": `Hi! My name is Ahmed Gnouma, I'm 36. I'm originally from Matmata, a Berber village that nature sent it to this beautiful desert and geographical spot. I like to guide travelers to discover Matmata and nearby places as well as Tataouine and the Tunisian Sahara. I put my expreience in tourism at your service for several events that I can propose (Tours... Hikes.... And excursions)`,

		"quick": "Liens Rapides",
		"copyright": "All Rights Reserved",
		"gallery-headline": "Photos Gallery",
		"gallery-home": `Enjoy a variety of photos taken in the south tunisian 
		villages while having our activities.`,
		"riche": "Our rich Gallery",
		"rich-text": "Here you can find all different photos taken either by us or by our customers",
		"hugo": "I had the opportunity to do a multi-day desert tour with Ahmed. The experience was amazing and Ahmed is a very attentive guide who knows this environment like the back of his hand.",
		"romina": "I had a pleasant visit with Ahmed in the south of Matmata and Tatouine! Ahmed is a serious person, available, speaks French very well and gets along with Italian! He knows what he's talking about and tries to answer all your questions! I highly recommend it!",


	},
	"fr": {
		"home": "Accueil",
		"about": "A propos",
		"destination": "Destinations",
		"contact": "Contact",
		"packages": "Packages",
		"gallery": "Gallerie",
		"home-text": "R??server une visite",
		"home-text-now": "Maintenant!",
		"home-text-content": `Nos visites et excursions personnalis??es sont cr????es sp??cifiquement pour vous donner
								une immersion dans l'environnement, la culture et la vie quotidienne du sud tunisien.`,

		"home-btn": "Allons-y maintenant!",
		"services": `Commencez vos vacances avec
		 de nombreux services!`,
		"excursion-text": "Beaucoup de choix avec bivouac",
		"tours-text": "Un guide rien que pour vous",

		"animal-text": "Sur dos des ??nes, des chameaux ..",
		"animal": "Tours sur dos d'animeaux",

		"vehicle-text": "4x4, Quads...",
		"vehicle": "Visites en v??hicule",

		"hikes-text": "Passer des nuits sous le ciel saharien",
		"hikes": "Randonn??es et camping",
		"accommodation": "H??bergement",
		"accommodation-text": "R??servation h??tel & restaurant",
		"custom-service": `Besoin d'un service 
		 					personnalis???`,

		"service-text": `Contactez-nous pour obtenir plus d'informations sur nos forfaits
		ou r??servez votre forfait personnalis?? d??s maintenant!`,
		"cta-book": "R??server Maintenant",
		"best-pkgs": `Nos Meilleurs
						Packages`,
		"best-text": `Les forfaits et les prix se diff??rent selon plusieurs facteurs
		comme le lieu de d??part, le nombre d'individus etc...`,

		"matmata-tataouine-1": `Viste village berber et ksour de tatouine.`,
		// "matmata-tataouine-2": `D??jeuner vers midi`,
		"matmata-ghilane-1": `Visite de Matmata Vers Ksar Ghilane`,
		// "matmata-ghilane-2": `Nuits sous le magnifique ciel saharien de kesar ghilane`,
		"matmata-tozeur-1": `D??part de Matmata Vers Tozeur`,
		// "matmata-tozeur-2": `1-4 jours au Sahara`,
		// "matmata-tozeur-3": `Tours ?? dos de chameau`,
		"matmata-toujaine-1": `Excursions  ?? Matmata, Hedaj, Toujaine et DaHer.`,
		// "matmata-toujaine-2": `Visites ?? pied pour ceux qui l'appr??cient.`,
		"gabes-tataouine": `Visites de nombreux ksour De Gab??s Vers Tataouine.`,
		"gabes-ghilane": ` Excursion ?? Diff??rent 
		Ksour De Gab??s vers Ksar Ghilane`,
		"gabes-tozeur": `Circuit sud tunisien De Gab??s ?? Touzer.`,
		"djerba-tataouine": `Voyage De Djerba ?? Tataouine en passant par different Ksours`,
		"djerba-ghilane": `Excursion de Djerba ?? Ksar Ghilane et Visiter les Saharas.`,
		"djerba-tozeur": `Visites de  Tozeur 
		au d??part de Djerba.`,

		"days": `1 jour - 4 jours`,

		"popular-des": `Nos destinations 
						 les plus populaires!`,

		"saharian-text": "Profitez de diff??rents saharas dans les r??gions du sud de la Tunisie.",
		"saharian": "Tours Sahariens",
		"meet": "Rencontrez votre guide, Ahmed ????",
		"about-text": `Salut! Je m'appelle Ahmed Gnouma, j'ai 36 ans. Je suis originaire de Matmata, un village berb??re que la nature a envoy?? dans ce magnifique endroit d??sertique et g??ographique. J'aime guider les voyageurs pour d??couvrir Matmata et ses environs ainsi que Tataouine et le Sahara tunisien. Je mets mon exp??rience du tourisme ?? votre service pour plusieurs ??v??nements que je peux vous proposer (Circuits... Randonn??es... Et excursions)`,
		"quick": "Liens Rapides",
		"copyright": "Tous les droits sont r??serv??s",
		"gallery-headline": "Gallerie de photos",
		"gallery-home": `Profitez d'une vari??t?? de photos prises dans les villages
		du sud tunisien tout en ayant nos activit??s.`,
		"riche": "Notre riche galerie",
		"rich-text": "Ici vous pouvez trouver toutes les diff??rentes photos prises par nous ou par nos clients",
		"hugo": "J'ai eu l'opportunit?? de faire une excursion de plusieurs jours dans le d??sert avec Ahmed. L'exp??rience ??tait incroyable et Ahmed est un guide tr??s attentif qui connait cet environnement comme sa poche.",
		"romina": "Ho fatto una visita piacevole con Ahmed nel sud di Matmata e Tatouine! Ahmed ?? una persona seria, disponibile, parla molto bene il francese e se la cava con l???italiano! Sa di cosa parla e cerca di rispondere a tutte le vostre domande! Lo consiglio vivamente!",





	},

};


document.addEventListener("DOMContentLoaded", () => {
	document
		// Find all elements that have the key attribute
		.querySelectorAll("[data-translation]")
		.forEach(translateElement);
	if (document.querySelector('.newsletter form div') && localStorage.getItem('locale') == "fr") {
		// console.log(document.querySelector('.newsletter form div'));
		document.querySelector('.newsletter form div').style.width = "100%";
		document.querySelector('.newsletter form div').style.marginRight = "0";

	}




});

window.onload = () => {
	// Array of Images
	var backgroundImg = [
		"./img/BatchWatermark.com/start2.jfif",
		"./img/BatchWatermark.com/ahmed\(38\)-c.jpg",
		"./img/BatchWatermark.com/ahmed\(72\).jpg",
		"./img/BatchWatermark.com/ahmed\(71\).jpg",
		// "./img/BatchWatermark.com/ahmed\(71\).jpg",
	]

	setInterval(changeImage, 3000);
	function changeImage() {
		var i = Math.floor((Math.random() * 3));

		document.querySelector('.home').style.backgroundImage = "url('" + backgroundImg[i] + "')";


	}
}
function translateElement(element) {
	const key = element.getAttribute("data-translation");
	const translation = translations[locale][key];
	element.innerText = translation;
}

langSwitch.parentElement.addEventListener('click', (e) => {
	console.log(e.target.innerText);
	localStorage.setItem('locale', langSwitch.innerText.includes("EN") ? "en" : "fr");
	if (document.querySelector('.newsletter form div') && localStorage.getItem('locale') == "fr") {
		console.log(document.querySelector('.newsletter form div').style.width);
		document.querySelector('.newsletter form div').style.width = "100% !important";
		document.querySelector('.newsletter form div').style.marginRight = "0 !important";

	}
	langSwitch.innerHTML = localStorage.getItem('locale') == "en" ? "<span id='flag' class='fi fi-fr'></span> FR" : "<span id='flag' class='fi fi-us'></span> EN";
	window.location.reload();
})
// Array.prototype.forEach.call(document.querySelectorAll('section p'), child => {
// 	if (localStorage.getItem('locale') === 'ar') {
// 		child.style.textAlign = 'right'
// 	} else {
// 		child.style.textAlign = 'left'
// 	}
// })
