


// 1-masala
//
// function solve(son) {
// son = son.toString();
//     console.log(+son);
//     console.log(`${son.length} xonali son`)
// }
// solve(2434)





// 2-masala

// const solve = "hello1"
// let totalNumber = 0;
// for(let i = 1; i <= solve.length; i++) {
//     if(!isNaN(parseInt(solve[i]))) {
//         totalNumber++;
//     }
// }
// console.log(totalNumber)






// 3-masala
// function  word() {
//     let str =  "salom";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === 'a'){
//             count++
//         }
//
//     }
//     console.log(`${str}da :  ${count} a harfi mavjud`)
// }
// word()








// 4-masala
// let str = "Men dasturlash kursida o'qiyman";
// function minMaxWord(str) {
//     let words = str.split(" ");
//     let minWord = words[0];
//     let maxWord = words[0];
//     for (let word of words) {
//         if (word.length < minWord.length) {
//             minWord = word;
//         }
//         if (word.length > maxWord.length) {
//             maxWord = word;
//         }}
//     return { minWord: minWord, maxWord: maxWord };
// }
// let result = minMaxWord(str);
// console.log(result);
//



// 5-masala
// let arr = ["text", "world", "laptop"];
// function arrayToObject(arr) {
//     let result = {};
//     for (let str of arr) {
//         result[str] = str.length;
//     }
//     return result;
// }
// let obj = arrayToObject(arr);
// console.log(obj);




// 6-masala
// let n = 4;
// function getLevel(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }
// let levels = getLevel(n);
// console.log(levels);





// 7-masala
// let  arr = [ 1,2,3,4,5];
// let urta = arr[Math.floor((arr.length - 1) / 2)];
// console.log(urta)


// 7-masalani  2-usuli
// const alfa = () => {
//     let arr = [1,2,3,4,5];
//     let result = arr.reduce((a,b) => a + b,0);
//     result /= arr.length;
//     console.log(result)
// }
// alfa()