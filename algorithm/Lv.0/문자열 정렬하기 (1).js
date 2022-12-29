/*
문자열 my_string이 매개변수로 주어질 때,
my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
*/

function solution(my_string) {
    var answer = [];
    let rule = /^[0-9]$/;
    for (let num of my_string) {
        if (rule.test(num)) {
            answer.push(parseInt(num));
        }
    }
    return answer.sort((a, b) => a - b);
}

//다른 사람 문제 풀이

function solution(my_string) {
    return my_string
        .match(/\d/g)
        .sort((a, b) => a - b)
        .map((n) => Number(n));
}
