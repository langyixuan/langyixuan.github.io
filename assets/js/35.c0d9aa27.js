(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{555:function(t,s,a){"use strict";a.r(s);var n=a(17),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-中的异步编程与实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中的异步编程与实现方式"}},[t._v("#")]),t._v(" JavaScript 中的异步编程与实现方式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/03/04/25iISklHfQ4rx1n.gif",alt:"async-js-timer"}})]),t._v(" "),a("h2",{attrs:{id:"一、js-单线程异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、js-单线程异步"}},[t._v("#")]),t._v(" 一、JS 单线程异步")]),t._v(" "),a("p",[t._v("JavaScript 的执行机制是单线程异步，适合 IO 密集型，不适合 CPU 密集型，但是，为什么是异步的喃，异步由何而来的呢？我们将在这里逐渐讨论实现。")]),t._v(" "),a("h3",{attrs:{id:"_1-线程和进程的区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程和进程的区分"}},[t._v("#")]),t._v(" 1. 线程和进程的区分")]),t._v(" "),a("p",[t._v("在了解 JS 单线程异步前，先来了解一下什么是"),a("code",[t._v("线程和进程")]),t._v("。")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://s2.loli.net/2022/03/04/xtTewkoNBEuQZ2n.png",alt:"线程和进程"}}),t._v(" "),a("h3",{attrs:{id:"_2-浏览器是多进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器是多进程"}},[t._v("#")]),t._v(" 2. 浏览器是多进程")]),t._v(" "),a("p",[t._v("浏览器是由多个进程构成的，其中包括了最重要的浏览器渲染进程（浏览器内核）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Broswer 进程：浏览器的主进程，唯一，负责创建和销毁其他的进程、网络资源的下载管理、浏览器界面的展示、前进后退")])]),t._v(" "),a("li",[a("p",[t._v("GPU 进程：用于 3D 的绘制")])]),t._v(" "),a("li",[a("p",[t._v("浏览器渲染进程（浏览器的内核）：内部由多个线程构成，没打开一个网页就会创建一个新的进程，主要用于页面的渲染，脚本处理，事件处理等。")])]),t._v(" "),a("li",[a("p",[t._v("第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建。")])])]),t._v(" "),a("h3",{attrs:{id:"_3-渲染进程-浏览器内核-是多线程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-渲染进程-浏览器内核-是多线程的"}},[t._v("#")]),t._v(" 3. 渲染进程（浏览器内核）是多线程的")]),t._v(" "),a("p",[t._v("浏览器的渲染进程是有多个线程组成的，页面的渲染、Javascript 的执行、事件的循环等都存在于这个进程内")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("🌟 GUI 渲染线程：负责渲染浏览器页面，当界面需要重回（Repaint）或由于某种操作发生了回流（Reflow）时，该线程就会执行")])]),t._v(" "),a("li",[a("p",[t._v("🌟 Javascript 引擎线程：也成为 Javascript 内核，负责处理 Javascript 脚本程序，解析 Javascript 脚本、运行代码等")])]),t._v(" "),a("li",[a("p",[t._v("🌟 事件触发线程：用来控制浏览器事件循环，注意这个不归 Javascript 引擎线程管，当事件触发时，该线程会把事件添加到待处理队列的队尾，等待 Javascript 引擎处理。")])]),t._v(" "),a("li",[a("p",[t._v("定时器触发线程：setTimeout 和 setInterval 所在的线程.")])]),t._v(" "),a("li",[a("p",[t._v("异步的 http 请求线程：在 XMLHttpResquest 连线后通过浏览器新开一个线程请求，将检测到的状态变更时，如果设置有回调函数，异步线程就产生状态变更的事件，将这个回调放入时间队列中，再有 Javascript 引擎执行。")])])]),t._v(" "),a("p",[t._v("🔔【注意注意】GUI 渲染线程与 Javascript 引擎线程是互斥的，当 Javascript 引擎执行时 GUI 线程会被挂起（相当于冻结了）。")]),t._v(" "),a("p",[t._v("GUI 更新会被保存在一个队列中等到 Javascript 引擎空闲的时候立即被执行。所以如果 Javascript 执行的时间过长，会导致页面的渲染不流畅，导致页面渲染加载阻塞")]),t._v(" "),a("h3",{attrs:{id:"_4-单线程的-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-单线程的-javascript"}},[t._v("#")]),t._v(" 4. 单线程的 Javascript")]),t._v(" "),a("p",[a("mark",[t._v("【先说结论】为什么 Javascript 是单线程的：避免 DOM 渲染的冲突")])]),t._v(" "),a("p",[t._v("所谓单线程就是指，Javascript 引擎中负责解析和执行 Javascript 代码的线程唯一，同一时间上只能执行一件任务")]),t._v(" "),a("p",[t._v("为什么需要引入单线程呢？？？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("浏览器需要渲染 DOM 元素")])]),t._v(" "),a("li",[a("p",[t._v("Javascript 可以修改 DOM 结构")])]),t._v(" "),a("li",[a("p",[t._v("Javascript 在执行时，浏览器的 DOM 渲染会暂时中断")])]),t._v(" "),a("li",[a("p",[t._v("考虑到这里，"),a("mark",[t._v("如果 Javascript 时多线程的，相当于可以同时执行多段 Javascript，如果这多段 Javascript 是在操作同一个 DOM 元素就会导致冲突")])])])]),t._v(" "),a("h3",{attrs:{id:"_5-同步和异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-同步和异步"}},[t._v("#")]),t._v(" 5. 同步和异步")]),t._v(" "),a("p",[t._v("简单说一下同步和异步，具体深入的知识还需要下去钻研哈~")]),t._v(" "),a("ul",[a("li",[t._v("同步（Synchronous）：是程序发出调用的时候，一致等待直到返回结果，没有结果之前不会返回，也就是说，同步是调用者主动等待调用的过程")]),t._v(" "),a("li",[t._v("异步（Asynchronous）：是程序发出调用后，马上返回，但是不会马上得到返回的结果。调用者不必主动等待，当被调用者得到结果后会主动通知调用者。")])]),t._v(" "),a("h3",{attrs:{id:"_6-javascript-的异步执行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-javascript-的异步执行机制"}},[t._v("#")]),t._v(" 6. Javascript 的异步执行机制")]),t._v(" "),a("p",[t._v("【推荐视频】"),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1gf4y1p7CD?from=search&seid=10129045691296571542",target:"_blank",rel:"noopener noreferrer"}},[t._v("【瞎眼动画片】JavaScript 的异步执行机制")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/03/04/jSoiBbxceZJFCKt.png",alt:"JS异步执行机制1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/03/04/pkTMym65YJ3aKEx.png",alt:"JS异步执行机制2"}})]),t._v(" "),a("p",[t._v("根据上述图片，俩阐述一下消息队列以及事件循环的概念。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Javascript 的执行与解析是在一个线程中进行的，我们先将这个线程称作主线程。")])]),t._v(" "),a("li",[a("p",[t._v("当主线程执行到一个异步任务的时候（上图的 setTimeout），就会发起相关处理定时器的线程的异步调用。")])]),t._v(" "),a("li",[a("p",[t._v("定时器相关的线程开始处理这段异步任务（定时器从此刻就开始进行倒计时）")])]),t._v(" "),a("li",[a("p",[t._v("异步任务执行完毕后，会将其回调函数放在消息队列的队尾")])]),t._v(" "),a("li",[a("p",[t._v("当事件循环监听到主线程的同步任务执行完毕后，会从消息队列的对头开始轮询取出回调函数放在调用栈中执行")])])]),t._v(" "),a("p",[t._v("💦（1）消息队列：消息队列是一个先进先出的队列，它里面存放着各种消息（消息指的就是注册异步任务时添加的回调函数）")]),t._v(" "),a("p",[t._v("💦（2）事件循环：当主线程的同步任务执行完毕后，会从消息队列中循环相继取出回调函数放在主线程的调用栈中执行")]),t._v(" "),a("h2",{attrs:{id:"二、javascript-异步编程的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、javascript-异步编程的方式"}},[t._v("#")]),t._v(" 二、JavaScript 异步编程的方式")]),t._v(" "),a("p",[t._v("随着 JavaScript 的发展和精进，出现了很多种处理 JS 异步编程的实现方式，JS 的异步编程机制可以分为一下几种（每一种在后续都会有专门的文章来详细探讨，这里只是做出简单的介绍：")]),t._v(" "),a("h3",{attrs:{id:"_1-回调函数的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-回调函数的方式"}},[t._v("#")]),t._v(" 1. 回调函数的方式")]),t._v(" "),a("p",[t._v("在早期的 Javascript 中（ES6 之前），只支持使用回调来来处理异步操作。在使用回调函数处理异步的缺点是")]),t._v(" "),a("ul",[a("li",[t._v("多个回调函数进行嵌套会造成回调地狱")]),t._v(" "),a("li",[t._v("上下两层回调函数的代码耦合度太高，不利于代码的维护。")]),t._v(" "),a("li",[t._v("不能使用 try catch 捕获错误，不能直接 return")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理逻辑")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理逻辑")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理逻辑")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-promise-的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-promise-的方式"}},[t._v("#")]),t._v(" 2. Promise 的方式")]),t._v(" "),a("p",[t._v("所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。")]),t._v(" "),a("p",[t._v("从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Promise 的三种状态")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("pending：Promise 对象实例创建时候的初始状态")]),t._v(" "),a("li",[t._v("resolved：成功状态")]),t._v(" "),a("li",[t._v("rejected：失败状态")])])])]),t._v(" "),a("ul",[a("li",[t._v("Promise 的执行顺序\n当我们在构造 Promise 的时候，构造函数内部的代码是立即执行的")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new Promise"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new Promise")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// end")]),t._v("\n")])])]),a("ul",[a("li",[t._v("改写 ajax 的回调地狱：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包装成 Promise.resolve(urlB)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包装成 Promise.resolve(urlC)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("优点：")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("解决了回调地狱")]),t._v(" "),a("li",[t._v("能够通过回调函数捕获错误")])])]),t._v(" "),a("li",[a("p",[t._v("缺点：")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("无法取消 Promise，一旦新建它就会执行，无法中途取消")]),t._v(" "),a("li",[t._v("如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部")]),t._v(" "),a("li",[t._v("当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-generator-的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-generator-的方式"}},[t._v("#")]),t._v(" 3. Generator 的方式")]),t._v(" "),a("p",[t._v("Generator 最大的特点就是可以控制函数的执行。")]),t._v(" "),a("ul",[a("li",[t._v("function 关键字与函数名之间有一个星号；")]),t._v(" "),a("li",[t._v("函数体内部使用 yield 表达式，定义不同的内部状态；")]),t._v(" "),a("li",[t._v("next 指针移向下一个状态，返回一个部署了 Iterator 接口的遍历器对象，用来操作内部指针。以后，每次调用遍历器对象的 next 方法，就会返回一个有着 value 和 done 两个属性的对象。value 属性表示当前的内部状态的值，是 yield 语句后面那个表达式的值；done 属性是一个布尔值，表示是否遍历结束。")]),t._v(" "),a("li",[t._v("yield 可暂停函数，next 方法可执行函数，每次返回的是 yield 后的表达式结果。")]),t._v(" "),a("li",[t._v("yield 表达式始终返回 undefined。next 方法可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => {value: 6, done: false}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => {value: 8, done: false}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => {value: 42, done: true}")]),t._v("\n")])])]),a("p",[t._v("同样可以解决回调地狱的问题。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("优点：")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("可分步执行并得到异步操作的结果；")]),t._v(" "),a("li",[t._v("可知晓异步操作所处的过程；")]),t._v(" "),a("li",[t._v("可切入修改异步操作的过程。")])])]),t._v(" "),a("li",[a("p",[t._v("缺点：")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("仍然需要使用异步的思维去阅读代码；")]),t._v(" "),a("li",[t._v("手动迭代 Generator 函数较为麻烦。")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-async-await-的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-async-await-的方式"}},[t._v("#")]),t._v(" 4. Async / Await 的方式")]),t._v(" "),a("p",[t._v("async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。")]),t._v(" "),a("ul",[a("li",[t._v("正常情况下，await 命令后是一个 Promise 对象。如果不是，会被转成一个立即 resolve 的 Promise 对象。")]),t._v(" "),a("li",[t._v("await 只能用在 async 函数中，不能用在普通函数中")]),t._v(" "),a("li",[t._v("await 后面可能存在 reject，需要进行 try…catch 代码块中")])]),t._v(" "),a("p",[t._v("例如：请求两个文件，毫无关系，可以通过并发请求")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("； "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个函数同步执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("； "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.txt 3.txt")]),t._v("\n")])])]),a("ul",[a("li",[t._v("优点：")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("处理 then 的调用链，能够更清晰准确的写出代码；")]),t._v(" "),a("li",[t._v("能优雅地解决回调地狱问题；")]),t._v(" "),a("li",[t._v("适用性更广泛，async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值； 语义性更强，使得异步代码读起来像同步代码，async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。")])])]),t._v(" "),a("li",[t._v("缺点：\n"),a("ul",[a("li",[t._v("多个没有依赖性的异步代码使用 await 时， 会导致性能上的降低。")])])])]),t._v(" "),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/57548254",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出 JavaScript 异步编程")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903574133014542",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端必知必会之 JS 单线程与异步")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/hr10230322/article/details/78763985",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 的单线程执行及其异步机制矛盾否？")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/27035708",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 单线程异步的背后——事件循环机制")])])])}),[],!1,null,null,null);s.default=r.exports}}]);