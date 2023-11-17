const numbersInStringFormat = ["10", "20", "30", "40"];

function convertToNumbers(arr: string[]): number[] {
  return arr.map((elem) => parseInt(elem, 10)); 
}

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]