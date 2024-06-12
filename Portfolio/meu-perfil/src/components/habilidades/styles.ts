import styled from 'styled-components'

export const HabContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;

  .ajuste {
    height: 126px;
  }

  h2 {
    margin: 32px 0;
  }

  h3 {
    margin: 24px 0;
  }
`
export const HabList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Permitindo que os itens sejam quebrados em várias linhas, se necessário */
  justify-content: center; /* Centralizando os itens horizontalmente */
  list-style: none;
  padding: 0; /* Removendo padding padrão */

  li {
    margin-right: 36px;
    transition: transform 0.5s ease;

    :hover {
      transform: scale(1.1);
    }

    p {
      font-weight: bold; /* Deixando o texto em negrito para melhor visualização */
    }

`

export const Icone = styled.img`
  width: 100px;
  height: auto;
  margin-top: 18px;
  align-items: center;
`
