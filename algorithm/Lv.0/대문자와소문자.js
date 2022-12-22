/*
문자열 my_string이 매개변수로 주어질 때,
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    let answer = "";
    for (let i = 0; my_string.length > i; i++) {
        if (my_string[i] === my_string[i].toLowerCase()) {
            answer += my_string[i].toUpperCase();
        } else {
            answer += my_string[i].toLowerCase();
        }
    }
    return answer;
}

//다른 사람 문제 풀이

function solution(my_string) {
    var answer = "";
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}
