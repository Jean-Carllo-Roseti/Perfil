import Habilidades from './components/habilidades'
import Header from './components/header'
import SobreMim from './components/sobreMim'

import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <SobreMim />
      <Habilidades />
    </div>
  )
}

export default App
