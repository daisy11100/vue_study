function updateView(){
    console.log('视图更新')
}

//重新定义原型，重写了push,pop这几个方法
const oldArrayProperty=Array.prototype;
const arrProto=Object.create(oldArrayProperty);
['push','pop','unshift','shift','slice'].forEach(methodName=>{
    arrProto[methodName]=function(){
        //触发视图更新
        updateView();
        oldArrayProperty[methodName].call(this,...arguments)
    }
})

function defineReactive(target,key,value){
    //深度监听
    observer(value);

    Object.defineProperty(target,key,{
        get(){
            console.log('get  '+key)
            return value
        },
        set(newValue){
            if(newValue!==value){
                //深度监听
                observer(value);
                
                value=newValue;
                
                //触发视图更新
                updateView();
            }
        }
    })
}

function observer(target){
    if(typeof target !== 'object' || typeof target == null){
        //如果是基础数据类型或者空就直接返回
        return target;
    }
    if(Array.isArray(target)){
        target.__proto__ = arrProto
    }

    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

const data={
    name:'shea',
    age:'12',
    info:{
        address:'北京'
    },
    nums:[1,2,3]
}


observer(data)

//test data
// data.name='daisy';
// data.age='21';
// data.info.address='21';
// console.log(data.age)
// data.x='111'
data.nums.push(4)