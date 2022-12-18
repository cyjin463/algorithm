/*
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때,
두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/

// 첫 풀이

function solution(dots) {
  var answer = 0;
  let a =
    (Math.atan(Math.abs((dots[1][0] - dots[0][0]) / (dots[0][1] - dots[1][1]))) * 180) / Math.PI;
  let b =
    (Math.atan(Math.abs((dots[3][0] - dots[2][0]) / (dots[2][1] - dots[3][1]))) * 180) / Math.PI;

  let c =
    (Math.atan(Math.abs((dots[2][0] - dots[0][0]) / (dots[0][1] - dots[2][1]))) * 180) / Math.PI;
  let d =
    (Math.atan(Math.abs((dots[3][0] - dots[1][0]) / (dots[1][1] - dots[3][1]))) * 180) / Math.PI;
  if (a === b) {
    answer = 1;
  }
  return answer;
}

// 리팩토링

function solution(dots) {
  var answer = 0;
  let math = (x1, y1, x2, y2) => {
    return Math.atan((x2 - x1) / (y1 - y2));
  };
  let a = math(dots[0][0], dots[0][1], dots[1][0], dots[1][1]);
  let b = math(dots[2][0], dots[2][1], dots[3][0], dots[3][1]);
  if (a === b) {
    answer = 1;
  }
  return answer;
}
