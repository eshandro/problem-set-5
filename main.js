// Problem 1 - alphabetSoup
// take string and return it in alphabetical order
var alphabetSoup = function(str) {
	var strList = str.split('');
	var answer = _.sortBy(strList);
	return answer.join('');
}
var str1 = 'hello';
var str2 = 'symbols';
var str3 = 'Hello';
console.log(alphabetSoup(str1));
console.log(alphabetSoup(str2));
console.log(alphabetSoup(str3));