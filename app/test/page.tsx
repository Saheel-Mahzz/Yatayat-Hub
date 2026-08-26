import Test from "@/modules/test";
import React from "react";

export default async function page() {
  //   const nestedArray = [1, [2, 3, 4, [5, 6]], [9, 0]];

  //   const flattenArray = (nestedArray) => {
  //     let result = [];

  //     for (const item of nestedArray) {
  //       if (Array.isArray(item)) {
  //         result = result.concat(flattenArray(item));
  //       } else {
  //         result.push(item);
  //       }
  //     }
  //     return result;
  //   };
  //   console.log(flattenArray(nestedArray));

  //   //   sunRange(5)

  //   function sumRange(number) {
  //     if (number <= 0) {
  //       return 0;
  //     }
  //     if (number == 1) {
  //       return 1;
  //     }
  //     return number * sumRange(number - 1);
  //   }
  //   console.log(sumRange(5));

  //   const number = [1, 3];

  //   const max = Math.max(...number);
  //   const array = Array.from({ length: max }, (_, index) => index + 1);
  //   const final = array.filter((arr) => !number.includes(arr));
  //   console.log("fianl", final);
  //   //   console.log("array", array);
  //   //   console.log("max", max);

  //   const sum = number.reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);

  //   console.log("sum", sum);

  // const array = [1, 4, 2, 7, 3];

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > array[i + 1]) {
  //     [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //   }
  // }
  // const salaryData = {
  //   base: 1000,
  //   allowance: 500,
  //   extra: {
  //     bonus: 300,
  //     perks: {
  //       travel: 200,
  //     },
  //   },
  // };
  // const totalSum = (object) => {
  //   let sum = 0;
  //   for (const data in object) {
  //     if (typeof object[data] == "object") {
  //       sum = sum + totalSum(object[data]);
  //     } else {
  //       sum = sum + object[data];
  //     }
  //   }
  //   return sum;
  // };

  // console.log("total sum", totalSum(salaryData));
  //   const sortedArray = array.sort((a, b) => b - a);

  //   let a = "saheel",
  //     b = "amar";

  //   [a, b] = [b, a];
  //   console.log("sprted array", sortedArray);

  //   console.log("a", a);

  // const fn = once(() => {
  //   console.log("hello");
  // });

  // fn();
  // fn();
  // fn();

  // const arr1 = [1, 2, 3, 4];
  // const arr2 = [2, 4, 6];

  // const Array1 = arr1.filter((arr) => !arr2.includes(arr));

  // const Array2 = arr2.filter((arr) => !arr1.includes(arr));
  // const uniqueArray = Array1.concat(Array2);
  // const array = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   let found = false;
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] == arr2[j]) {
  //       found = true;
  //       break;
  //     }
  //   }
  //   if (!found) {
  //     array.push(arr1[i]);
  //   }
  // }

  // console.log("result", array);

  // console.log("unique array", uniqueArray);
  // const once = (fn) => {
  //   let hasRun = false;
  //   return function () {
  //     if (!hasRun) {
  //       fn();
  //       hasRun = true;
  //     }
  //   };
  // };
  // const fn = () => {
  //   console.log("only once");
  // };
  // const myOnce = once(fn);
  // myOnce();
  // myOnce();
  // myOnce();
  // myOnce();
  // myOnce();
  // Output:
  // hello

  // const characters = "aabbcddee";

  // const unique = "";
  // for (let i = 0; i < characters.length; i = i + 2) {
  //   if (characters[i] != characters[i + 1]) {
  //     unique.concat(characters[i]);
  //   }
  // }
  // console.log("unique", unique);

  // const array = [
  //   { id: 1, name: "Ram" },
  //   { id: 2, name: "Hari" },
  // ];

  // const transformedArray = array.reduce((arr, curr, index) => {
  //   arr[index + 1] = curr;
  //   return arr;
  // }, {});
  // console.log("transfromed", transformedArray);

  const word = "hello world javascript";
  // let reversed = "";
  // for (let i = word.length - 1; i > 0; i--) {
  //   reversed += word[i];
  // }
  // console.log("revesed word", reversed);
  // const wordArray = word.split(" ");
  // const newArray = [];
  // for (let i = wordArray.length - 1; i >= 0; i--) {
  //   newArray.push(wordArray[i]);
  // }
  // console.log("reversed ", newArray.join(" "));

  // const wordArray = word.split(" ");
  // const result = [];
  // for (const word of wordArray) {
  //   result.unshift(word);
  // }
  // console.log("result", result.join(" "));

  // const debounce = (fn, timer) => {
  //   return function () {
  //     clearTimeout(timer);

  //     setTimeout(() => fn(), timer);
  //   };
  // };
  // const numbers = [1, 3, 7, 10, 2];

  // let highest = -Infinity,
  //   secondHighest = -Infinity;

  // for (const number of numbers) {
  //   if (number > highest) {
  //     secondHighest = highest;
  //     highest = number;
  //   } else if (number > secondHighest && number !== highest) {
  //     secondHighest = number;
  //   }
  // }

  // console.log("highest", secondHighest);

  // function memoize(fn) {
  //   const cache = {};

  //   return function (num) {
  //     if (num in cache) {
  //       return cache[num];
  //     }

  //     const result = fn(num);
  //     cache[num] = result;
  //     return result;
  //   };
  // }

  // function memoize(fn) {
  //   const cache = {};
  //   return function (...num) {
  //     // console.log("num", num);
  //     // if(num in cache){}
  //     const key = num.join(",");
  //     if (key in cache) {
  //       return cache[key];
  //     }
  //     const result = fn(...num);
  //     cache[key] = result;
  //     return result;
  //   };
  // }

  // const calculate = (...num) => {
  //   console.log("i am running");
  //   return num.reduce((acc, curr) => {
  //     acc = acc + curr;
  //     return acc;
  //   }, 0);
  // };

  // const memoizeFuntion = memoize(calculate);

  // memoizeFuntion(5, 12, 43);
  // memoizeFuntion(5, 12, 43);
  // memoizeFuntion(5, 12, 43);
  // memoizeFuntion(5, 12, 43);
  // memoizeFuntion(10);
  // memoizeFuntion(11);
  // memoizeFuntion(10);
  // memoizeFuntion(15);
  // memoizeFuntion(5);
  // memoizeFuntion(5);

  // const debounce = (fn, delay) => {
  //   let timer;
  //   return function () {
  //     console.log("Button clicked!");
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn();
  //     }, delay);
  //   };
  // };

  // const test = () => {
  //   console.log("I am running");
  // };

  // const debounceTest = debounce(test, 5000);
  // debounceTest();
  // debounceTest();
  // debounceTest();
  // debounceTest();

  // function myMap(array, callback) {
  //   const result = [];
  //   for (let i = 0; i < array.length; i++) {
  //     const test = callback(array[i], i, array);
  //     result.push(test);
  //   }
  //   return result;
  // }
  // const array = [1, 2, 3, 4, 5];
  // const calculate = (n, index) => {
  //   console.log("index", index);
  //   return n * n;
  // };
  // const result = myMap(array, calculate);
  // console.log("result", result);

  // const fetchData = (fn) => {
  //   let count = 0;
  //   return function () {
  //     count++;

  //     if (count >= 3) {
  //       console.log("this is the eror");

  //       return;
  //     }
  //     fn();
  //   };
  // };
  // const test = fetchData(() => {});
  // test();
  // test();
  // test();
  // test();
  // const shuoldRun = false;

  const apiCall = () => Promise.reject("Network fail vayo!");
  // async function fetchWithRetry(retries = 3) {
  //   try {
  //     // if (!shuoldRun) {
  //     //   throw new Error("Failed!"); // 🚨 Manually error throw garyau
  //     // }
  //     // return "Success!";
  //    await  apiCall();
  //   } catch (error) {
  //     console.log("retrying");
  //     if (retries > 1) {
  //       return await fetchWithRetry(retries - 1);
  //     }
  //     throw new Error(`Failed after 3 attempts: ${error}`);
  //   }
  // }
  // fetchWithRetry();
  async function test() {
    console.log("1. Inside async");
    await apiCall();
    console.log("2. After await");
  }

  test();
  console.log("3. Outside async");
  console.log("4. End of script");

  return <Test />;
}

// [1,3]
// 1+2+3 = 6
// 1+3 =4k vanya o

// 5 + sum (4)//hold = 5 + 10 =15
// 4 + sum(3)//hold = 4 + 6 = 10
// 3+ sum(2)//hold = 3 + 3= 6
// 2 + sum(1)//hold =2 + 1 =3
