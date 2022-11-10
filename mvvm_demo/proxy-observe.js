

function reactive(target={}){
    if(typeof target !== 'object' || typeof target == null){
        //如果是基础数据类型或者空就直接返回
        return target;
    }

    //代理配置
    const proxyConf={
        get(target,key,receiver){
            //只处理非原型的属性
            const ownKeys=Reflect.ownKeys(target)  //获取不是原型上的属性 
            if(ownKeys.includes(key)){
                console.log('get',key);
            }
    
            const result=Reflect.get(target,key,receiver);
            //深度监听，是在get的时候递归
            //vue2的深度监听是一进去就递归
            return reactive(result); //返回结果
        },
        set(target,key,val,receiver){
            //重复数据不做处理
            if(val===target[key]){
                return true
            }
            const ownKeys=Reflect.ownKeys(target) 
            if(ownKeys.includes(key)){
                console.log('已有的key',key);
            }else{
                console.log("新增的",key)
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
    }

    //生成代理对象
    const observed=new Proxy(target,proxyConf);
    return observed;

}

const data ={
    name:"zhangsan",
    age:20,
    info:{
        city:'bj'
    }
}

const proxyData=reactive(data)
