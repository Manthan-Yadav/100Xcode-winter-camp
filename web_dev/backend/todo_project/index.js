import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './db/db.js'
import todoModel from './model/todo.model.js'
import { id } from 'zod/locales'

dotenv.config()
connectToDb()
const app = express()
app.use(express.json())

app.get('/todos', async(req, res) => {
  try {
    const todos=await todoModel.find()
    res.status(200).json({
      todos
    })
  } catch (error) {
    console.log("error")
  }
})
app.get('/todos/:id', async(req, res) => {
  try {
    const{id}=req.params
    const todos=await todoModel.findById(id)
    res.status(200).json({
      todos
    })
  } catch (error) {
    console.log("error")
  }
})
app.post('/todos', async(req, res) => {
  try {
    const {title,description}=req.body
    const todo=await todoModel.create({
      title,description
    })
    res.status(200).json({
      todo
    })
  } catch (error) {
    console.log("error")
  }
})
app.put('/todos/:id', async(req, res) => {
  try {
    const {id}=req.params
    const {title,description}=req.body
    const todo=await todoModel.findById(id)
    if (!todo) {
      return res.status(401).json({
        messsage:"todo not found"
      })
    }
    if (title)
      todo.title=title
    if(description)
      todo.description=description

    await todo.save()
    res.status(200).json({
      messege:"updated"
    })
  } catch (error) {
    console.log("error")
  }
})
app.patch('/todos/:id/toggle', async(req, res) => {
  try {
    const {id}=req.params
    const todo=await todoModel.findById(id)
    if(!todo){
      return res.status(401).json({
        messege:"todo not found"
      })
    }
    todo.completed= !todo.completed

    await todo.save()
    res.status(200).json({
      messege:"changed"
    })

  } catch (error) {
    console.log("error")
  }
})
app.delete('/todos/:id', async(req, res) => {
  try {
    const {id}=req.params
    const todo=await todoModel.findById(id)
    if (!todo) {
      return res.status(401).json({
        messege:"already delete"
      })
    }
    await todoModel.findByIdAndDelete(id)

    res.status(200).json({
      messege:"todo deleted"
    })
  } catch (error) {
    console.log("error")
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})