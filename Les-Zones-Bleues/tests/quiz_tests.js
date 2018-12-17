QUnit.test( "WHEN_score is 0_THEN_ added score is 1_RETURNS_totalPointage",
    function( assert ) {
         //arrange
         totalPointage = 0;
         
         //act
         ajouterPoint();
         //assert
        const EXPECTED_SCORE = 1;
         assert.equal(EXPECTED_SCORE, totalPointage);
    });
QUnit.test( "WHEN_score is 2_THEN_ added score is 3_RETURNS_totalPointage", 
    function( assert ) {
         //arrange
         totalPointage = 2;
         
         //act
         ajouterPoint();
         //assert
        const EXPECTED_SCORE = 3;
         assert.equal(EXPECTED_SCORE, totalPointage);
    });
QUnit.test( "WHEN_score is 3_THEN_ added score is 4_RETURNS_totalPointage", 
    function( assert ) {
         //arrange
         totalPointage = 3;
         
         //act
         ajouterPoint();
         //assert
        const EXPECTED_SCORE = 4;
         assert.equal(EXPECTED_SCORE, totalPointage);
    });

QUnit.test( "WHEN_getPointage_THEN_RETURNS_totalPointage", 
    function( assert ) {
    	//arrange
    	totalPointage = 1;
    	//act
    	obtenirPointage(totalPointage);
    	//assert
    	EXPECTED_POINTAGE = 1;
         assert.equal( totalPointage, EXPECTED_POINTAGE );
    });


QUnit.test("WHEN_noQuestionIs1_THEN_reponseUtilisateurIs1_RETURNS_noQuestion",
	function(assert) {
		//arrange
		noQuestion = 1;
		//act
		obtenirChoix1 (noQuestion);
		//assert
		var EXPECTED_ANSWER = 1; 
		assert.ok( noQuestion = EXPECTED_ANSWER );

	});
QUnit.test("WHEN_noQuestionIs2_THEN_reponseUtilisateurIs2_RETURNS_noQuestion",
	function(assert) {
		//arrange
		noQuestion = 2;
		//act
		obtenirChoix2 (noQuestion);
		//assert
		var EXPECTED_ANSWER = 2; 
		assert.ok( noQuestion = EXPECTED_ANSWER );

	});

QUnit.test("WHEN_noQuestionIs3_THEN_reponseUtilisateurIs3_RETURNS_noQuestion",
	function(assert) {
		//arrange
		noQuestion = 3;
		//act
		obtenirChoix3 (noQuestion);
		//assert
		var EXPECTED_ANSWER = 3; 
		assert.ok( noQuestion = EXPECTED_ANSWER );

	});
QUnit.test("WHEN_noQuestionIs4_THEN_reponseUtilisateurIs4_RETURNS_noQuestion",
	function(assert) {
		//arrange
		noQuestion = 4;
		//act
		obtenirChoix4 (noQuestion);
		//assert
		var EXPECTED_ANSWER = 4; 
		assert.ok( noQuestion = EXPECTED_ANSWER );

	});

	QUnit.test("WHEN_questionCouranteIs1_THEN_becomes2_RETURNS_questionCourante",
	function(assert) {
		//arrange
		questionCourante = 1;
		//act
		majNoQuestionCourant (questionCourante);
		//assert
		var EXPECTED_ANSWER = 2; 
		assert.ok( questionCourante = EXPECTED_ANSWER );

	});
	QUnit.test("WHEN_questionCouranteIs6_THEN_Game Over_RETURNS_questionCourante",
	function(assert) {
		//arrange
		questionCourante = 6;
		//act
		majNoQuestionCourant(questionCourante);
		//assert
		var EXPECTED_ANSWER = true; 
		assert.ok( finDeLaPartie = EXPECTED_ANSWER );

	});
