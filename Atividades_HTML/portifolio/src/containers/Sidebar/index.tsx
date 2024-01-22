import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { SideBarContainer, Descricao, BotaoTema } from "./styles"

type Props = {
  trocaTema: () => void
}

const Sidebar = (Props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gian Souza</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        ogiansouza
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={Props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
