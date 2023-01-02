/*
정수 배열 numbers가 매개변수로 주어집니다.
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
    let num1 = numbers.sort((a, b) => a - b).slice(-2);
    let num2 = numbers.sort((a, b) => a - b).slice(0, 2);
    if (num1[0] * num1[1] > num2[0] * num2[1]) {
        return num1[0] * num1[1];
    } else {
        return num2[0] * num2[1];
    }
}

//다른 사람 문제 풀이

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(
        numbers[0] * numbers[1],
        numbers[numbers.length - 1] * numbers[numbers.length - 2]
    );
}

//Math.max 활용
