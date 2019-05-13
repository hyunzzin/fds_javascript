// 1. 제어문 연습 문제

// #1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
// var x = 15;

// // 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.


if (x > 10 && x < 20) {
  console.log(x);
}

// #2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.


for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



// #3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.


for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + '');
  }
}




// #4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (let i = 9; i >= 0; i--) {
  if (i % 2 === 1) {
    console.log(i);
  }
}


// #5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let even = 0;
while (even < 10) {
  if (even % 2 === 0) {
    console.log(even);
  }
  even = even + 1;
}


// #6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

let odd = 9;
while (odd >= 0) {
  if (odd % 2 === 1) {
    console.log(odd);
  }
  odd = odd - 1;
}



// #7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let intSum = 0;
for (let i = 0; i < 10; i++) {
  intSum = intSum + i;
}
console.log(intSum);



// #8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let sum = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum = sum + i;
  }
}
console.log(sum);



// #9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let twoThreeSum = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    twoThreeSum = twoThreeSum + i;
  }
}
console.log(twoThreeSum);



// #10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 6) {
      console.log([i, j]);
    }
  }
}



// #11. 삼각형 출력하기 - pattern 1
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
let triangleRight = '';
for (let i = 1; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    triangleRight += '*';
  }
  triangleRight += '\n';
}
console.log(triangleRight);



// #12. 삼각형 출력하기 - pattern 2
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

let triangleInvertedLeft = '';
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6; j++) {
    if (j >= i) {
      triangleInvertedLeft += '*'
    } else {
      triangleInvertedLeft += ' ';
    }

  }
  triangleInvertedLeft += '\n';
}
console.log(triangleInvertedLeft);



// #13. 삼각형 출력하기 - pattern 3
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

let triangleInvertedRight = '';
for (let i = 1; i < 6; i++) {
  for (let j = 5; j >= i; j--) {
    triangleInvertedRight += '*';
  }
  triangleInvertedRight += '\n';
}
console.log(triangleInvertedRight);



// #14. 삼각형 출력하기 - pattern 4
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

let triangleLeft = '';
for (let i = 1; i < 6; i++) {
  for (let j = 5; j > 0; j--) {
    if (j <= i) {
      triangleLeft += '*'
    } else {
      triangleLeft += ' ';
    }

  }
  triangleLeft += '\n';
}
console.log(triangleLeft);



// #15. 정삼각형 출력하기

let equilateralTriangle = '';
for (let i = 1; i < 6; i++) {
  for (let j = 0; j < 4 + i; j++) {
    if (5 - i > j) {
      equilateralTriangle += ' ';
    } else {
      equilateralTriangle += '*';
    }
  }
  equilateralTriangle += '\n';
}
console.log(equilateralTriangle);


// #16. 역정삼각형 출력하기

let invertedTriangle = '';
for (let i = 1; i < 6; i++) {
  for (let j = 0; j < 10 - i; j++) {
    if (i - 1 > j) {
      invertedTriangle += ' ';
    } else {
      invertedTriangle += '*';
    }
  }
  invertedTriangle += '\n';
}
console.log(invertedTriangle);
