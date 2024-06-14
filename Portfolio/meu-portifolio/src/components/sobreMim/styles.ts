import styled from 'styled-components'

export const SbContainer = styled.div`
  background-color: blue;
  padding: 12px 0;

  h2 {
    text-align: center;
    margin: 16px 0;
  }
`
export const SbOrganiza = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  border-radius: 16px;
`

export const SbContent = styled.div`
  display: flex;

  img {
    width: 300px;
    height: 400px;
  }
`
export const Descricao = styled.div`
  background-color: green;
  padding: 24px 16px;
`
export const Imagem = styled.div`
  padding: 8px 16px;
  background-color: yellow;

  img {
    width: 280px;
    height: 280px;
    border-radius: 80px;
    margin-bottom: 16px;
  }
`
export const Contatos = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #0073b1;
    }

    &:nth-child(1):hover {
      color: #6e5494;
    }

    &:nth-child(3):hover {
      color: #c71610;
    }

    &:nth-child(4):hover {
      color: #25d366;
    }

    &:nth-child(5):hover {
      color: #f1f;
    }
  }
`
