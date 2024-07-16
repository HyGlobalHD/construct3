runOnStartup(async runtime => {
  runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {
  fetch('questions.json')
    .then(response => response.json())
    .then(data => {
      // Store the loaded data globally
      window.questionsArray = data;
      console.log("Data:", data);
      data.forEach((question, index) => {
        console.log(`Question ${index + 1}:`, question);
      });

      // Step 2: Sort Questions by Level
      sortQuestionsByLevel();

      // Optionally, call getRandomQuestionByLevel here
      // getRandomQuestionByLevel(1);
    })
    .catch(error => console.error('Error loading JSON:', error));
}

// Step 2: Sort Questions by Level
function sortQuestionsByLevel() {
  if (window.questionsArray) {
    window.questionsArray.sort((a, b) => a.level - b.level);
    console.log("Questions sorted by level:", window.questionsArray);
  } else {
    console.error("questionsArray is undefined in sortQuestionsByLevel");
  }
}

// Step 3: Select a Random Question Based on Level 
globalThis.getRandomQuestionByLevel = function(level) {
  if (!window.questionsArray) {
    console.error("questionsArray is undefined");
    return null; // Return null if questionsArray is undefined
  }

  const filteredQuestions = window.questionsArray.filter(question => question.level == level);
  if (filteredQuestions.length === 0) {
    console.error(`No questions found for level ${level}`);
    return null; // Return null if no questions are found
  }

  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  const randomQuestion = filteredQuestions[randomIndex].questions; // Ensure this matches the key in your JSON
  const randomId = filteredQuestions[randomIndex].qid; // Ensure this matches the key in your JSON
  const randomAns = filteredQuestions[randomIndex].correct_ans; // Ensure this matches the key in your JSON
  const randomWrong1 = filteredQuestions[randomIndex].incorrect1; // Ensure this matches the key in your JSON
  const randomWrong2 = filteredQuestions[randomIndex].incorrect2; // Ensure this matches the key in your JSON

  console.log("Random question id:", randomQuestion);
  console.log("Random question selected:", randomId);
  console.log("Random question ans:", randomAns);
  console.log("Random question wrong:", randomWrong1);
  console.log("Random question wrong 2:", randomWrong2);

  // Return the relevant data
  return {
    randomId,
    randomQuestion,
    randomAns,
    randomWrong1,
    randomWrong2
  };
}

globalThis.shuffle = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

