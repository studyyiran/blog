import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators';


const autoPlayList1 = (bofangqi) => {
  const videoList = ['lesson1','lesson2','lesson3','lesson4']
  videoList.forEach((video) => {
    console.log(bofangqi)
    bofangqi.next(video)
  })
  window.setTimeout(() => {
    bofangqi.next('hello!')
    window.setTimeout(() => {
      bofangqi.complete('2hello!')
    }, 1000)
  }, 1000)
  // 其实，
  document.querySelector('#q').addEventListener('click', (e) => {
    bofangqi && bofangqi.next(e)
  })
}

const autoPlayList2 = (bofangqi) => {
  window.setInterval(() => {
    bofangqi.next('mineless')
  }, 1000)
}

const player1$ = new Observable(autoPlayList1)
const player2$ = new Observable(autoPlayList2)
const bofangqi = {
  next: (video) => {console.log('is playing' + video)},
  complete: () => {
    console.log('complete finish')
  }
}
// 播放器开始观察音频源了！
player1$.subscribe(bofangqi)
const afterMap = player2$.pipe(map(a => a + ',but i like it')).pipe(map(a => a + 'i want it'))
afterMap.subscribe(bofangqi)