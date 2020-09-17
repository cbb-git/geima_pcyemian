import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import router from '@/route/index.js'
import '@/style/reset.less'
import 'element-ui/lib/theme-chalk/index.css';
// 引入图标
import '@/style/index.less'

import { Button,Input,Form,FormItem,Message,container,aside,header,main,menu,submenu,MenuItem} from 'element-ui';
// 不能写在同个对象里面
Vue.use(Button)
   .use(Input)
   .use(Form)
   .use(FormItem)
   .use(container)
   .use(aside)
   .use(header)
   .use(main)
   .use(menu)
   .use(submenu)
   .use(MenuItem)
   .prototype.$message = Message


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
