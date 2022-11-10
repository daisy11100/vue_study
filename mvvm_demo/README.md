### 启动
http-server -p 8001


### object.defineProperty的缺点
深度监听需要一次性递归  
无法监听新增或删除属性  
无法原生监听数组，需要重写原型方法   


### proxy实现响应式  
基本使用   
reflect   
优点  
   深度监听，性能更好  
   可以监听新增、删除的属性  
    可以监听到数组

总结   
proxy能规避object.defineProperty的问题
无法使用ployfill兼容

#### reflect的作用 
和proxy能力一一对应   
规范化标准化函数式    
代替obj上的工具函数，之前的obj即作为一个数据类型，也作为一个构造函数包含了很多工具方法
