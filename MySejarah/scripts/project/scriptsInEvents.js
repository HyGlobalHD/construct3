


const scriptsInEvents = {

	async Game_Event90_Act1(runtime, localVars)
	{
		const hardnessLvl = runtime.globalVars.hardnessLevel;
		
		let dt = getRandomQuestionByLevel(hardnessLvl);
		const dtId = dt.randomId;
		const dtQuestions = dt.randomQuestion;
		const dtAns = dt.randomAns;
		const dtWrong1 = dt.randomWrong1;
		const dtWrong2 = dt.randomWrong2;
		
		// Store the correct answer separately
		const correctAnswer = dtAns;
		
		// Create an array of answers to shuffle
		const answers = [dtAns, dtWrong1, dtWrong2];
		
		// Shuffle the answers
		const shuffledAnswers = shuffle(answers);
		
		globalThis.dtId = dtId;
		globalThis.dtQuestions = dtQuestions;
		globalThis.dtAns = dtAns;
		globalThis.dtWrong1 = dtWrong1;
		globalThis.dtWrong2 = dtWrong2;
		globalThis.correctAnswer = correctAnswer; // Keep the correct answer separate
		globalThis.shuffledAnswers = shuffledAnswers; // This will contain the shuffled answers
		
		globalThis.shuffledAns1 = shuffledAnswers[0];
		globalThis.shuffledAns2 = shuffledAnswers[1];
		globalThis.shuffledAns3 = shuffledAnswers[2];
		
		let ansNum;
		
		if(shuffledAns1 == correctAnswer) ansNum = 1;
		if(shuffledAns2 == correctAnswer) ansNum = 2;
		if(shuffledAns3 == correctAnswer) ansNum = 3
		
		
		// Optional: Log the results
		//console.log("Correct Answer:", correctAnswer);
		//console.log("Shuffled Answers:", shuffledAnswers);
		//console.log("Shuffled shuffledAns3:", shuffledAns3);
		console.log(ansNum);
		
		globalThis.ansNumber = ansNum;
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

