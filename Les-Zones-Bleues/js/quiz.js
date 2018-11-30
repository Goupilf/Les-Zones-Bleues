/**
 * @module quiz.js
 * @author Felix Goupil
 * @author Elliott Cote
 * @copyright 2018
 */ 

/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */

function validerQuestion(noQuestion, choixUtilisateur)
{
	
	if( reponseUtilisateur == questionsQuiz[questionCourante-1][1])
	{
		ajouterPoint();
	}
	else
	{
		window.prompt("Mauvaise réponse ! Pour plus d'infromation veuiller visiter le site web suivant:",tableauQuestions[questionCourante-1][2])
	//$("#modalReponse").modal();

	}
}




/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */
function ajouterPoint()
{
	totalPointage++;
}

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
	document.getElementById("totalPoints").textContent = totalPointage;

}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
	document.getElementById("endScreen").textContent = "Fin de la partie";
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */
function chargerQuestionSuivante()
{
	//ajouter votre code ici
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
	//ajouter votre code ici
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */
function obtenirChoix1(noQuestion)
{
	reponseUtilisateur = 1;	
}
function obtenirChoix2(noQuestion)
{
	reponseUtilisateur = 2;	
}
function obtenirChoix3(noQuestion)
{
	reponseUtilisateur = 3;	
}
function obtenirChoix4(noQuestion)
{
	reponseUtilisateur = 4;	
}


/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion)
{
	//ajouter votre code ici
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */
function majPointage()
{
	//ajouter votre code ici
}

/**
 * @name majTotalQuestion
 * @description Mets à jour le nombre total de questions dans l'interface.
 */
function majTotalQuestion()
{
	//ajouter votre code ici
}

/**
 * @name majTexteChoix
 * @description Modifie l'interface en affichant les réponses dans des boutons pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher les réponses.
 */
function majTexteChoix(noQuestion)
{	
	if(questionCourante <= MAX_QUESTIONS)
	{
		document.getElementById('txtChoix0').textContent = questionsQuiz[questionCourante][3];
		document.getElementById('txtChoix1').textContent = questionsQuiz[questionCourante][4];
		document.getElementById('txtChoix2').textContent = questionsQuiz[questionCourante][5];
		document.getElementById('txtChoix3').textContent = questionsQuiz[questionCourante][6];
	}
}

/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */
function majTexteQuestion(noQuestion)
{
	document.getElementById("container").style.display = "block";
	if(questionCourante <= MAX_QUESTIONS)
	{
		document.getElementById('texteQuestion').textContent = questionsQuiz[questionCourante][0];
	}
	
	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant une le numéro de la question courante.
 */
function majNoQuestionCourant()
{	
	questionCourante++;
	
	if (questionCourante <= (MAX_QUESTIONS))
	{ 

		document.getElementById("noQuestionCourante").textContent = questionCourante;

	}
	else
	{
		document.getElementById("noQuestionCourante").textContent = questionCourante;
		estFinPartie();
	}
	
	
	
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{
	//ajouter votre code ici
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */	
function majProgression()
{
	//ajouter votre code ici
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface()
{
	//ajouter votre code ici
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué et activer le bouton Valider.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
	//ajouter votre code ici
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	
}
