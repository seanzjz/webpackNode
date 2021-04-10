// import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router"
import main from '../views/main.vue'
import http from '../../config/http'
const routes = [
  {
      path:"/",
      name:"main",
      component: main,
      children: [
        {
          path: '/footer',
          name:"SectionFooter",
          component:() =>import("../views/components/footer.vue")
        },
        {
          path: '/header',
          name:"header",
          component:() =>import("../views/components/header.vue")
        },
        {
          path: '/Screen',
          name:"Screen",
          component:() =>import("../views/components/Screen.vue")
        }
      ]
  },
]
http.post('/url', {}).then((res) => {
  console.log(res, 'eeeeeeeeee')
}).catch(err => {
  console.log('eeerdddddddddddddddr', err)
})
const router = createRouter({
history: createWebHashHistory(),
routes
})
export default router