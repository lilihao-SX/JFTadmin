<script setup>
import { useRouter } from 'vue-router'
import { HomeOutlined, FolderOutlined } from '@ant-design/icons-vue'
import { Layout, Menu } from 'ant-design-vue'

const { Header, Content, Sider } = Layout
const router = useRouter()

const handleMenuClick = ({ key }) => {
  router.push(key)
}
</script>

<template>
  <Layout style="min-height: 100vh">
    <Sider collapsible>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo" style="height: 32px; margin: 16px" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        @click="handleMenuClick"
      >
        <Menu.Item key="/">
          <template #icon>
            <HomeOutlined />
          </template>
          首页
        </Menu.Item>
        <Menu.Item key="/projects">
          <template #icon>
            <FolderOutlined />
          </template>
          项目管理
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px">
        <h2 style="color: #1890ff">金斧头施工后台管理系统</h2>
      </Header>
      <Content style="margin: 24px 16px 0">
        <div style="padding: 24px; background: #fff; min-height: 360px">
          <RouterView />
        </div>
      </Content>
    </Layout>
    
  </Layout>
</template>

<style lang="less" scoped>
#app {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.logo {
  height: 64px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
}
</style>
