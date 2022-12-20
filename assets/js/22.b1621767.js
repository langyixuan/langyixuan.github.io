(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{539:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript数据类型"}},[t._v("#")]),t._v(" JavaScript数据类型")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/09/04/KbXnNAmfoM9wkpU.jpg",alt:"maxresdefault"}})]),t._v(" "),a("p",[t._v("学习JavaScript时，首先需要了解Javascript的数据类型。这对后期的学习非常的重要。")]),t._v(" "),a("h2",{attrs:{id:"一、数据类型分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、数据类型分类"}},[t._v("#")]),t._v(" 一、数据类型分类")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/09/04/56HRQVMfXyu37lE.png",alt:"image-20210904201311454"}})]),t._v(" "),a("p",[t._v("Javascript的数据类型按照存储类型可以分为"),a("code",[t._v("基本类型")]),t._v("和"),a("code",[t._v("引用类型")]),t._v("两个大类，首先来说一说什么是基本数据类型和引用数据类型")]),t._v(" "),a("h3",{attrs:{id:"基本数据类型和引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型和引用数据类型"}},[t._v("#")]),t._v(" 基本数据类型和引用数据类型")]),t._v(" "),a("p",[t._v("在了解基本和引用数据类型时，需要引入一个知识点就是"),a("code",[t._v("栈和堆")])]),t._v(" "),a("ul",[a("li",[t._v("栈（stack）: 栈会自动分配内存空间，会自动释放")]),t._v(" "),a("li",[t._v("堆（heap）: 动态分配内存空间，大小不定也不会自动释放，栈内存中存放地址指向堆内存中存放的对象")])]),t._v(" "),a("h4",{attrs:{id:"_1-基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本数据类型"}},[t._v("#")]),t._v(" （1） 基本数据类型")]),t._v(" "),a("p",[t._v("基本数据类型包括"),a("strong",[t._v("String、Number、Boolean、Undefined、Null、Symbo")]),t._v("l几种")]),t._v(" "),a("p",[t._v("基本数据类型是存储在栈（stack）中的简单数据段，"),a("code",[t._v("占据空间小、大小固定")]),t._v("，属于被频繁使用数据，所以放入栈中存储。")]),t._v(" "),a("h4",{attrs:{id:"_2-引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用数据类型"}},[t._v("#")]),t._v(" （2）引用数据类型")]),t._v(" "),a("p",[t._v("引用类型指那些可能由多个值构成的对象（ "),a("code",[t._v("包括Function,Array,Object")]),t._v(" ），保存在堆内存中"),a("code",[t._v("占据空间大、大小不固定")]),t._v("，如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/09/04/MPKUc4nxaLhetFT.png",alt:"堆和栈"}})]),t._v(" "),a("h2",{attrs:{id:"二、数据类型的判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、数据类型的判断"}},[t._v("#")]),t._v(" 二、数据类型的判断")]),t._v(" "),a("h3",{attrs:{id:"_1-typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeof"}},[t._v("#")]),t._v(" 1. typeof")]),t._v(" "),a("ul",[a("li",[t._v("typeof是专门用来监测数据类型的方法，"),a("strong",[t._v("一般用于检测普通的数据类型")]),t._v("。它可以判断一个变量是字符串、数值、布尔值还是undefined，但是如果检测的变量是引用数据类型，可以返回object或者function，但不能细致地分出是array还是RegExp等特殊引用数据类型")]),t._v(" "),a("li",[t._v("typeof 一般只能返回如下几个结果："),a("code",[t._v("number、boolean、string、function、object、undefined")])]),t._v(" "),a("li",[t._v("通过typeof可以返回数据类型的"),a("code",[t._v("字符串表达")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// boolean")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Date      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" sss       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-instanceof"}},[t._v("#")]),t._v(" 2. instanceof")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("可以使用instanceof判断引用类型，用于判断对象是哪种具体的数据类型")])]),t._v(" "),a("li",[a("p",[t._v("instanceof主要的目的是用来检测引用类型，返回值只有true和false，可以用来判断某个构造函数的prototype属性是否存在于另外一个要检测对象的原型链上")])])]),t._v(" "),a("p",[t._v("用代码演示一下instanceof内部的执行过程")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("【疑问】 为什么1 instanceod Number : false?")]),t._v(" "),a("p",[t._v("instanceof判断一个"),a("strong",[t._v("对象")]),t._v("是否是另一个"),a("strong",[t._v("对象")]),t._v("的实例，而数字1是基本数据类型，不是对象，")]),t._v(" "),a("p",[t._v("var a = new Number(1)；是通过包装类Number把数字1转换成对象所以为true")])])}),[],!1,null,null,null);s.default=e.exports}}]);