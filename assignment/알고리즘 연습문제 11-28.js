// 11. Check Palindrom
// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

// function checkPalindrom(str) {

// }

// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // true
// #12. 중복 요소 제거
// 인수로 전달된 배열의 요소 중에서 중복된 요소를 제외하고 유니크한 요소만을 반환하는 함수를 작성하라.

// for 문 대신 forEach를 사용하도록 하자.

// function uniq(array) {

// }

// console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
// #13. 중복된 요소
// 인수로 전달된 배열의 요소 중에서 중복된 요소만으로 구성된 배열을 반환하는 함수를 작성하라.

// for 문 대신 forEach를 사용하도록 하자.

// function findDuplicated(array) {

// }

// console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
// #14. 약수의 합
// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.

// 약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다

// function sumDivisor(num) {

// }

// console.log(sumDivisor(12)); // 28
// #15. 소수 찾기
// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라. 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

// 소수(素數, prime number)는 2, 3, 5, 7, 11, 13, 17…과 같이 1과 자신 이외의 어떤 수로도 나눠지지 않는 1보다 큰 양의 정수이다.

// function numberOfPrime(n) {

// }

// console.log(numberOfPrime(10)); // 4
// #16. 피보나치 수
// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 반환하는 fibonacci 함수를 작성하라. 예를 들어 n = 3이라면 2를 반환한다.

// function fibonacci(n) {

// }

// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// #17. 하샤드 수
// 하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

// 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200

// Harshad함수는 양의 정수 n을 매개변수로 입력받는다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.

// 예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.

// function isHarshad(n){

// }

// console.log(isHarshad(10)); // true
// console.log(isHarshad(12)); // true
// console.log(isHarshad(18)); // true
// console.log(isHarshad(11)); // false
// console.log(isHarshad(13)); // false
// #18. 두 정수 사이의 합
// adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.

// x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.

// 예를들어 x가 3, y가 5이면 12를 리턴한다.

// function adder(x, y){

// }

// console.log(adder(3, 5)); // 12
// #19. 배열의 첫 요소와 마지막 요소로 배열 만들기
// 배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 정수의 배열을 반환하는 함수를 완성하라. 예를 들어 인수가 [10, 15]인 경우, [ 10, 11, 12, 13, 14, 15 ]를 반환한다.

// function generateRange(from, to) {
//   const res = [];

//   return res;
// }

// console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
// #20. 배열의 인접한 요소곱 중 가장 큰 값 구하기
// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라. 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

// function adjacentElementsProduct(arr) {

// }

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
// #21. 배열에서 특정 값만을 구하기
// 배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라

// function getArray(arr) {

// }

// console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
// #22. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

// function average(array){

// }

// console.log(average([5, 3, 4])); // 4
// #23. 최단 거리 1차원 점의 쌍 구하기 (DAUM)
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

// function findMinDistance(array){

// }

// // 1차원 점의 배열
// var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
// console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
// #24. 특별한 정렬
// n개의 정수를 가진 배열이 있다. 이 배열은 양의 정수와 음의 정수를 모두 가지고 있다. 이 배열을 좀 특별한 방법으로 정렬해야 한다. 음의 정수는 앞쪽에 내림차순으로, 양의 정수는 뒷쪽에 있어야 한다. 단, 인수로 주어진 원본 배열은 변경되지 않아야 한다.

// 예를 들어, [-1, 1, 3, -2, 2, 0]이 주어졌을 때, [-1, -2, 0, 1, 2, 3]를 반환한다.

// function specialSort(array) {

// }

// const testArray = [-1, 1, 3, -2, 2, 0];

// console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
// console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]
// #25. 각 자릿수의 합 구하기
// 정수 n이 주어지면, n의 각 자릿수의 합을 구해서 return 하는 digitSum 함수를 완성하라. 예를 들어 n = 123이면 1 + 2 + 3 = 6을 return한다. 단, n은 100,000,000 이하의 정수로 한다.

// function digitSum(n) {

// }

// console.log(digitSum(123));  // 6
// console.log(digitSum(987));  // 24
// console.log(digitSum(100000001));  // false
// #26. 중복없는 배열
// 길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 한다. 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 isNotOverlapArray을 완성하라. 단, 배열의 요소는 정수이다.

// 예를 들어 주어진 배열이 [4, 1, 3, 2]이라면 true, [4, 1, 3] 또는 [1, 3]이라면 false를 반환한다.

// function isNotOverlapArray(array) {

// }

// console.log(isNotOverlapArray([4, 1, 3, 2])); // true
// console.log(isNotOverlapArray([4, 1, 3]));    // false
// #28. 요일 구하기
// 2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까? 두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.

// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다. 예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.

// function getDayName(a, b){

// }

// console.log(getDayName(5, 24)); // TUE