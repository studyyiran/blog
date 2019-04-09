function main(arr) {
  // 1 reduce
  return arr.reduce((a, b) => {
    if (b > a) {
      return b
    } else {
      return a
    }
  })
}

let getMidPop = (arr) => {
  const midIndex = (arr.length - 1) / 2
  return deleteOne(arr, midIndex)
}

let deleteOne = (arr, index) => {
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}

let checkOk = (arr) => {
  return arr.some((item) => {
    return item > 18
  })
}

p(checkOk([1,2,3,24]))

let hehe = getMidPop([3,4,5,6])
console.log(hehe)


let myAdd = (arr, newOne) => {
  return [...arr, newOne]
}

function p(result) {
  console.log('here is the result ' + result)
}
p(myAdd([0,1,2],100))

let sum = [1,2,3].reduce((a, b) => a + b)
console.log(sum)

let afterArr = main([3,6,1,3,6,8,6,4,3,6])
console.log('finish')
console.log(afterArr)
