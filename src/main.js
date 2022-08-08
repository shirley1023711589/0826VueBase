// eslint-disable no-unused-vars
// 局部禁用当前这个类型的错误（只禁用当前文件的这个类型的报错
import Vue from 'vue' //默认引入的就是runtime-only版本 不带解析器
// import Vue from 'vue/dist/vue.esm.js' //自己找到的带解析器的版本
import App from '@/App'
// new Vue({
//     el: '#app',
//     components: {
//         App,
//     },
//     template: '<App />'
// })


// 这个是用render函数的 为什么可以使用runtime-only版本的Vue
new Vue({
    el: '#app',
    render: h => h(App), //这个函数和我们上面自己写的 功能差不多
    //1.定义并注册了App
    //2.使用了App组件
    //3.比上边多干了一件事 就是寻找解析器loader
})

// 这个是用render函数的 为什么就可以使用