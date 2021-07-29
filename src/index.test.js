import {mergerArr} from './index'

test('test mergerArr', () => {
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
  expect(mergerArr(arr1, arr2, 'label')).toEqual(output);
});
