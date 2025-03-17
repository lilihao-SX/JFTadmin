<template>
  <div class="login-container">
    <a-card class="login-card">
      <h2>金斧头施工管理系统登录</h2>
      <a-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <a-form-item name="email">
          <a-input
            v-model:value="loginForm.email"
            placeholder="请输入邮箱"
            allow-clear
          >
            <template #prefix><UserOutlined /></template>
          </a-input>
        </a-form-item>

        <a-form-item name="password">
          <a-input-password
            v-model:value="loginForm.password"
            placeholder="请输入密码"
          >
            <template #prefix><LockOutlined /></template>
          </a-input-password>
        </a-form-item>

        <a-button
          type="primary"
          @click="handleLogin"
          :loading="loading"
          block
        >
          登录
        </a-button>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
defineOptions({
  name: 'LoginView'
})

import { ref, reactive } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const supabase = inject('supabase')
const router = useRouter()




const loading = ref(false)

const loginForm = reactive({
  email: '',
  password: ''
})

const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ]
}

const handleLogin = async () => {
  try {
    loading.value = true
    console.log('Login request payload:', {
      email: loginForm.email,
      password: loginForm.password
    })
    console.log('Login request payload:', {
      email: loginForm.email,
      password: loginForm.password
    })
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password
    })
    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        throw new Error('邮箱或密码错误')
      } else if (error.message.includes('Email not confirmed')) {
        throw new Error('请先验证您的邮箱')
      } else {
        throw error
      }
    }
    
    // 保存认证信息
    localStorage.setItem('access_token', data.session.access_token)
    localStorage.setItem('refresh_token', data.session.refresh_token)
    
    message.success('登录成功')
    router.push('/')
  } catch (error) {
    message.error(error.message)
    console.error('Login error:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
}

.login-card {
  width: 400px;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #303133;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
