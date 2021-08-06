export const mergeArr = (arr1, arr2, key) => {
  const entries = arr1.map(
    (item) => [item[key], item],
  )
  const map = new Map(entries);
  return arr2.map((item) => {
    return (map.has(item[key]) ? map.get(item[key]) : item)
  });
}

export const daysToDate = (days) => {
  const [year, d] = getCountYearAndDay(days)
  const [month, day] = getMonthAndDay(d,year % 4 === 3)
  return {
    year,
    month,
    day
  }
}

const getMonthAndDay = (days,isLeapYear) => {
  let month = [31, 28, 31, 30,31,30,31,31,30,31,30,31]
  if(isLeapYear){
    month[1] = 29
  }
  let count = 0

  for (let i = 0; i < month.length; i++) {
    if(days >= month[i]){
      days = days - month[i]
      count++
    }
  }
  return [count,days]
}

const getCountYearAndDay = (days) => {
  const years = [365,365,365,366]
  let count = 0
  if(days === 365){
    return [count + 1, 0]
  }
  while(days > 365){
    for (let i = 0; i < years.length; i++) {
      if(days >= years[i]){
        days = days - years[i]
        count++
      }
    }
  }
  return [count, days]
}

const useJjc = {
  mergeArr,
  daysToDate
}

export default useJjc
