/*
정수 n이 매개변수로 주어질 때,
n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

  function solution(n) {
	let answer = []
	let num = 0
	for(let i=0; n >=i; i++){
		if(n%i===0) {
			answer.push(i)
		}
	}
	return answer
}


//다른 사람 문제 풀이

var solution=n=>new Array(n).fill(1).map((_,i)=>i+1).filter(a=>!(n%a))
