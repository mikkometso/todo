import React from 'react'
import { StyledTodoList } from './TodoList.styles'
import TodoItem from '../todoListItem/TodoItem'

const TodoList: React.FC = () => {
  return (
    <>
      TodoList:
      <StyledTodoList>
        <TodoItem task={'foo'} />
        <TodoItem task={'foo'} />
        <TodoItem task={'foo'} />
      </StyledTodoList>
    </>
  )
}

export default TodoList
