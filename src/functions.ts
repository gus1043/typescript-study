function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number) {
  console.log("Result: " + num);
}

//cb 부분이 콜백함수
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printResult2(add(5, 12)));

//변수를 통해 함수 실행
// let combineValues: Function;
//let combineValues; //기본 타입은 any인데 이렇게하면 문제가 생길 수 있음
let combineValues: (n1: number, n2: number) => number;

// comvines = 5 //라고 하면 오류가 발생
combineValues = add;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
