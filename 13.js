// 즉시 실행 함수로 실행
var Counter = (function () {
  var num = 0;

  function increase() {
    return ++num;
  }

}());

// increase 메소드를 반환하는 객체 리터럴