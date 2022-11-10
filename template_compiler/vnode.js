// 用vnode去描述一个DOM结构

<div id="div1" class="container">
    <p>vdom</p>
    <ul style="font-size:20px">
        <li>a</li>
    </ul>
</div>

//vnode
{
    tag:'div',
    props:{
        id:'div1',
        className:'container',
        children:[
            {
                tag:'p',
                children:'vdom'
            },
            {
                tag:'ul',
                props:{style:'font-size:20px'},
                children:[
                    {
                        tag:'li',
                        children:'a'
                    }
                ]
            }
        ]
    }
}