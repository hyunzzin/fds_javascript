// 1. 짝수와 홀수
// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 'Even'을 반환하고 홀수인 경우 'Odd'를 반환하도록 evenOrOdd 함수를 완성하라.

// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.

function evenOdd(num) {
  if (num % 2 === 1) {
    return 'Odd';
  }
  return 'Even';
}

console.log(evenOdd(2));
console.log(evenOdd(3));
console.log(evenOdd(1000));

// 3항 연산자
function evenOrOdd(num) {
  const answer = num % 2 === 1 ? 'Odd' : 'Even';
  return answer;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));


// #2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

// (hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function getCount8() {
  let sum = 0;
  for (let i = 1; i <= 10000; i++) {
    const num = i + '';
    for (let j = 0; j < num.length; j++) {
      if (num[j] === '8') {
        sum += 1;
      }
    }
  }
  return sum;
}

console.log(getCount8()); // 4000

// function getCount88() {
//   let sum = 0;
//   let str = '';
//   for (let i = 1; i <= 10000; i++) {
//     str += i;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '8') {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// console.log(getCount88()); // 4000


// 3. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 alphaString46 함수를 완성하라. 예를 들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다.
// if 문
function alphaString46(s) {
  if (isNaN(s) === false) {
    if (s.length > 3 && s.length < 7) {
      return true;
    }
  }
  return false;
}
// 삼항 연산자
function alphaString46Or(s) {
    return isNaN(s) === false && (s.length > 3 && s.length < 7) ? true : false;;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false
