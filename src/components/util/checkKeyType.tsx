export const isNumber = (value: number) => {
  return (value < 48 || value > 57) && value !== 190 ? false : true
}
