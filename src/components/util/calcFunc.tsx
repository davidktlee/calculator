export const calcFunc = (init: string, operation: string, second: string) => {
  const initNum = parseFloat(init)
  const secondNum = parseFloat(second)
  switch (operation) {
    case '+':
      return initNum + secondNum
    case '-':
      return initNum - secondNum
    case '/':
      return initNum / secondNum
    case '*':
      return initNum * secondNum
    case '%':
      return initNum % secondNum
    case '^':
      return initNum ** secondNum
    default:
      return 0
  }
}
