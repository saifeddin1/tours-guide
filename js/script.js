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
		"best-text": `The packages and prices varies depending on several factors
						such as departure place, number of individuals etc ...`,

		"matmata-tataouine-1": `1-4 day at : Toujene, Kessar halouf, Kesar hadada, Germsaa and chenini.`,
		"matmata-tataouine-2": `Lunch around noon`,
		"matmata-ghilane-1": `1-4 days at Matmata Village, Tataouine, Kessar Ghilane`,
		"matmata-ghilane-2": `Nights under the magnific saharien sky of kesar ghilane`,
		"matmata-tozeur-1": `Departure from Matmata with Bivouac`,
		"matmata-tozeur-2": `1-4 days at Saharas`,
		"matmata-tozeur-3": `Tours on Camels`,
		"matmata-toujaine-1": `Excursions with bivouac in Matmata, Hedaj, Toujaine and DaHer.`,
		"matmata-toujaine-2": `Walking tours for those who enjoy it.`,
		"gabes-tataouine": `Visits to a lot of ksour in semi-arid terrain. Chenini, Ksar Hadada, and Ksar Medenine visits. In Guermassa, lunch included.`,
		"gabes-ghilane": `Lunch-included Day trip to Ksar Ghilane in the desert visit to the Medenine Ksar and the Berber area.
		Journey from Gabès`,
		"gabes-tozeur": `Southern Tunisian circuit in 4X4, The mountain oases, Chebika, Tamerza, Mides, and the Berber region.`,
		"djerba-tataouine": `Trip to Tataouine to visit the Star Wars filming locations at Ksar Hadada, Chenini, and the Ksar of Medenine.`,
		"djerba-ghilane": `EXCURSION FROM DJERBA TO KSAR GHILANE Visitign THE SAND DESERT.
		Chances For Camel Or Quad Rides.
		Bivouac Douz, Timbaine, Mida, Luc Reched, Kasar Guilaine.`,
		"djerba-tozeur": `Visits to Nefta, Tataouine, Douz, and Tozeur. Matmata and Ksar Ghilane Chebika, Tamerza, and the Mides Canyon are the mountain oasis.`,
		"days": `1 day - 4 days`,
		"popular-des": `Our Most Popular 
							Destinations!`,
		"meet": "Meet Your Guide, Ahmed 👋",
		"about-text": `Hi! My name is Ahmed Gnouma, I'm 36. I'm originally from Matmata, a Berber village that nature sent it to this beautiful desert and geographical spot. I like to guide travelers to discover Matmata and nearby places as well as Tataouine and the Tunisian Sahara. I put my expreience in tourism at your service for several events that I can propose (Tours... Hikes.... And excursions)`,

		"quick": "Liens Rapides",
		"copyright": "All Rights Reserved",
		"gallery-headline": "Photos Gallery",
		"gallery-home": `Enjoy a variety of photos taken in the south tunisian 
		villages while having our activities.`,
		"riche": "Our rich Gallery",
		"rich-text": "Here you can find all different photos taken either by us or by our customers",




	},
	"fr": {
		"home": "Accueil",
		"about": "A propos",
		"destination": "Destinations",
		"contact": "Contact",
		"packages": "Packages",
		"gallery": "Gallerie",
		"home-text": "Réserver une visite",
		"home-text-now": "Maintenant!",
		"home-text-content": `Nos visites et excursions personnalisées sont créées spécifiquement pour vous donner
								une immersion dans l'environnement, la culture et la vie quotidienne du sud tunisien.`,

		"home-btn": "Allons-y maintenant!",
		"services": `Commencez vos vacances avec
		 de nombreux services!`,
		"excursion-text": "Beaucoup de choix avec bivouac",
		"tours-text": "Un guide rien que pour vous",

		"animal-text": "Sur dos des ânes, des chameaux ..",
		"animal": "Tours sur dos d'animeaux",

		"vehicle-text": "4x4, Quads...",
		"vehicle": "Visites en véhicule",

		"hikes-text": "Passer des nuits sous le ciel saharien",
		"hikes": "Randonnées et camping",
		"accommodation": "Hébergement",
		"accommodation-text": "Réservation hôtel & restaurant",
		"custom-service": `Besoin d'un service 
		 					personnalisé?`,

		"service-text": `Contactez-nous pour obtenir plus d'informations sur nos forfaits
		ou réservez votre forfait personnalisé dès maintenant!`,
		"cta-book": "Réserver Maintenant",
		"best-pkgs": `Nos Meilleurs
						Packages`,
		"best-text": `Les forfaits et les prix varient en fonction de plusieurs facteurs
						comme le lieu de départ, le nombre d'individus etc...`,

		"matmata-tataouine-1": `1-4 jours à : Toujene, Kessar halouf, Kesar hadada, Germsaa et chenini.`,
		"matmata-tataouine-2": `Déjeuner vers midi`,
		"matmata-ghilane-1": `1-4 jours à Matmata Village, Tataouine, Kessar Ghilane`,
		"matmata-ghilane-2": `Nuits sous le magnifique ciel saharien de kesar ghilane`,
		"matmata-tozeur-1": `Départ de Matmata avec Bivouac`,
		"matmata-tozeur-2": `1-4 jours au Sahara`,
		"matmata-tozeur-3": `Tours à dos de chameau`,
		"matmata-toujaine-1": `Excursions avec bivouac à Matmata, Hedaj, Toujaine et DaHer.`,
		"matmata-toujaine-2": `Visites à pied pour ceux qui l'apprécient.`,
		"gabes-tataouine": `Visites de nombreux ksour en terrain semi-aride. Visites de Chenini, Ksar Hadada et Ksar Médenine. A Guermassa, déjeuner inclus.`,
		"gabes-ghilane": `Déjeuner inclus Excursion d'une journée à Ksar Ghilane dans le désert visite du Ksar de Médenine et de la région berbère.
		Voyage depuis Gabès`,
		"gabes-tozeur": `Circuit sud tunisien en 4X4, Les oasis de montagne, Chebika, Tamerza, Mides, et la région berbère.`,
		"djerba-tataouine": `Voyage à Tataouine pour visiter les lieux de tournage de Star Wars à Ksar Hadada, Chenini et le Ksar de Médenine`,
		"djerba-ghilane": `EXCURSION DE DJERBA A KSAR GHILANE Visiter LE DESERT DE SABLE.
		Possibilités de balades à dos de chameau ou de quad`,
		"djerba-tozeur": `Visites de Nefta, Tataouine, Douz et Tozeur. Matmata et Ksar Ghilane Chebika, Tamerza et le canyon de Mides sont l'oasis de montagne.`,
		"days": `1 jour - 4 jours`,
		"popular-des": `Nos destinations 
						 les plus populaires!`,


		"meet": "Rencontrez votre guide, Ahmed 👋",
		"about-text": `Salut! Je m'appelle Ahmed Gnouma, j'ai 36 ans. Je suis originaire de Matmata, un village berbère que la nature a envoyé dans ce magnifique endroit désertique et géographique. J'aime guider les voyageurs pour découvrir Matmata et ses environs ainsi que Tataouine et le Sahara tunisien. Je mets mon expérience du tourisme à votre service pour plusieurs événements que je peux vous proposer (Circuits... Randonnées... Et excursions)`,
		"quick": "Liens Rapides",
		"copyright": "Tous les droits sont réservés",
		"gallery-headline": "Gallerie de photos",
		"gallery-home": `Profitez d'une variété de photos prises dans les villages
		du sud tunisien tout en ayant nos activités.`,
		"riche": "Notre riche galerie",
		"rich-text": "Ici vous pouvez trouver toutes les différentes photos prises par nous ou par nos clients",





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
