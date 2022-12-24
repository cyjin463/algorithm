/*
문자열 my_string이 매개변수로 주어집니다.
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    var answer = 0;
    let rule = /^[0-9]$/;
    for (let str of my_string) {
        if (rule.test(str)) {
            answer += parseInt(str);
        }
    }
    return answer;
}

//다른 사람 문제 풀이

function solution(my_string) {
    return my_string
        .replaceAll(/[^\d]/g, "")
        .split("")
        .map((v) => +v)
        .reduce((a, v) => a + v, 0);
}
