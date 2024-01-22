import styled from "styled-components"

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;

  img {
    height: 102px; //feito a mão, foi mt adequado.

    @media (max-width: 768px) {
      height: auto;
      width: 100%; // imagem correspodne perfeitamente a responsividade.
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`
