import React from 'react'
import Button from '../common/button/Button'
import CheckIcon from '../icons/CheckIcon'
import DeleteIcon from '../icons/DeleteIcon'
import { StyledTodoItem } from './TodoItem.styles'

interface ItemProps {
  task: { id: string; task: string; done: boolean }
  editTaskHandler: (id: string) => void
  deleteTaskHandler: (id: string) => void
}

const TodoItem: React.FC<ItemProps> = (props) => {
  const { task, editTaskHandler, deleteTaskHandler } = props

  return (
    <StyledTodoItem done={task.done}>
      <span>{task.task}</span>
      <div className="buttonWrapper">
        <Button
          className="itemButton"
          onClick={() => deleteTaskHandler(task.id)}
        >
          <DeleteIcon />
        </Button>
        <Button className="itemButton" onClick={() => editTaskHandler(task.id)}>
          <CheckIcon />
        </Button>
      </div>
    </StyledTodoItem>
  )
}

export default TodoItem
