import express from 'express'
import { createClient } from '@supabase/supabase-js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

// 加载环境变量
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

// 验证环境变量
if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
  throw new Error('缺少Supabase配置，请检查.env文件');
}

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
)

// 认证中间件
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Unauthorized' })

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// 项目管理API
app.get('/api/projects', authenticate, async (req, res) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', req.user.id)

  if (error) return res.status(500).json({ error })
  res.json(data)
})

app.post('/api/projects', authenticate, async (req, res) => {
  const project = {
    ...req.body,
    user_id: req.user.id,
    created_at: new Date()
  }

  const { data, error } = await supabase
    .from('projects')
    .insert(project)
    .single()

  if (error) return res.status(500).json({ error })
  res.json(data)
})

// 启动服务器
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})