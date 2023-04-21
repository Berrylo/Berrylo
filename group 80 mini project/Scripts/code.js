// Main code object;
code = {
	Language: "English",

	// Get a random message and return it;
	Answer: function (Message) {
		if (this.Language == "English") {
			// Principal loop in the EnglishPatterns;
			for (var Item = 0; Item < EnglishPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (EnglishPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = EnglishAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}


			// If reaches here, means that the user message is something else;

			// Principal loop in the AnythingPatterns;
			for (var Item = 0; Item < AnythingPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (AnythingPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = EnglishAnythingAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}
		}
		else {
			// Principal loop in the FrançaisPatterns;
			for (var Item = 0; Item < FrançaisPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (FrançaisPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = FrançaisAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}


			// If reaches here, means that the user message is something else;

			// Principal loop in the AnythingPatterns;
			for (var Item = 0; Item < AnythingPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (AnythingPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = FrançaisAnythingAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}
		}
	}
};

