/*
문자열 my_string과 정수 n이 매개변수로 주어질 때,
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string, n) {
    var answer = '';
    for(let str of my_string){
        for(let i=0; n>i; i++){
            answer += str
        }
    }
    return answer;
}

//다른 사람 문제 풀이
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}