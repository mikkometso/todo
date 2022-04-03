import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TodoInput from './components/todoInput/TodoInput'
import TodoList from './components/todoList/TodoList'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Task {
  id: string
  task: string
  done: boolean
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  // Random id generator that returns a four letter string
  const generatedID = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  // Check if tasks can be found from localStorage and populate state with found data
  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks') as string))
    }
  }, [])

  const saveData = (newTasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const addTaskHandler = () => {
    if (newTask.trim()) {
      const newTasks = [
        ...tasks,
        {
          id: generatedID(),
          task: newTask.trim(),
          done: false,
        },
      ]
      setTasks(newTasks)
      setNewTask('')
      saveData(newTasks)
    }
  }

  const deleteTaskHandler = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)

    saveData(newTasks)
  }

  const editTaskHandler = (id: string) => {
    const newTasks: Task[] = [...tasks]

    Object.values(newTasks).map((item) => {
      if (item.id === id) {
        item.done = true
      }
    })

    setTasks(newTasks)

    saveData(newTasks)
  }

  return (
    <Wrapper>
      <h1>Todo app</h1>
      <TodoInput
        newTask={newTask}
        setNewTask={setNewTask}
        addTaskHandler={addTaskHandler}
      />
      <TodoList
        tasks={tasks}
        editTaskHandler={editTaskHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
    </Wrapper>
  )
}

export default App
