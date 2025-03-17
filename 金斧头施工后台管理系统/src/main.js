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

// 初始化Supabase客户端
import { createClient } from '@supabase/supabase-js'

// 创建Vue实例
const app = createApp(App)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://othjgmecrxdwxrxhknhw.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aGpnbWVjcnhkd3hyeGhrbmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjE0OTAsImV4cCI6MjA1NzY5NzQ5MH0.qrCTG5NolZNH-M7skASh-Ozo8it5vfYMGWkM1yA5XHA'
)
// 配置全局属性
app.provide('supabase', supabase)

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



// 挂载应用
app.mount('#app')