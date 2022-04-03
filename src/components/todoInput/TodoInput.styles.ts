import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .row {
    margin: 0.5rem 0;
    display: flex;
  }
  .input {
    padding-left: 1rem;
    border: 1px solid #000;
    border-radius: 8px;
    @media (min-width: 478px) {
      min-width: 270px;
    }
  }
`
