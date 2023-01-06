/*
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers, direction) {
    let firstNum = numbers[0];
    let lastNum = numbers[numbers.length - 1];
    switch (direction) {
        case "right":
            numbers.pop();
            numbers.unshift(lastNum);
            return numbers;
        default:
            numbers.shift();
            numbers.push(firstNum);
            return numbers;
    }
}

//다른 사람 문제 풀이
function solution(numbers, direction) {
    direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}
