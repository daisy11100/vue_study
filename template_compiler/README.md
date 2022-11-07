# compiler
 
使用compiler编译返回的东西 ```with(this){return _c('p',[_v(_s(message))])}```,和h函数返回的vnode格式类似```vnode('标签',data,children) ```   
```
const template='<p>{{message}}</p>';
// with(this){return _c('p',[_v(_s(message))])}
// _c createElement
// _v createTextVNode
// _s toString
```

vue的模版编译最终返回的不是html，而是js代码   
插值、指令返回的都是一个render函数，而render函数最终返回vnode

