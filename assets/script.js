const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Déclaration des variables utiles pour le code
const bulletPoints = document.querySelector('.dots');
let activeSlideIndex = 0; // Index du slide actif

// Mise en place des écouteurs d'évènements lors du clic des boutons de flèches pour le changement d'image du slider
const arrows = document.querySelectorAll('.arrow');
arrows.forEach(function(arrow) {
	arrow.addEventListener('click', function() {
	if (arrow.classList.contains('arrow_left')) {
		console.log('Le bouton "slide précédent" a été cliqué par l\'utilisateur'); // Message console pour afficher l'évènement
	} else if (arrow.classList.contains('arrow_right')) {
		console.log('Le bouton "slide suivant" a été cliqué par l\'utilisateur'); // Message console pour afficher l'évènement
	}
	});
});

// Ajout des bullet-points dans la div "dots"
for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement('div');	
	bullet.classList.add('dot');
	//Écouteur d'évènements lors du clic sur un bullet-point
	bullet.addEventListener('click', function() {			
	updateSlide(i); // Mise à jour du slide actif
	});
	bulletPoints.appendChild(bullet);
}
updateSlide(activeSlideIndex); // Mise à jour éléments du slide actif au chargement initial

// Fonction pour mise à jour du slide actif 
function updateSlide(slideIndex) {
	const slide = slides[slideIndex];
	//Ajout de la classe "dot_selected" sur le bullet-point actif
	const bullets = bulletPoints.querySelectorAll('.dot');
	bullets.forEach((bullet, index) => {
	if (index === slideIndex) {
		bullet.classList.add('dot_selected');
	} else {
		bullet.classList.remove('dot_selected');
	}
	});
}