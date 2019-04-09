import { Observable, Subject, interval } from 'rxjs';
import { map, buffer, throttle, filter, throttleTime, debounceTime} from 'rxjs/operators';

const mouseEvent = (observer) => {
  document.addEventListener('click', (e) => {
    observer.next('get click');
  });
}

const mouseClick$ = new Observable(mouseEvent)

const observer = (info) => {
  console.log(info);
}


mouseClick$.pipe(buffer(mouseClick$.pipe
(debounceTime(250))))
  .pipe(map(e => e.length)).subscribe((e) => {
  console.log('throttle')
  console.log(e)
})

//
// // 每1秒发出值
// const source = interval(1000);
// // 节流2秒后才发出最新值
// const example = source.pipe(throttle(val => interval(2000)));
// // 输出: 0...3...6...9
// const subscribe = example.subscribe(val => console.log(val));

// mouseClick$.pipe(buffer(interval(200))).pipe(map(cout => cout > 2x))
// const afterPipe = mouseClick$.pipe()
// subscribe(observer);

// const test1$ = mouseClick$.pipe(buffer(interval(1000)))
// const test2$ = test1$.pipe(filter(arr => arr.length >= 2))
// const test3$ = test2$.pipe(map(arr => arr.length))
// test3$.subscribe((e) => {
//   console.log('get it ')
//   console.log(e)
// })
// mouseClick$.pipe(buffer(throttle(interval(1000))))

// const interval$ = interval(100);
// const withBuffer = interval$.pipe(buffer(mouseClick$))
// interval$.pipe(throttle(() => mouseClick$)).subscribe((e) => {
//   console.log('get throttle')
//   console.log(e)
// })
// interval$.subscribe(observer)
// withBuffer.subscribe(observer)

// const autoPlayList1 = (bofangqi) => {
//   const videoList = ['lesson1','lesson2','lesson3','lesson4']
//   videoList.forEach((video) => {
//     console.log(bofangqi)
//     bofangqi.next(video)
//   })
//   window.setTimeout(() => {
//     bofangqi.next('hello!')
//     window.setTimeout(() => {
//       bofangqi.complete('2hello!')
//     }, 1000)
//   }, 1000)
//   // 其实，
//   document.querySelector('#q').addEventListener('click', (e) => {
//     bofangqi && bofangqi.next(e)
//   })
// }
//
// const autoPlayList2 = (bofangqi) => {
//   window.setInterval(() => {
//     bofangqi.next('mineless')
//   }, 1000)
// }
//
// const player1$ = new Observable(autoPlayList1)
// const player2$ = new Observable(autoPlayList2)
// const bofangqi = {
//   next: (video) => {console.log('is playing' + video)},
//   complete: () => {
//     console.log('complete finish')
//   }
// }
// // 播放器开始观察音频源了！
// player1$.subscribe(bofangqi)
// const afterMap = player2$.pipe(map(a => a + ',but i like it')).pipe(map(a => a + 'i want it'))
// afterMap.subscribe(bofangqi)