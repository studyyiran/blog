稍微看了下文档
这种学习方法就是，第一天的时候看文档1。
第二天复习的时候看文档2.

或者是第一天写代码1.
第二天，review他人的同样功能的代码（或者就是自己的）

现在掌握了很多概念。

observable

observer

这其实是两个紧密相关的概念。
observable是流的容器。
他可以被监听。


observer可以被用next不断接收到消息。
observer可以被complete


一个observable.subscribe也对应着一个unsubscribe

一个observable可以用pipe()来继续增加一些操作符，做流的修饰。也叫做铺设管道。
最终再被subscribe。就相当于，开始从自来水厂接收水的讯息。

当释放了一定量的流之后，自来水厂可以关闭掉。complete
如果有问题，可以告知error（也停止了后续有毒的水）

水流经过pipe，被消毒了，加入了葡萄糖等物质。
然后留到我们的杯子里面，进行消费和渲染。
