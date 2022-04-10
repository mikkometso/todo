import styled from 'styled-components'

export const StyledTodoItem = styled.li<{ done: boolean }>`
  background-color: #eee;
  min-width: 205px;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding-left: 1.5rem;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  @media (min-width: 478px) {
    min-width: 330px;
    margin: 0.5rem auto;
  }

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
