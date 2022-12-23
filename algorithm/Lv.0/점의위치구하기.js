/**
사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다.
사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
*/

function solution(dot) {
    if(dot[0]>0 && dot[1]>0){
        return 1
    } else if (dot[0]<0 && dot[1]>0){
        return 2
    } else if (dot[0]<0 && dot[1]<0){
        return 3
    } else if (dot[0]>0 && dot[1]<0){
        return 4
    }
}

//다른 사람 문제 풀이
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}