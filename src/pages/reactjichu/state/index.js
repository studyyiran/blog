import React from 'react'
import {useState, useEffect, useReducer} from 'react'

class Test extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
        let i = 0
        console.log(i++)
        let j = 0
        console.log(i)
        console.log(i)
    }

    addNotWork = (needAdd) => {
        console.log('add1')
        if (needAdd) {
            this.setState({
                count: this.state.count++
            })
        } else {
            // 直接修改state是不可接受的。
            // 但是问题是为啥 但是问题是为啥 因为没必要也不推荐
            // this.state.count = this.state.count - 1
            // this.setState({
            //     count: this.state.count - 1
            // })
            // return
            let count = this.state.count
            // count = count - 1
            this.setState({
                count: --count
            })
        }
    }

    addWork = (needAdd) => {
        console.log(this)
        console.log('add2')
        if (needAdd) {
            this.setState((state) => {
                return ++state.count
            })
        } else {
            this.setState((state) => {
                console.log(state)
                return --state.count
            })
        }
    }

    test = (e)=> {
        console.log(e)
        console.log(this)
    }


    componentDidMount () {
        // let add = this.addWork
        let add = this.addNotWork.bind(this, true)
        add()
        // add()
        // add()
        // add()
    }
    render () {
        return <div>
            <div>{this.state.count}</div>
            <div onClick={this.test}>test</div>
            <div onClick={() => {this.setState({count: this.state.count + 1})}}>+</div>
            <div onClick={() => {this.setState({count: this.state.count - 1})}}>-</div>
        </div>
    }
}

function Test2 () {
    const [state, setState] = useState({count: 100})

    function addWork (needAdd) {
        if (needAdd) {

            setState(state => {
                console.log(state)
                let {...newState} = state
                newState.count++
                return newState
            })
        } else {
            setState(state => {
                return {...state, count: state.count--}
            })
        }
    }


    // function addNotWork (needAdd) {
    //     console.log('run add2')
    //     if (needAdd) {
    //         setCount(count + 1)
    //     } else {
    //         setCount(count - 1)
    //     }
    // }
    useEffect(() => {
        let add = addWork
        add(true)
        add(true)
        add(true)
        // add(false)
    }, [])

    return <div>
        {state && state.count}
    </div>
}

export default Test2