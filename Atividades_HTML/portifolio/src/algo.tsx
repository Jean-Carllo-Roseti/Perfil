import styled from "styled-components"
const Botao = styled.button`
  background-color: red;
  color: white;
  border-radius: 16px;
  width: 60px;
  border: none;
`

function Mais() {
  return (
    <div>
      <p>testando</p>
      <Botao>clicas</Botao>
    </div>
  )
}

export default Mais
