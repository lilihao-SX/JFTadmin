<template>
  <div class="project-management">
    <h2>项目管理</h2>
    <el-button type="primary" @click="showAddDialog">新建项目</el-button>
    
    <el-table :data="projects" style="width: 100%">
      <el-table-column prop="name" label="项目名称" />
      <el-table-column prop="address" label="项目地址" />
      <el-table-column prop="startDate" label="开始日期" />
      <el-table-column prop="endDate" label="结束日期" />
      <el-table-column label="操作">
        <template #default>
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'ProjectManagementView'
})

const projects = ref([
  {
    name: '上海中心大厦装修',
    address: '上海市浦东新区',
    startDate: '2025-03-01',
    endDate: '2025-06-30'
  },
  {
    name: '北京国贸三期水电',
    address: '北京市朝阳区',
    startDate: '2025-02-15',
    endDate: '2025-05-30'
  }
])

const showAddDialog = () => {
  // 待实现添加逻辑
}
</script>

<style scoped>
.project-management {
  padding: 20px;
}
</style>