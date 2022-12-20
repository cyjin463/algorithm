/*
두 배열이 얼마나 유사한지 확인해보려고 합니다.
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(s1, s2) {
  var answer = 0;
  for(let str of s1){
      if(s2.includes(str)){
         answer +=1
      }
  }
  return answer;
}

//다른 사람 문제 풀이

function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}