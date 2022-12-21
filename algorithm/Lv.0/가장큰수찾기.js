/**
 정수 배열 array가 매개변수로 주어질 때,
 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(array) {
  let newArray = [...array];
  let max = 0;
  let index = 0;
  max = newArray.sort((a, b) => b - a)[0];
  index = array.indexOf(max);
  return [max, index];
}

//리팩토링
function solution(array) {
  let max = Math.max(...array);
  let index = array.indexOf(max);
  return [max, index];
}

// 다른사람 문제 풀이

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
//Math.max 활용
