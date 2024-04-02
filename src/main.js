import Vue from "vue"
import App from "./App.vue"
import router from "./router"
// elementUI
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
Vue.config.productionTip = false
//global file
import "./permission" //全局权限文件
export var bus = new Vue()
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app")
