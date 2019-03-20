export default function () {
    function test () {

    }

    function reducer(oldState, newValut, actionType) {
        console.log(arguments)
        switch (actionType) {
            case 'add':
                return oldState + newValut
        }
    }

    const a = [1,2,3]
    let result = a.reduce((a,b) => {
        if (a > b) {
            return a
        } else {
            return b
        }
    })

    console.log(a.reduce((a, b, ...c) => reducer(a, b, 'add', c)))
    console.log(a.reduce((a, b, ...c) => reducer(a, b, 'add', c)))

    console.log(result)
}