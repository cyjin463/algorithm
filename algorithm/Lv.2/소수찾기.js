/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
    let answer = 0;
    let arr = []
    
    const re = (com, other) => {
        if(com !== ''){
            arr.push(parseInt(com))
        }
        for(let i = 0; i < other.length; i++){
            re(com + other[i], other.substring(0,i) + other.substring(i+1))
        }
    }
    
    const prime = (num) => {
        if (num === 0 || num === 1){
            return false
        }
        let limit = parseInt(Math.sqrt(num))
        for(let i = 2; i<=limit; i++){
            if(num % i === 0){
                return false
            }
        }
        return true
    }
    
    const solution = () => {
        re('', numbers)
        const newArr = [...new Set(arr)]
        for(let i = 0; i < newArr.length; i++) {
            if(prime(newArr[i])){
                answer++
            }
        }
        return answer
    }
    return solution();
}