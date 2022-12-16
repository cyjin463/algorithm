/*
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
*/

function solution(n) {
  var answer = 0;
  let newNum = String(n);
  for (let i = 0; newNum.length > i; i++) {
    answer += parseInt(newNum[i]);
  }
  return answer;
}

//다른 사람 풀이

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(n) {
  return (n + "").split("").reduce((a, b) => +b + a, 0);
}
