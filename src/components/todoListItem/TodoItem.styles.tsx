import styled from 'styled-components'

export const StyledTodoItem = styled.li`
  background-color: #eee;
  margin: 0.5rem auto;
  min-width: 220px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding-left: 1.5rem;

  .buttonWrapper {
    margin-left: auto;
    margin-right: 1rem;
    display: flex;
  }

  .itemButton {
    border: none;
    margin: 0;
  }
`
