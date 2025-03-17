<template>
  <div class="dashboard-container">
    <h2>项目概览</h2>
    <a-row :gutter="20">
      <a-col :span="6">
        <a-statistic title="进行中项目" :value="8" />
      </a-col>
      <a-col :span="6">
        <a-statistic title="已完成项目" :value="12" />
      </a-col>
      <a-col :span="6">
        <a-statistic title="延期项目" :value="3" />
      </a-col>
      <a-col :span="6">
        <a-statistic title="总进度" :value="75" suffix="%" />
      </a-col>
    </a-row>

    <a-divider />
    
    <a-card class="project-list">
      <template #header>
        <span>最新项目</span>
      </template>
      <a-table :dataSource="projects" :columns="columns" style="width: 100%">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'progress'">
            <a-progress :percent="record.progress" />
          </template>
          <template v-if="column.dataIndex === 'status'">
            <a-tag :color="statusTagColor(record.status)">
              {{ record.status }}
            </a-tag>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Row as ARow,
  Col as ACol,
  Statistic as AStatistic,
  Divider as ADivider,
  Card as ACard,
  Table as ATable,
  Progress as AProgress,
  Tag as ATag
} from 'ant-design-vue'

defineOptions({
  name: 'DashboardView'
})

const projects = ref([
  { name: '上海金茂大厦装修', manager: '张三', progress: 85, status: '进行中' },
  { name: '北京国贸三期水电', manager: '李四', progress: 100, status: '已完成' },
  { name: '广州塔幕墙维护', manager: '王五', progress: 65, status: '进行中' },
  { name: '深圳平安金融中心', manager: '赵六', progress: 45, status: '延期' },
  { name: '上海金茂大厦装修', manager: '张三', progress: 85, status: '进行中' },
  { name: '北京国贸三期水电', manager: '李四', progress: 100, status: '已完成' },{ name: '深圳平安金融中心', manager: '赵六', progress: 45, status: '延期' },
  { name: '上海金茂大厦装修', manager: '张三', progress: 85, status: '进行中' },
  { name: '北京国贸三期水电', manager: '李四', progress: 100, status: '已完成' },{ name: '深圳平安金融中心', manager: '赵六', progress: 45, status: '延期' },
  { name: '上海金茂大厦装修', manager: '张三', progress: 85, status: '进行中' },
  { name: '北京国贸三期水电', manager: '李四', progress: 100, status: '已完成' },{ name: '深圳平安金融中心', manager: '赵六', progress: 45, status: '延期' },
  { name: '上海金茂大厦装修', manager: '张三', progress: 85, status: '进行中' },
  { name: '北京国贸三期水电', manager: '李四', progress: 100, status: '已完成' },
  { name: '广州塔幕墙维护', manager: '王五', progress: 65, status: '进行中' }
])

const columns = [
  {
    title: '项目名称',
    dataIndex: 'name'
  },
  {
    title: '负责人',
    dataIndex: 'manager'
  },
  {
    title: '进度',
    dataIndex: 'progress'
  },
  {
    title: '状态',
    dataIndex: 'status'
  }
]

const statusTagColor = (status) => {
  const statusMap = {
    '进行中': 'blue',
    '已完成': 'green',
    '延期': 'red'
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

.a-statistic {
  text-align: center;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 4px;
}
</style>
