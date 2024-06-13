import Footer from './components/footer'
import Habilidades from './components/habilidades'
import Header from './components/header'
import Projetos from './components/projetos'
import SobreMim from './components/sobreMim'

import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Footer />
    </div>
  )
}

export default App
