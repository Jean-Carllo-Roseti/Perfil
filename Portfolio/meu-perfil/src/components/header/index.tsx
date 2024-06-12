import { HContainer, Hcontent, Hlist } from './styles'

const Header = () => {
  return (
    <HContainer>
      <Hcontent>
        <h1>Jean Carllo</h1>
        <Hlist>
          <li>Sobre mim</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contatos</li>
        </Hlist>
      </Hcontent>
    </HContainer>
  )
}

export default Header
