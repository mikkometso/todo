import React from 'react'
import { StyledTodoList } from './TodoList.styles'
import TodoItem from '../todoListItem/TodoItem'

interface ListProps {
  tasks: { id: string; task: string; done: boolean }[]
  editTaskHandler: (id: string) => void
  deleteTaskHandler: (id: string) => void
}

const TodoList: React.FC<ListProps> = (props) => {
  const { tasks, editTaskHandler, deleteTaskHandler } = props

  return (
    <>
      {tasks.length > 0 && <span>Task list:</span>}
      <StyledTodoList>
        {Object.values(tasks).map((item) => (
          <TodoItem
            key={item.id}
            task={item}
            editTaskHandler={editTaskHandler}
            deleteTaskHandler={deleteTaskHandler}
          />
        ))}
      </StyledTodoList>
    </>
  )
}

export default TodoList
