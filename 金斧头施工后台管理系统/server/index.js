const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(require('cors')())

// 示例路由
app.get('/api/projects', (req, res) => {
  res.json([{ id: 1, name: '测试项目' }])
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})