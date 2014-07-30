// Problem 1 - alphabetSoup
// take string and return it in alphabetical order
var alphabetSoup = function(str) {
	var strList = str.split('');
	// Convert to Ascii codes
	var codeList = strList.map(function(item) {
		return item.charCodeAt()
	});
	// sort by Ascii codes taking into account capital letters
	var sortCodeList = _.sortBy(codeList, function(item) {
		if (item > 64 && item < 91) {
			item += 32
		}
		return item;
	})
	// convert back to characters from ascii codes
	var answer = sortCodeList.map(function(item) {
		return String.fromCharCode(item);
	});
	return answer.join('');
}
var str1 = 'hello';
var str2 = 'symbols';
var str3 = 'Hello';
console.log(alphabetSoup(str1));
console.log(alphabetSoup(str2));
console.log(alphabetSoup(str3));

// Problem 2 - vowelCount
var vowelCount = function(str) {
	var vowels = { a:1, e:1, i:1, o:1, u:1, A:1, E:1, I:1, O:1, U:1}
	var counter = 0;
	for (var i=0; i < str.length; i++) {
		if(str.charAt(i) in vowels) {
			counter++
		}
	}
	return counter;
}
console.log('Vowel count: '  + vowelCount('All cows eat grass'));

// Problem 3 - Bonus - coinDeterminer
var coinDeterminer = function(number) {
	var coinValues = [1, 5, 7, 9, 11];
	var counter = 0;
	var workingNumber = number;
	for(i=coinValues.length-1; i >=0; i--) {
		if(workingNumber > 0) {
			var currentCoinCount = Math.floor(workingNumber/coinValues[i]);
			if (currentCoinCount > 0) {
				if (workingNumber % (currentCoinCount*coinValues[i]) === 3) {
					currentCoinCount -= 1;
					counter += currentCoinCount;
					workingNumber = workingNumber - coinValues[i]*currentCoinCount;
				}
				else {
				counter += currentCoinCount;
				workingNumber = workingNumber - (coinValues[i]*currentCoinCount);
				}
			}
		}
	}
	return counter;
}
