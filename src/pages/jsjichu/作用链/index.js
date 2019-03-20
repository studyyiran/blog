function A (hehe) {
    window.setTimeout(() => {
        callB()
    }, 1000)
}

function callB () {
    console.log(hehe)
}

