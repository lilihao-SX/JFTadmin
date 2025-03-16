<template>
  <div class="basic-layout">
    <a-layout>
      <a-layout-sider :width="200" theme="dark">
        <div class="logo">金斧头施工管理</div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
        >
          <a-menu-item key="/dashboard">
            <template #icon><DesktopOutlined /></template>
            <span>控制台</span>
          </a-menu-item>
          <a-menu-item key="/projects">
            <template #icon><FolderOpenOutlined /></template>
            <span>项目管理</span>
          </a-menu-item>
          <a-menu-item key="/users">
            <template #icon><UserOutlined /></template>
            <span>用户管理</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header>
          <div class="header-right">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                <UserOutlined />
                管理员
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <UserOutlined />
                    个人中心
                  </a-menu-item>
                  <a-menu-item>
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </a-layout-header>

        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  DesktopOutlined,
  FolderOpenOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'

defineOptions({
  name: 'BasicLayout'
})

const route = useRoute()
const selectedKeys = ref([route.path])

watch(() => route.path, (newPath) => {
  selectedKeys.value = [newPath]
})
</script>

<style scoped>
.logo {
  height: 60px;
  line-height: 60px;
  color: #fff;
  text-align: center;
  background-color: #2b2f3a;
}

.ant-layout-header {
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header-right {
  margin-right: 20px;
}

.ant-layout-sider {
  background-color: #304156;
}

.ant-layout-content {
  padding: 24px;
  background: #fff;
}
</style>