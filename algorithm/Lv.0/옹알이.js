머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
문자열 배열 babbling이 매개변수로 주어질 때,
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(babbling) {
  var answer = 0;
  let blabla = ["aya", "ye", "woo", "ma"];
  for (let i = 0; babbling.length > i; i++) {
    for (let j = 0; blabla.length > j; j++) {
      let word = babbling[i].replace(blabla[j], "?");
      if (word.replaceAll("?", "").length === 0) {
        answer++;
      } else {
        babbling[i] = word;
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(babbling) {
    let df = [ "aya", "ye", "woo", "ma"];
    let res = 0;
    for(let w of babbling) {
        if(df.some(f => w.includes(f+f))) continue;

        let rest = 
           df.reduce((a, f) => a.replaceAll(f, ""), w);

        if (rest.length > 0) continue;

        res++;
    }

    return res;
}

function solution(babbling) {
  const 가능한_발음_목록 = ["aya", "ye", "woo", "ma"]
  return babbling.filter((e) => {
      가능한_발음_목록.forEach((가능한_발음) => {
          e = e.replace(new RegExp(가능한_발음 + 가능한_발음, 'gi'), '어려웡ㅎ')
          e = e.replace(new RegExp(가능한_발음, 'gi'), '')
      })
      return e === ''
  }).length;
}