/*
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
최빈값이 여러 개면 -1을 return 합니다.
*/

if (array.length === 1) {
  return parseInt(array[0]);
} else {
  array.reduce((arr, num) => {
    arr[num] = (arr[num] || 0) + 1;
    return (obj = arr);
  }, {});
  obj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
}

if (obj.length > 1 && obj[0][1] === obj[1][1]) {
  return -1;
} else {
  return parseInt(obj[0][0]);
}

//다른 사람 풀이
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

function solution(array) {
  const counts = array.reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
  const max = Math.max(...Object.values(counts));
  const modes = Object.keys(counts).filter((key) => counts[key] === max);
  return modes.length === 1 ? +modes[0] : -1;
}
