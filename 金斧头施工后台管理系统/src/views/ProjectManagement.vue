<template>
  <div class="project-management">
    <h2>项目管理</h2>
    <a-button type="primary" @click="showAddDialog">新建项目</a-button>
    
    <a-table :dataSource="projects" :columns="columns" style="width: 100%">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <a-button size="small">编辑</a-button>
          <a-button size="small" type="danger">删除</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as AButton, Table as ATable } from 'ant-design-vue'

defineOptions({
  name: 'ProjectManagementView'
})

const projects = ref([
  {
    key: '1',
    name: '上海中心大厦装修',
    address: '上海市浦东新区',
    startDate: '2025-03-01',
    endDate: '2025-06-30'
  },
  {
    key: '2',
    name: '北京国贸三期水电',
    address: '北京市朝阳区',
    startDate: '2025-02-15',
    endDate: '2025-05-30'
  }
])

const columns = [
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '项目地址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '开始日期',
    dataIndex: 'startDate',
    key: 'startDate'
  },
  {
    title: '结束日期',
    dataIndex: 'endDate',
    key: 'endDate'
  },
  {
    title: '操作',
    key: 'action'
  }
]

const showAddDialog = () => {
  // 待实现添加逻辑
}
</script>

<style scoped>
.project-management {
  padding: 20px;
}
</style>
