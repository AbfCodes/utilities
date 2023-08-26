function getRandomCharacterFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateSimilarUsernames(inputUsername, numSuggestions = 6) {
  const similarUsernames = [];
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Define uppercaseChars
  const specialChars = "!@#$%^&*";
  const digits = "0123456789";

  for (let i = 0; i < numSuggestions; i++) {
    let suggestion = inputUsername
      .replace(/[A-Z]/, getRandomCharacterFromArray(lowercaseChars))
      .replace(/[a-z]/, getRandomCharacterFromArray(specialChars))
      .replace(/[0-9]/, getRandomCharacterFromArray(digits))
      .replace(
        /[^a-zA-Z0-9]/,
        getRandomCharacterFromArray(lowercaseChars + uppercaseChars)
      );

    similarUsernames.push(suggestion);
  }

  return similarUsernames;
}

const userInput = "abc";
const similarUsernames = generateSimilarUsernames(userInput);
console.log(similarUsernames);
