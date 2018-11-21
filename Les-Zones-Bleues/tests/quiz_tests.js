QUnit.test( "WHEN THEN", 
    function( assert ) {
         //arrange
         totalPointage = 0;
         
         //act
         ajouterPoint;
         //assert
        const EXPECTED_SCORE = 1;
         assert.equal(EXPECTED_SCORE, totalPointage);
    });

QUnit.test( "WHEN_getPointage_THENscoreIsReturned", 
    function( assert ) {
    	//arrange
    	totalPointage = 1;
    	//act

    	//assert
         assert.ok( pointage(5) == 5, "Passed!" );
    });

Qunit.test("WHEN_")

	var eScore = document.getElementById("totalPoints");
	var currentScore = eScore.innerHTML
