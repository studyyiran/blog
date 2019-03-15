let a = {
    name: 'a',
    obj: {
        b: 'b'
    }
}

let {...copy} = a

copy.obj.b = 'newB'
copy.name = 'copy'
console.log(copy)
console.log(a)