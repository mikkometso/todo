import React from 'react'
import Button from '../common/button/Button'
import CheckIcon from '../icons/CheckIcon'
import DeleteIcon from '../icons/DeleteIcon'
import { StyledTodoItem } from './TodoItem.styles'

const TodoItem: React.FC<{ task: string }> = (props) => {
  const { task } = props
  const deleteTaskHandler = () => {
    console.log('delete')
  }

  return (
    <StyledTodoItem>
      <span>{task}</span>
      <div className="buttonWrapper">
        <Button className="itemButton" onClick={deleteTaskHandler}>
          <DeleteIcon />
        </Button>
        <Button className="itemButton" onClick={deleteTaskHandler}>
          <CheckIcon />
        </Button>
      </div>
    </StyledTodoItem>
  )
}

export default TodoItem
