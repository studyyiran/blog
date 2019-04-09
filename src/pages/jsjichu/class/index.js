function A (hello) {
    this.obj = hello
}

A.prototype.log = window.console.log

// 继承，就是可以使用其他的方法。


let a = new A({
    title: 'title',
    arr: [1,2,3]
})

a.log('a')
