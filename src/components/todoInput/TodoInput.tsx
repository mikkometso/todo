import React, { ChangeEvent, FormEvent } from 'react'
import Button from '../common/button/Button'
import PlusIcon from '../icons/PlusIcon'
import { Form } from './TodoInput.styles'

interface InputProps {
  newTask: string
  setNewTask: React.Dispatch<React.SetStateAction<string>>
  addTaskHandler: () => void
}

const TodoInput: React.FC<InputProps> = (props) => {
  const { newTask, setNewTask, addTaskHandler } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    addTaskHandler()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">New todo</label>
      <div className="row">
        <input
          id="todoInput"
          className="input"
          name="text"
          onChange={handleChange}
          placeholder="Add new todo here"
          type="text"
          value={newTask}
        />
        <Button>
          <PlusIcon />
        </Button>
      </div>
    </Form>
  )
}

export default TodoInput
