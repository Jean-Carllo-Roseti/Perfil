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
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  li {
    margin-right: 36px;

    p {
      font-weight: bold;
    }
  }
`

export const Icone = styled.img`
  width: 100px;
  height: auto;
  margin-top: 18px;
  align-items: center;
`
