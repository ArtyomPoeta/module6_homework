function getNum(x = 14) {
  return function getSum(y = 21) {
    return x + y
  }
}

const resFunc = getNum()
console.log(resFunc())

