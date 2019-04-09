import {combineLatest, Observable, of, fromEvent, merge, interval, race, NEVER, concat, zip} from 'rxjs';
import {ajax} from 'rxjs/ajax';

import {switchAll, delay, withLatestFrom, groupBy, mapTo, partition, map, flatMap, catchError, switchMap, debounceTime, startWith, take, concatAll, mergeAll, zipAll, mergeMap, concatMap} from 'rxjs/operators';
(function() {

  function renderObserver (value) {
    let dom = document.createElement('div')
    dom.innerHTML = value
    document.body.appendChild(dom);
  }
  function giveMeTime (waitTime) {
    console.log('1010101010')
    return new Observable((ob) => {
      console.log('start!!!')
      window.setTimeout(() => {
        console.log('end!!!')
        ob.next('i have wait' + waitTime);
      }, waitTime);
    });

  }
  let click$ = fromEvent(document.querySelector('#q'), 'click');
  const type = 'zip';
  switch (type) {
    case 'zip':
      let hehe$ = interval(1000)
      let haha$ = interval(200)
      combineLatest(hehe$, haha$).subscribe(x => console.log(x));
      break
    case 'zip':
      // let hehe$ = interval(1000)
      // let haha$ = interval(200)
      // zip(hehe$, haha$).subscribe(x => console.log(x));
      break
    case 'testLastTime':

      of('start').pipe(delay(2000), map(e => {console.log('post it'); return e})).subscribe(() => {console.log('ao')})
      let heheValue = 0
      click$.pipe(
        switchMap(() => {
          console.log(heheValue)
        heheValue = heheValue + 1
        if (heheValue % 2) {
          console.log('start')
          return of('start').pipe(delay(2000), map(e => {console.log('post it'); return e}))
        } else {
          return of(null)
        }
      }),
      ).subscribe((e) => {
        console.log(e)
      })
      break
    case 'withLatestFrom':
      console.log('get')
      click$.pipe(
        map((value) => {
          return click$.pipe(debounceTime(100)).pipe(map((e) => {
            console.log('success')
            console.log(e)
            return e
          })).subscribe()
          if (value % 2) {
            console.log('get 1')
            return of(null)
          } else {
            console.log('get 2')

          }
        }),
        map((e) => {
          console.log(e)
          return e
        })
      ).subscribe()
      break;
    case 'groupBy':
      interval(1000).pipe(groupBy(e => e % 2)).pipe(switchMap((e) => {console.log(e)})).subscribe(renderObserver)
    case 'partitionTest':
      merge(click$, click$.pipe(mergeMap(() => {return interval(1100)}))).pipe(map((e) => {return of(e)})).pipe(switchMap((e) => { console.log(e);return e})).subscribe(renderObserver)
      // of(interval(100), interval(1000)).pipe(switchMap((e) => { console.log(e);return e})).subscribe(renderObserver)
      // of(click$.pipe(map((e) => {console.log(e);return e})), interval(1000)).pipe(switchMap((e) => { console.log(e);return e})).subscribe(renderObserver)
      break;
    case 'simpleRace':
      const obs1 = interval(1000)
      const obs2 = interval(3000)
      const obs3 = interval(5000)

      const he$ = race(obs3, obs1, obs2)
        .subscribe(
          winner => console.log(winner)
        );
      break
    case 'partition':
      const [c$, d$] = of(1,2,3,4).pipe(partition(value => value > 3))
      const f$ = race(d$, c$).pipe(map((e) => {return 'get ' + e})).subscribe(
        winner => console.log(winner)
      );
      // d$.subscribe(renderObserver)
      // of(1,2,3,4).subscribe(renderObserver)
      // c$.pipe(map(e => {return 'no' + e})).subscribe((e) => {console.log(e)})
      // d$.subscribe((e) => {console.log(e)})
      break
    case 'startWithSimple':
      // click$.pipe(startWith('miao')).pipe(map((str) => {return 'get' + str})).subscribe(renderObserver)
      concat(of('miao'), click$).pipe(map((str) => {return 'get' + str})).subscribe(renderObserver)
      // concat(interval(100), interval(2000)).subscribe(renderObserver)
      break;
    case 'testDebounceTime':
      interval(1000).pipe(debounceTime(500)).subscribe(() => {
        console.log('get')
      })
      break;
    case 'high1':
      const ho$= interval(1000)
        .pipe(take(2))
        .pipe(switchMap((x) => {
          return interval(1500)
            .pipe(map((y) => {return x+':'+y}))
            .pipe(take(2))
      })).subscribe((e) => {
          console.log(e)
        })
      break
    case 'raceTest':
      console.log('raceTest')
      click$.pipe(concatMap(() => {
        return race(click$, interval(1000))
      })).subscribe((e) => {
        console.log('get')
        console.log(e)
      })
      break;
    case 'race':
      const a$ = click$.pipe(debounceTime(100)).pipe(switchMap(() => {return race(click$.pipe(map(() => {return 'cancel whaterver u are'})), giveMeTime(2000))}))
      a$.subscribe(renderObserver)
      break
    case 'startWith':
      click$.pipe(flatMap(() => {return giveMeTime(1000)})).subscribe(renderObserver)
      merge(click$.pipe(map(() => 'waiting of null')), giveMeTime(1000)).pipe(startWith('hehe')).subscribe(renderObserver)
      break;
    case 'normalSwitch':
      const result = click$.pipe(switchMap((ev) => interval(1000)));
      result.subscribe(x => console.log(x));
      break;
    case 'normal':
      click$.pipe(flatMap(() => {
        return giveMeTime(1000)
      })).subscribe((res) => {
        console.log('get!!')
        console.log(res)
      })
      break;
    case 'testSwitch':
      click$.pipe(debounceTime(1000)).pipe(switchMap(() => {
        console.log('start')
        return giveMeTime(3000).pipe(map((value) => {
          console.log('???');
          console.log(value);
          return Date.now();
        }))
      })).subscribe(renderObserver);

      break;
    case 'responseWithStatus':
    {
      const click$ = fromEvent(document.querySelector('#q'), 'click').pipe(map(() => {
        var randomOffset = Math.floor(Math.random()*500);
        return 'https://api.github.com/users?since=' + randomOffset;
      }));
      let currentDom;
      const requestUrl$ = of('https://api.github.com/users');
      const response$ = merge(requestUrl$, click$).pipe(switchMap(), flatMap(url => {
        document.querySelector('#q2').innerHTML = 'loading';
        const ajax$ = ajax.getJSON(url).pipe(catchError(error => console.log('error: ', error)));
        return ajax$;
      }));
      response$.subscribe(() => {
        document.querySelector('#q2').innerHTML = 'finish';
      });
      response$.pipe(map((response) => {
        return response.slice(0, 3);
      })).subscribe((arr) => {
        if (currentDom) {
          console.log(currentDom.fatherNode);
          currentDom.parentNode.removeChild(currentDom);
        }
        currentDom = document.createElement('div');
        arr.forEach((item) => {
          let dom = document.createElement('div');
          dom.innerText = item.login;
          currentDom.appendChild(dom);
        });
        document.body.appendChild(currentDom);
      });
    }
      break;
    case 0:
      {
        const click$ = fromEvent(document.querySelector('#q'), 'click').pipe(map(() => {
          var randomOffset = Math.floor(Math.random()*500);
          return 'https://api.github.com/users?since=' + randomOffset;
        }));
        let currentDom;
        const requestUrl$ = of('https://api.github.com/users');
        const response$ = merge(requestUrl$, click$).pipe(flatMap(url => {
          const ajax$ = ajax.getJSON(url);
          return ajax$;
        }));


        response$.pipe(map((response) => {
          return response.slice(0, 3);
        })).subscribe((arr) => {
          if (currentDom) {
            console.log(currentDom.fatherNode);
            currentDom.parentNode.removeChild(currentDom);
          }
          currentDom = document.createElement('div');
          arr.forEach((item) => {
            let dom = document.createElement('div');
            dom.innerText = item.login;
            currentDom.appendChild(dom);
          });
          document.body.appendChild(currentDom);
        });
      }
      break;
  }
})();







  // .pipe(flatMap((url) => ajax.getJSON(url)))

// const format$ = ajax$
// return format$;