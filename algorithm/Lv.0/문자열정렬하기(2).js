/*
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/


function solution(my_string) {
    let answer = []
    let lowerStr = my_string.toLowerCase()
    for(let str of lowerStr){
        answer.push(str)
    }
    return answer.sort().join("");
}

//다른 사람 문제 풀이
function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

/*
split 사용하여 배열 구조 -> sort 문자 정렬 -> join object에서 string
*/