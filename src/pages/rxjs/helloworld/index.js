import { fromEvent } from 'rxjs'
const mouseDown$ = fromEvent(document, 'mouseover')
mouseDown$.subscribe((e) => {console.log(e)})
mouseDown$.subscribe((e) => {console.log('hehe')})