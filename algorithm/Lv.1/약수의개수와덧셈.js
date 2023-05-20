/*
문제설명
두 정수 left와 right가 매개변수로 주어집니다.
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let num = 0;
        for (let j = 0; j <= i; j++) {
            if (i % j === 0) num++;
        }
        if (num % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}

//다른 사람 풀이 - 제곱근이 정수이면 약수의 개수는 짝수이다!!!!!!!!!!!!!
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
