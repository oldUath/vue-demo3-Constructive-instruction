import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//声明全局构造指令,x是指令名
Vue.directive('x',{
  inserted:function (el){
    el.addEventListener('click',()=>{
      console.log('这是x ')
    })
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
