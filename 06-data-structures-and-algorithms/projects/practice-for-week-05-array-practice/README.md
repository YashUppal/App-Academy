# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(n)
Justification: it is a single operation, and size of array will increase linearly

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(n)
Justification: it is a single operation, and size will be linear

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(1)
Space complexity: O(n)
Justification: it is a single operation, and size will be linear

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(1)
Space complexity: O(n)
Justification: it is a single operation, and size will be linear

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(1)
Space complexity: O(n)
Justification: it is a singular operation, size will increase/decrease linearly

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(1)
Space complexity: O(1)
Justification: it is a singular operation and space will be constant

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(n)
Justification: since it performs linear search, time complexity would be O(n) and space will be dependant on array

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: it iterates on all values, thus time and space complexity is O(n)

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: since it iterates over entire array, space and time complexity would be O(n)

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(n)
Justification: since it iterates over the entire array, space and time complexity would be O(n)

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n) - from SO
Space complexity: O(n)
Justification: not sure how it works internally, but i learned it is O(n) from SO.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: i think it is O(n) because it works on iterables and thus i am assuming it has to interate over the entire data structure and pull those values out. On the surface level, it is just syntactic sugar (?)

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
