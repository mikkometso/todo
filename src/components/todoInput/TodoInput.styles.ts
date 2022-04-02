import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .row {
    margin: 0.5rem 0;
    display: flex;
  }
  .input {
    border: 1px solid #000;
    border-radius: 8px;
  }

  .button {
    display: flex;
    padding: 0.5rem;
    margin-left: 1rem;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 20%;
    cursor: pointer;
    :hover {
      background-color: #eee;
    }
  }
`
