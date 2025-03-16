<template>
  <div class="dashboard-container">
    <h2>项目概览</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-statistic title="进行中项目" :value="8" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="已完成项目" :value="12" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="延期项目" :value="3" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="总进度" :value="75" suffix="%" />
      </el-col>
    </el-row>

    <el-divider />
    
    <el-card class="project-list">
      <template #header>
        <span>最新项目</span>
      </template>
      <el-table :data="projects" style="width: 100%">
        <el-table-column prop="name" label="项目名称" />
        <el-table-column prop="manager" label="负责人" />
        <el-table-column prop="progress" label="进度">
          <template #default="{ row }">
            <el-progress :percentage="row.progress" />
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template #default="{ row }">
            <el-tag :type="statusTagType(row.status)">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'DashboardView'
})

const projects = ref([
  { name: '上海金茂大厦装修', manager: '张三', progress: 85, status: '进行中' },
  { name: '北京国贸三期水电', manager: '李四', progress: 100, status: '已完成' },
  { name: '广州塔幕墙维护', manager: '王五', progress: 65, status: '进行中' },
  { name: '深圳平安金融中心', manager: '赵六', progress: 45, status: '延期' }
])

const statusTagType = (status) => {
  const statusMap = {
    '进行中': 'primary',
    '已完成': 'success',
    '延期': 'danger'
  }
  return statusMap[status]
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.project-list {
  margin-top: 20px;
}

.el-statistic {
  text-align: center;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 4px;
}
</style>