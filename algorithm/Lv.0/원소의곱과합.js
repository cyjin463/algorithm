//문제 설명
/*정수가 담긴 리스트 num_list가 주어질 때, 
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.*/

function solution(num_list) {
    let multiply = 1;
    let add = 0;
    let answer = 0;

    for (let i = 0; i < num_list.length; i++) {
        multiply *= num_list[i];
        add += num_list[i];
    }

    return multiply < add ** 2 ? 1 : 0;
}
