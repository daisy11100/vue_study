const data={
    name:'zhangsan',
    age:20,
}

//对data进行代理
const proxyData=new Proxy(data,{
    get(target,key,receiver){
        //只处理非原型的属性
        const ownKeys=Reflect.ownKeys(target)  //获取不是原型上的属性 
        if(ownKeys.includes(key)){
            console.log('get',key);
        }

        const result=Reflect.get(target,key,receiver);
        return result; //返回结果
    },
    set(target,key,val,receiver){
        //重复数据不做处理
        if(val===target[key]){
            return true
        }

        const result=Reflect.set(target,key,val,receiver);
        console.log('set',key,val);
        return result;  //是否设置成功
    },
    deleteProperty(target,key){
        const result=Reflect.deleteProperty(target,key);
        console.log('delete property',key);
        return result; //是否删除成功
    }
})
