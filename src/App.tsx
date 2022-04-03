import React from 'react'
import styled from 'styled-components'
import TodoInput from './components/todoInput/TodoInput'
import TodoList from './components/todoList/TodoList'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <Wrapper>
      <h1>Todo app</h1>
      <TodoInput />
      <TodoList />
    </Wrapper>
  )
}

export default App
