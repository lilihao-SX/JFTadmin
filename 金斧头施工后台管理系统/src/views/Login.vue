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
import { supabase } from '@/supabase'

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
    const { error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password
    })
    if (error) throw error
    
    message.success('登录成功')
    router.push('/')
  } catch (error) {
    message.error(error.message)
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