import './assets/main.less'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import * as AntdIcons from '@ant-design/icons-vue'
import { createClient } from '@supabase/supabase-js'

// 初始化Supabase客户端
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

const app = createApp(App)

app.use(Antd)
app.use(router)

// 全局挂载Supabase实例
app.config.globalProperties.$supabase = supabase

// 注册Ant Design图标
const icons = Object.keys(AntdIcons).filter(key => key.endsWith('Outlined'))
icons.forEach(iconName => {
  app.component(iconName, AntdIcons[iconName])
})

app.mount('#app')