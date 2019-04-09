import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 10,
            hello: 'hello world'
        }
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                count: 100,
                hello: '????'
            }, () => {
                console.log(this.state.count)
            })
        }, 1000)

        window.setTimeout(() => {
            this.setState(({count}) => {
                return {count: count+1}
            }, () => {
                console.log(this.state)
            })
        }, 2000)
    }
    render () {
        console.log('render')
        return <div>
            <div>{this.state.count}</div>
            <div>{this.state.hello}</div>
            </div>
    }
}