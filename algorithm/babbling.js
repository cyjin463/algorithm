// 내가 푼 답
function solution(babbling) {
  var answer = 0;
  let blabla = ["aya", "ye", "woo", "ma"];
  for (let i = 0; babbling.length > i; i++) {
    for (let j = 0; blabla.length > j; j++) {
      let word = babbling[i].replace(blabla[j], "?");
      if (word.replaceAll("?", "").length === 0) {
        answer++;
      } else {
        babbling[i] = word;
      }
    }
  }
  return answer;
}

// 다른 사람의 풀이
