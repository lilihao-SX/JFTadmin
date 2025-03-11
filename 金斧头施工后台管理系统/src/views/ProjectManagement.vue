<template>
  <div class="container">
    <h1>施工项目管理</h1>
    
    <el-button type="primary" @click="showDialog = true">
      <el-icon><Plus /></el-icon>新增项目
    </el-button>

    <el-table :data="projects" style="width: 100%; margin-top: 20px">
      <el-table-column prop="project_name" label="项目名称" />
      <el-table-column prop="project_address" label="项目地址" />
      <el-table-column prop="project_manager" label="负责人" />
      <el-table-column prop="start_date" label="开工日期" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="warning" @click="editProject(scope.row)">编辑</el-button>
          <el-button type="danger" @click="deleteProject(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showDialog" :title="isEdit ? '编辑项目' : '新增项目'">
      <el-form :model="form" label-width="100px">
        <el-form-item label="项目名称">
          <el-input v-model="form.project_name" />
        </el-form-item>
        <el-form-item label="项目地址">
          <el-input v-model="form.project_address" />
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="form.project_manager" />
        </el-form-item>
        <el-form-item label="开工日期">
          <el-date-picker v-model="form.start_date" type="date" />
        </el-form-item>
      </el-form>
      
      <template #footer>
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      showDialog: false,
      isEdit: false,
      form: {
        project_name: '',
        project_address: '',
        project_manager: '',
        start_date: ''
      }
    }
  },
  async mounted() {
    await this.fetchProjects()
  },
  methods: {
    async fetchProjects() {
      try {
        const { data, error } = await this.$supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (!error) this.projects = data
      } catch (err) {
        console.error('获取项目失败:', err)
      }
    },
    async submitForm() {
      try {
        if (this.isEdit) {
          await this.$supabase
            .from('projects')
            .update(this.form)
            .eq('id', this.form.id)
        } else {
          await this.$supabase
            .from('projects')
            .insert([this.form])
        }
        this.showDialog = false
        await this.fetchProjects()
      } catch (err) {
        console.error('操作失败:', err)
      }
    },
    editProject(project) {
      this.form = { ...project }
      this.isEdit = true
      this.showDialog = true
    },
    async deleteProject(id) {
      try {
        await this.$supabase
          .from('projects')
          .delete()
          .eq('id', id)
        await this.fetchProjects()
      } catch (err) {
        console.error('删除失败:', err)
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
h1 {
  margin-bottom: 20px;
}
</style>