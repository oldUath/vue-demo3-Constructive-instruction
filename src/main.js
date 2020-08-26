import Vue from 'vue/dist/vue.js'
Vue.config.productionTip = false
new Vue({
   directives:{
   on2:{
       //info参数获取指令的信息
           inserted(el,info){
           console.log(info)
           console.log(info.arg)
           el.addEventListener(info.arg,info.value)
         },
     //用完把监听事件取消掉
         unbind(el,info){
         el.removeEventListener(info.arg,info.value)
       }
     }
 },
template:`
 +     <button v-on2:click="hi">点我</button>
  `,
    methods:{
  hi(){
    console.log("hi")
  }
}
}).$mount('#app')

