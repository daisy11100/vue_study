const compiler=require('vue-template-compiler');

// const template='<p>{{message}}</p>';
// with(this){return _c('p',[_v(_s(message))])}
// _c createElement
// _v createTextVNode
// _s toString

// 表达式
// const template=`<p>{{flag?message"'no message found}}</p>`
// with(this){return _c('p',[_v(_s(flag?message"'no message found))])}  


//属性和动态属性
// const template=`
//     <div id="div1" class="container">
//         <img :src="imgUrl" />
//     </div>
// `
//with(this){return _c('div',
//   {staticClass:"container",attrs:{"id":"div1"}},
//   [_c('img',
//      {attrs:{"src":imgUrl}})
//   ])}


const template=`<input type="text" v-model="name">`
//with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})

const res=compiler.compile(template);
console.log(res.render);