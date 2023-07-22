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
const bannerImage = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
let activeSlideIndex = 0; // Index du slide actif

// Mise en place des écouteurs d'évènements lors du clic des boutons de flèches pour le changement d'image du slider
// Et utilisation de l'opérateur modulo pour faire un défilement infini dans le tableau des slides
const arrows = document.querySelectorAll('.arrow');
arrows.forEach(function(arrow) {
	arrow.addEventListener('click', function() {
	if (arrow.classList.contains('arrow_left')) {
		console.log('Le bouton "slide précédent" a été cliqué par l\'utilisateur'); // Message console pour afficher l'évènement
		activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
	} else if (arrow.classList.contains('arrow_right')) {
		console.log('Le bouton "slide suivant" a été cliqué par l\'utilisateur'); // Message console pour afficher l'évènement
		activeSlideIndex = (activeSlideIndex + 1) % slides.length;
	}
	updateSlide(activeSlideIndex);  // Mise à jour éléments du slide actif
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

// Fonction pour mettre à jour le slide actif (bullet point, éléments texte <p> et image src)
function updateSlide(slideIndex) {
	const slide = slides[slideIndex];
	bannerImage.src = `assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;
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
updateSlide(activeSlideIndex);  // Mise à jour éléments slide actif au chargement initial