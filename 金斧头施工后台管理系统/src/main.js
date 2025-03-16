import './assets/main.less'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Layout,
  Menu,
  Form,
  Input,
  Row,
  Col,
  Card,
  Table
} from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import * as AntdIcons from '@ant-design/icons-vue'

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
app.provide('supabase', supabase)

// 创建Vue实例
const app = createApp(App)

// 配置Ant Design组件
app.use(Button)
   .use(Layout)
   .use(Menu)
   .use(Form)
   .use(Input)
   .use(Row)
   .use(Col)
   .use(Card)
   .use(Table)
app.use(router)

// 注册常用Ant Design图标
// 注册Ant Design图标
const icons = {
  HomeOutlined: AntdIcons.HomeOutlined,
  SettingOutlined: AntdIcons.SettingOutlined,
  UserOutlined: AntdIcons.UserOutlined,
  ProjectOutlined: AntdIcons.ProjectOutlined,
  TeamOutlined: AntdIcons.TeamOutlined
}

Object.entries(icons).forEach(([name, component]) => {
  if (component) {
    app.component(name, component)
  }
})

// 配置全局属性

// 挂载应用
app.mount('#app')