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