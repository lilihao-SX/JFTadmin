<template>
  <div class="user-management">
    <h2>用户管理</h2>
    <a-button type="primary" @click="showAddDialog">添加用户</a-button>

    <a-table :dataSource="users" :columns="userColumns" bordered>
      <template #action>
        <a-button size="small">编辑</a-button>
        <a-button size="small" type="danger">禁用</a-button>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
  {
    key: '1',
    username: 'admin',
    role: '系统管理员',
    createdAt: '2025-03-15'
  },
  {
    key: '2',
    username: 'project_manager',
    role: '项目经理',
    createdAt: '2025-03-16'
  }
]);

const userColumns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const showAddDialog = () => {
  // 待实现添加逻辑
}
</script>

<style scoped>
.user-management {
  padding: 20px;
}
</style>