import '@/styles/main.scss'
// 解决vant样式丢失问题 全局引入
import 'vant/lib/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 全局引入懒加载自定义指令
import mylazy from '@/directives/index.ts'



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
app.use(mylazy)

app.mount('#app')
