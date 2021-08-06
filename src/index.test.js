import {mergeArr,daysToDate} from './index'

test('test mergeArr', () => {
  const arr1 = [
    {label: 'a', value: '1'},
    {label: 'b', value: '1'},
    {label: 'c', value: '1'}
  ]

  const arr2 = [
    {label: 'a', value: '0'},
    {label: 'b', value: '0'},
    {label: 'd', value: '0'},
    {label: 'e', value: '0'}
  ]

  const output = [
    {label: 'a', value: '1'},
    {label: 'b', value: '1'},
    {label: 'd', value: '0'},
    {label: 'e', value: '0'}
  ]
  expect(mergeArr(arr1, arr2, 'label')).toEqual(output);
});

test('test daysToDate', () => {
  const output = {
    year: 4,
    month: 0,
    day: 0
  }
  expect(daysToDate(365 * 3 + 366)).toEqual(output)
})
