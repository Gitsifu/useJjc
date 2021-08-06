# useJjc

`向jjc大佬学习`

## 开始

```
npm install --save use-jjc
```

## 使用

```javascript
import {mergeArr} from "use-jjc";
// or
// import useJjc from "use-jjc"

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

const output = mergeArr(arr1, arr2, 'label')
// or
// const output = useJjc.mergeArr(arr1, arr2, 'label')
console.log(output)
// output: 
// [
//     {label: 'a', value: '1'},
//     {label: 'b', value: '1'},
//     {label: 'd', value: '0'},
//     {label: 'e', value: '0'}
// ]
```

## API

- `mergeArr` 合并数组
- `daysToDate` 天数转几年几月几日

参数：`days` 天数

返回值：
```
{
    year: 0,
    month: 0,
    day: 0,
}
```
