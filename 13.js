// 즉시 실행 함수로 실행
// var Counter = (function () {
//   var num = 0;

//   function increase() {
//     return ++num;
//   }

// }());

// increase 메소드를 반환하는 객체 리터럴





// var Counter = {
//   num = 0,
//   // 메소드 축약 표현
//   increase() {
//     return ++this.num; //this를 안쓰면 안됨
//   },
//   decrease(){
//     return --this.num;
//   }

// };

// console.log(Counter.increase());

// 밖에서 값을 조작할 수 있다는 문제점 발생!!
// 정보 은닉 : 알리고 싶은 정보를 알리지 않으려고


// ES5 방식
// 정보 은닉, 캡슐화
var Counter = (function () {
  var num = 0; //객체 내의 변수라서 변화한 값을 가지고 있을 수 있다.

  return { // 중첩함수, 중첩함수가 외부함수보다 더 오래 살아남으면 closer
    increase() {
      return ++num; // 생성될 때 상위의 num이 있는 스코프를 가진다. -> num은 자유변수
    },
    decrease() {
      return --num;
    }
  };

}()); // 외부 스코프가 살아 있는 것이 메모리 낭비가 아니냐 -> 모든 브라우저는 클로저에 대한 처리의 최적화가 되어 있음


// ES6 방식
// 모듈 : import, export 구현 X -> why? 구체적인 구현 방안에 대해서는 언급을 안해서