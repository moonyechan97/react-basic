var array1 = ['one', 'two']; 
var array2 = ['three', 'four']; 
//ES5 자바스크립트로 배열 합치기, 인덱스로 합치기와 concat 배열의 내장함수로 합치기 
var unionArray = array1.concat(array2); //내장함수 사용 
var unionArray = [array1[0], array1[1] , array2[0] , array2[1], '인덱스사용']; 
console.log(unionArray); 
//ES6 전개연산자 용(아래) 
var unionArray = [...array1, ...array2, '전개연산자사용']; 
console.log(unionArray);
//이전 코드 중략(이전 슬라이드) 
//ES5 로 배열 요소 추출하여 새로운 배열 만들기 
var first = array1[0]; 
var second = array1[1]; 
console.log(first, second); 
var [first, second] = array1; //배열값이 변수 순서대로 자동 바인딩됨 
console.log(first, second); 
//ES6 전개연산자 사용(아래) 
var [first, ...others] = array1;  
console.log(first, others); 
//인덱스 순서에 해당하는 값이 많은 때 효과를 보인다.(아래) 
var [first, second, ...others] = unionArray; 
console.log(first, second, others);