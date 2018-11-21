/**
 * @module init.js
 * @author Felix Goupil 
 * @author Elliott Cote
 * @copyright 2018
 */

 /** 
  * @const MAX_QUESTIONS
  * @type {number}
  * @description Nombre de questions à afficher dans le quiz.
  */
const MAX_QUESTIONS = 5;

/**
  * @const NB_CHOIX_MAX
  * @type {number}
  * @description Nombre de choix par question.
  */
const NB_CHOIX_MAX = 4;

/**
  * @const POS_REPONSE
  * @type {number}
  * @description Position de l’index de la bonne réponse.
  */
const POS_REPONSE = 0;

/**
  * @global
  * @name questionCourante
  * @type {number}
  * @description Index de la question présentement affichée.
  */
var questionCourante = 0;

/**
  * @global
  * @name totalPointage
  * @type {number}
  * @description Total du pointage accumulé.
  */
var totalPointage = 0;

/**
  * @global
  * @name reponseUtilisateur
  * @type {number}
  * @description Choix de l’utilisateur.
  */
var reponseUtilisateur = 0;

/**
  * @global
  * @name tableauQuestions
  * @type {object}
  * @description Liste des questions disponibles pour le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var tableauQuestions = 
[
  ["Parmi ces régions, quelle n'est pas considérée comme une zone bleue?",1,"https://fr.wikipedia.org/wiki/Zone_bleue_(long%C3%A9vit%C3%A9)","L'archipel des Galapagos","île japonaise d'Okinawa","l'île grecque d'Ikaria","Péninsule de Nicoya"],
  ["Quelle est l'origine du nom « zone bleue »?",3,"https://fr.wikipedia.org/wiki/Zone_bleue_(long%C3%A9vit%C3%A9)","Canadienne","Chinoise","Italienne","Française"],
  ["Qu'est-ce que le climat de ces zones bleues a en commun ? Ce sont des zones :",3,"https://fr.wikipedia.org/wiki/Zone_bleue_(long%C3%A9vit%C3%A9)","sec et aride","humide et tropical","ensoleillée et aérées","froid et sec"],
  ["Parmi ces leçons de longévité, laquelle est fausse?",4,"https://www.lesoleil.com/chroniques/marc-allard/les-zones-bleues-915f84a881b8435985b606617670fa2c","Bougez naturellement","Buvez du vin (modérément)","Boudez la viande et les produits raffinés","Dormir moins de 8h"],
  ["Jusqu'à combien de fois les chances de franchir le cap des 100 ans dans une zone bleue sont-elle supérieures à la moyenne en Amérique du Nord?",1,"10","100","2","5"],
  ["Les végétaux représentent quel pourcentage de l’alimentation de ces centenaires?",1,"https://mondenaturel.ca/les-principes-de-longevite-des-zones-bleues/","95%","80%","50%","100%"],
  ["Quel produit ne fait pas parti des aliments des Zones bleues?",4,"https://www.selection.ca/sante/maigrir/le-regime-des-zones-bleues-le-secret-de-la-longevite/","Chocolat noir","le poisson","le café","bière"],
  ["Dans les zones bleues, on consomme seulement _____ calories, comparé à la moyenne mondiale de 2358.",2,"https://www.masantenaturelle.com/chroniques/chroniques2/centenaires_zone-bleue.php","2000","1900","1500","2200"],
  ["Dans quel état des États-Unis se trouve une des zones bleues?]",3,"https://www.predical.fr/quel-est-le-secret-des-zones-bleues/","New-York","Massachusetts","Californie","Ohio"],
  ["À quelle fréquence les habitants des zones bleues mangent-ils une portion de viande?",3,"http://www.slate.fr/story/100317/centenaire-alimentation-zones-bleues","3 fois/mois","10 fois/mois","5 fois/mois","15 fois/mois"],
];

/**
  * @global
  * @name questionsQuiz
  * @type {object}
  * @description Liste des questions posées dans le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var questionsQuiz = [[]];

/**
 * @name choisirQuestions
 * @description Prend MAX_QUESTIONS de questions de tableauQuestions pour les mettre dans questionsQuiz.
 */
function choisirQuestions()
{

}

/**
 * @name init
 * @description Fonction d'initialisation du quiz.
 */
function init() 
{
  document.getElementById("buttonChangeTxt").addEventListener("click", majTexteQuestion, false);
  document.getElementById("buttonChangeTxt").addEventListener("click", majTexteChoix, false);
  document.getElementById("boiteChoix").addEventListener("click",majNoQuestionCourant,false);
  document.getElementById("boiteChoix").addEventListener("click",majTexteChoix,false);
  document.getElementById("boiteChoix").addEventListener("click",majTexteQuestion,false);
}

window.onload = init;
