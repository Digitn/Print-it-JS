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