// validate a string is a palindrome
// don't use built in methods
// reduce big()

const validatePalindrome = (word) => {
	const length = word.length;
	
	if (length < 2) return true;

	for (let i=0; i<length/2; i++) {
		if (word[i] !== word[length-1-i]) return false;
	}

	return true;
}

validatePalindrome('taco'); // false
validatePalindrome('shmemhsc'); // false
// validatePalindrome('racecar'); // true
// validatePalindrome('mom'); // true
// validatePalindrome('ppaaaapp'); // true