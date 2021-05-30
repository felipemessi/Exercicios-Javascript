import styled from 'styled-components'

export const Main = styled.main`
  background: #081229;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }
`;