export const mergerArr = (arr1, arr2, key) => {
  const entries = arr1.map(
    (item) => [item[key], item],
  )
  const map = new Map(entries);
  return arr2.map((item) => {
    return (map.has(item[key]) ? map.get(item[key]) : item)
  });
}
