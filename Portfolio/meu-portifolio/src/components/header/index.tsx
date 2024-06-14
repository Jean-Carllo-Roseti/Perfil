import { HContainer, Hcontent, Hlist } from './styles'

const Header = () => {
  return (
    <HContainer>
      <Hcontent>
        <h1>Jean Carllo</h1>
        <Hlist>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </Hlist>
      </Hcontent>
    </HContainer>
  )
}

export default Header
