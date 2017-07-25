
import Vue from 'vue'
/*import app from './componentsV/app'*/
import app from './components/app'

Vue.config.productionTip = false


/*new Vue({
  el:"#app",
  components:{app}, // 将组建映射成标签
  template:'<app/>'
})*/
new Vue({
  el:'#app',
  components:{app},
  template:'<app />'

})
