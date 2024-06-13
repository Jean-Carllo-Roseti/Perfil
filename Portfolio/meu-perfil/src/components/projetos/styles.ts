import styled from 'styled-components'

export const PortfolioContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin: 32px 0;
  }
`

export const ProjectCard = styled.div`
  padding: 16px;
  background-color: #f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease;
  width: calc(50% - 32px); // Adjust for two columns with spacing

  &:hover {
    transform: scale(1.05);
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 228px;
  border-radius: 8px;
`

export const ProjectDetails = styled.div`
  background-color: blue;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;

  h3 {
    margin-top: 0;
  }

  p {
    margin: 8px 0;
  }
`

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 8px;
    background-color: #e1e1e1;
    border-radius: 4px;
    padding: 4px 8px;
  }
`

export const ProjectLinks = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;

  a {
    margin-right: 16px;
    text-decoration: none;
    color: #fff;
    background-color: red;
    padding: 8px;
    border-radius: 8px;

    &:hover {
      background-color: #000;
    }
  }
`
export const CardsColunas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justifycontent: space-around;
`
