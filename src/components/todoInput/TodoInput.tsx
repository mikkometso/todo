import React, { ChangeEvent, FormEvent, useState } from 'react'
import PlusIcon from '../icons/plusIcon/PlusIcon'
import { Form } from './TodoInput.styles'

const TodoInput: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(input)
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
          value={input}
        />
        <button className="button">
          <PlusIcon />
        </button>
      </div>
    </Form>
  )
}

export default TodoInput
