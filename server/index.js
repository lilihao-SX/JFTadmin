const express = require('express')
const app = express()
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

// 初始化Supabase客户端
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

app.use(express.json())
app.use(require('cors')())

// 获取所有项目
app.get('/api/projects', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    res.json({ success: true, data })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: '获取项目失败'
    })
  }
})

// 创建新项目
app.post('/api/projects', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([req.body])
      .select()
    
    if (error) throw error
    res.json({ success: true, data: data[0] })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: '创建项目失败'
    })
  }
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})