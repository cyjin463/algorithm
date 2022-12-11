function solution(array) {
  let sort = array.sort((a, b) => a - b);
  let center = Math.floor(array.length / 2);
  let answer = sort[center];
  return answer;
}
