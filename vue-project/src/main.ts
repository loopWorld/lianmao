import '@/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';

// 重置样式
import 'reset-css'

// rem适配布局
import RemFIt from 'rem-fit'
const params = [
    {
        breakpoint: 0,
        proportion: 16
    }
]
const remFit = new RemFIt(params,false)
window.addEventListener('resize',() => remFit.init())

const app = createApp(App)

app.use(router)

app.use(Tabbar)
app.use(TabbarItem)

app.mount('#app')
