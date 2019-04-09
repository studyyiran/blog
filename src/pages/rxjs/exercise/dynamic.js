import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
(function() {
  return
  let a = 10
// 我们使用流，是为了让动态数据，在最开始的时候，就定义好
  /*
  具体来说，我现在的理解是，他是用描述关系来描述这种不变的东西
  plus
  他是通过描述，流的变化来描述，不变的流的规律
   */
  const streamA$ = of(3,4);

  const streamB$ = streamA$.pipe(map((a) => 10 * a))
  streamA$.pipe(map(() => 4))
  streamB$.subscribe((result) => {
    console.log(result)
  })

// function getValue () {
//   value$.subscribe((result) => {
//     console.log(result);
//   });
// }
// getValue();
// a = 11
//
//
// getValue(20);
}())
