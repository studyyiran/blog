在react中，state是推荐不可变的。

我们在做更新的时候。


我们平时不应该也不需要主动修改state。

虽然我们有时候会不小心被对象修改
```
this.setState({
    obj: newObj
})
```
这间接修改了老的obj。

根据规则，我们应该，先取出来一个深拷贝对象，然后再进行修改和赋值。

平时如果在更新的时候，依赖于上一个state，我们可以用函数的形式来做。
```
this.setState((oldState) => {
    oldState.count = 100
    return oldState
})
```
也许这样看起来更好一些。