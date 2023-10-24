export const getPercentageNumber = (percentage: string)=>{
  if (percentage.endsWith('%') && percentage.length > 1) {
    const number = percentage.split('%')[0]
    return Number(number)
  }

  return Number(percentage)
}