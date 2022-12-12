/*
어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n, t) {
  for (let i = 0; t > i; i++) {
    n = n * 2;
  }
  return n;
}

// 다른 사람 풀이
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

function solution(n, t) {
  return n * Math.pow(2, t);
}

function solution(n, t) {
  return n * 2 ** t;
}
