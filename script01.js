console.log("Top of script01.js");

AOS.init();


let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
{
	"id" : "id0",
	"picture_url" : "gorilla-arms.avif",
	"title" : "Gorilla Arms",
	"price" : "$48,814",
	"shop" : "ADD TO CART",
	"category" : "Arms",
	"color" : "black",
	"info" : ["Gorilla Arms are lightweight, efficient and hard-hitting arm replacement cyberware."]
},
{
	"id" : "id1",
	"picture_url" : "mantis-blades.jpg",
	"title" : "MaxTac Mantis Blades",
	"price" : "$49,458",
	"shop" : "ADD TO CART",
	"category" : "Arms",
	"color" : "black",
	"info" : ["Mantis Blades allow you to slice and dice your enemies with swift, deadly slashes."]
},	
{
	"id" : "id2",
	"picture_url" : "monowires.avif",
	"title" : "Monowires",
	"price" : "$50,102",
	"shop" : "ADD TO CART",
	"category" : "Arms",
	"color" : "black",
	"info" : ["Deal Physical damage"]
},
{
	"id" : "id3",
	"picture_url" : "projectile.avif",
	"title" : "Projectile Launch System",
	"price" : "$50,102",
	"shop" : "ADD TO CART",
	"category" : "Arms",
	"color" : "black",
	"info" : ["Launches an explosive projectile"]
},
{
	"id" : "id4",
	"picture_url" : "MaskCW.webp",
	"title" : "Behavioral Imprint-synced Faceplate",
	"price" : "$7979",
	"shop" : "ADD TO CART",
	"category" : "Face",
	"color" : "black",
	"info" : ["Activating a faceplate alters both your physical and digital identity, making you virtually unrecognizable."]
},
{
	"id" : "id5",
	"picture_url" : "coctrice.webp",
	"title" : "Kiroshi 'Cockatrice' Optics",
	"price" : "$14,166",
	"shop" : "ADD TO CART",
	"category" : "Face",
	"color" : "black",
	"info" : ["10x optical zoom when scanning"]
},
{
	"id" : "id6",
	"picture_url" : "oracle.webp",
	"title" : "Kiroshi 'The Oracle' Optics",
	"price" : "$9,447",
	"shop" : "ADD TO CART",
	"category" : "Face",
	"color" : "black",
	"info" : ["Highlights cameras and turrets within 30-39m.", "Highlights explosive devices and traps near your crosshair and within 22-29m."]
},
{
	"id" : "id7",
	"picture_url" : "axolotl.webp",
	"title" : "Axolotl",
	"price" : "$56,643",
	"shop" : "ADD TO CART",
	"category" : "frontal_cortex",
	"color" : "black",
	"info" : ["−5.0-7.5% Cooldown instantly for all cyberware"]
},
{
	"id" : "id8",
	"picture_url" : "cybersomatic.webp",
	"title" : "COX-2 Cybersomatic Optimizer",
	"price" : "$56,643",
	"shop" : "ADD TO CART",
	"category" : "frontal_cortex",
	"color" : "black", 
	"info" : ["−8-4 Max RAM"]
},
{
	"id" : "id9",
	"picture_url" : "boost.webp",
	"title" : "Kerenzikov Boost System",
	"price" : "$18,886",
	"shop" : "ADD TO CART",
	"category" : "frontal_cortex",
	"color" : "black", 
	"info" : ["Improves Kerenzikov by enhancing the user's speed and reflexes."]
},
{
	"id" : "id10",
	"picture_url" : "tuner.webp",
	"title" : "Quantum Tuner",
	"price" : "$38,300",
	"shop" : "ADD TO CART",
	"category" : "frontal_cortex",
	"color" : "black",
	"info" : ["Whenever another cyberware implant is fully used, Quantum Tuner instantly restores its Cooldown. (up to a max of 30/40/50 sec.)"]
},
{
	"id" : "id11",
	"picture_url" : "ballistic.png",
	"title" : "Ballistic Coprocessor",
	"price" : "$9,447",
	"shop" : "ADD TO CART",
	"category" : "Hands",
	"color" : "black",
	"info" : ["Links the user's weapon and optics, offering real-time data-tracking of the weapon's status and preview of ricochet trajectory."]
},
{
	"id" : "id12",
	"picture_url" : "immovable.webp",
	"title" : "Immovable Force",
	"price" : "$37,764",
	"shop" : "ADD TO CART",
	"category" : "Hands",
	"color" : "#000000",
	"info" : ["−22-35% recoil", "−25% bullet spread", "Automatically activates effects for ranged weapons that otherwise only occur when behind cover."]
},
{
	"id" : "id13",
	"picture_url" : "ankle.webp",
	"title" : "Fortified Ankles",
	"price" : "$18,886",
	"shop" : "ADD TO CART",
	"category" : "Legs",
	"color" : "black",
	"info" : ["Allows you to charge jumps for greater distance."]
},
{
	"id" : "id14",
	"picture_url" : "leeroy.webp",
	"title" : "Leeroy Ligament System",
	"price" : "$14,166",
	"shop" : "ADD TO CART",
	"category" : "Legs",
	"color" : "black",
	"info" : ["+12-20% Movement Speed"]
},
{
	"id" : "id15",
	"picture_url" : "tendons.webp",
	"title" : "Reinforced Tendons",
	"price" : "$67,824",
	"shop" : "ADD TO CART",
	"category" : "Legs",
	"color" : "black",
	"info" : ["Allows you to perform double jumps"]
},
{
	"id" : "id16",
	"picture_url" : "BerserkC4.webp",
	"title" : "Militech Berserk",
	"price" : "$47,197",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["Makes you invulnerable to damage"]
}, 
{
	"id" : "id17",
	"picture_url" : "BerserkC3.webp",
	"title" : "Zetatech Berserk",
	"price" : "$28,318",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["While in midair with a Blunt weapon, allows the use of Superhero Landings."]
},
{
	"id" : "id18",
	"picture_url" : "arasaka.png",
	"title" : "Arasaka Mk.1-5",
	"price" : "$47,197",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["Allows you to perform quickhacks on enemies and devices while scanning."]
},
{
	"id" : "id19",
	"picture_url" : "canto.webp",
	"title" : "Canto MK.6",
	"price" : "$45,000",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["Allows you to perform quickhacks on enemies and devices while scanning."]
},
{
	"id" : "id20",
	"picture_url" : "netdriver.webp",
	"title" : "Netdriver Mk.1",
	"price" : "$84772",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["−20% traceability for quickhacks uploaded through cameras.", "−50% RAM cost for Device and Vehicle quickhacks."]
},
{
	"id" : "id21",
	"picture_url" : "apogee.webp",
	"title" : "Militech 'Apogee' Sandevistan",
	"price" : "$118,681",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["Increases your damage and slows time by 85% (you are not slowed)"]
},
{
	"id" : "id22",
	"picture_url" : "falcon.webp",
	"title" : "Militech 'Falcon' Sandevistan",
	"price" : "$47,197",
	"shop" : "ADD TO CART",
	"category" : "operating_system",
	"color" : "black",
	"info" : ["Increases damage and slows time by 70% (you are not slowed)"]
},
{
	"id" : "id23",
	"picture_url" : "joints.webp",
	"title" : "Bionic Joints",
	"price" : "$23,606",
	"shop" : "ADD TO CART",
	"category" : "skeleton",
	"color" : "black",
	"info" : ["Armor - simple but effective."] 
},
{
	"id" : "id24",
	"picture_url" : "Endoskeleton.webp",
	"title" : "Epimorphic Skeleton",
	"price" : "$66,082",
	"shop" : "ADD TO CART",
	"category" : "skeleton",
	"color" : "black",
	"info" : ["+10-13% Max Health"] 
},
{
	"id" : "id25",
	"picture_url" : "T1000.webp",
	"title" : "Rara Avis",
	"price" : "$117,997",
	"shop" : "ADD TO CART",
	"category" : "skeleton",
	"color" : "black",
	"info" : ["+30-40% Armor"] 
},
{
	"id" : "id26",
	"picture_url" : "Bones.webp",
	"title" : "Titanium Bones",
	"price" : "$9,447",
	"shop" : "ADD TO CART",
	"category" : "skeleton",
	"color" : "black",
	"info" : ["Increases amount you can carry"]
},
];

document.addEventListener("DOMContentLoaded", function(){

	console.log("DOM Ready...");

	pageTitleElement = document.getElementById("pageTitle");
	outputGridElement = document.getElementById("outputGrid");
	projectDisplayElement = document.getElementById("projectDisplay");

	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let urlSection = urlParams.get('section');
	let urlID = urlParams.get('id');

	console.log (urlSection);

	if (urlSection != "item") {

		if (urlSection == "arms") {
			pageTitleElement.innerText = "Arms";
		} 
		else if (urlSection == "face") {
			pageTitleElement.innerText = "Face";
		}
		else if (urlSection == "frontal_cortex") {
			pageTitleElement.innerText = "Frontal Cortex";
		}
		else if (urlSection == "hands") {
			pageTitleElement.innerText = "Hands";
		}
		else if (urlSection == "legs") {
			pageTitleElement.innerText = "Legs";
		}
		else if (urlSection == "operating_system") {
			pageTitleElement.innerText = "Operating System";
		}
		else if (urlSection == "skeleton") {
			pageTitleElement.innerText = "skeleton";
		}

		for (let i = 0; i < portfolioCollection.length; i++) {
			if (portfolioCollection[i]["category"].toLowerCase() == urlSection || urlSection == "" || urlSection == null){
				createProjectPreview(portfolioCollection[i]);
			}
		}

	}

	else {
		for (let i = 0; i < portfolioCollection.length; i++) {
			if (portfolioCollection[i]["id"] == urlID) {
				pageTitleElement.innerText = portfolioCollection[i]["title"];
				createProjectPage(portfolioCollection[i]);
			}
		}
	}

});


function createProjectPreview(incomingJSON){

	console.log("Creating preview...");

	let newPreviewLink = document.createElement("A");
	newPreviewLink.href = "home.html?section=item&id=" + incomingJSON["id"];

	let newPreviewElement = document.createElement("DIV");
	newPreviewLink.appendChild(newPreviewElement);
	newPreviewElement.classList.add("content");

	let newPreviewTitle = document.createElement("P");
	newPreviewTitle.classList.add("previewTitle");
	newPreviewTitle.innerText = incomingJSON["title"];
	newPreviewElement.appendChild(newPreviewTitle);

	let newPreviewThumbnail = document.createElement("IMG");
	newPreviewThumbnail.classList.add("thumbnail");
	newPreviewThumbnail.src = incomingJSON["picture_url"];
	newPreviewElement.appendChild(newPreviewThumbnail);

	outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {

	console.log("Creating single item page...");

	pageTitleElement.innerText = incomingJSON["title"];

	let newProjectElement = document.createElement("DIV");

	let newProjectImage = document.createElement("IMG");
	newProjectImage.classList.add("projectHeroImage");
	newProjectImage.src = incomingJSON["picture_url"];
	newProjectElement.appendChild(newProjectImage);

	let newProjectPrice = document.createElement("P");
	newProjectPrice.classList.add("price");
	newProjectPrice.innerText = incomingJSON["price"];
	newProjectElement.appendChild(newProjectPrice);

	let newProjectShop = document.createElement("P");
	newProjectShop.classList.add("shop");
	newProjectShop.innerText = incomingJSON["shop"];
	newProjectElement.appendChild(newProjectShop);


	let newProjectDescription = document.createElement("P");
	newProjectDescription.classList.add("info");
	newProjectDescription.innerText = incomingJSON["info"];
	newProjectElement.appendChild(newProjectDescription);

	projectDisplayElement.appendChild(newProjectElement);

}