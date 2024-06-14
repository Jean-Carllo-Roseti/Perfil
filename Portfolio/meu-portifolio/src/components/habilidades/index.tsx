import HTML from '../../assets/images/NovaHtml.png'
import CSS from '../../assets/images/NovoCSS.png'
import Escudo from '../../assets/images/novaJava.png'
import RC from '../../assets/images/React.png'
import RD from '../../assets/images/Redux.png'
import Boot from '../../assets/images/BootStrap51.png'
import Java from '../../assets/images/JAvi.webp'
import Sql from '../../assets/images/mySql.png'
import Ang from '../../assets/images/Ang.png'
import Cypress from '../../assets/images/cypress.jpeg'
import Jest from '../../assets/images/jest.png'
import Sass from '../../assets/images/Sass.png'
import Less from '../../assets/images/Less.png'
import Gulp from '../../assets/images/gulp.png'
import Grunt from '../../assets/images/Grunt.png'

import { HabContent, HabList, Icone } from './styles'

const Habilidades = () => {
  return (
    <HabContent>
      <h2>Habildiades</h2>
      <div>
        <div>
          <h3>Fortes</h3>
          <HabList>
            <li>
              <p>HTML</p>
              <Icone src={HTML} alt="" />
            </li>
            <li>
              <p>CSS</p>
              <Icone src={CSS} alt="" />
            </li>
            <li>
              <p>JavaScript</p>
              <Icone src={Escudo} alt="" />
            </li>
            <li>
              <p>React</p>
              <Icone src={RC} alt="" />
            </li>
            <li>
              <p>Redux</p>
              <Icone src={RD} alt="" />
            </li>
            <li>
              <p>Cypress</p>
              <Icone src={Cypress} alt="" />
            </li>
            <li>
              <p>Sass</p>
              <Icone src={Sass} alt="" />
            </li>
            <li>
              <p>Less</p>
              <Icone src={Less} alt="" />
            </li>
          </HabList>
        </div>
        <div>
          <h3>Desenvolimento</h3>
          <HabList>
            <li>
              <p>Java</p>
              <Icone src={Java} alt="" />
            </li>
            <li>
              <p>Angular</p>
              <Icone src={Ang} alt="" />
            </li>
            <li>
              <p>MySql</p>
              <Icone src={Sql} alt="" />
            </li>
            <li>
              <p>Gulp</p>
              <Icone src={Gulp} alt="" className="ajuste" />
            </li>
            <li>
              <p>Grunt</p>
              <Icone src={Grunt} alt="" />
            </li>
            <li>
              <p>BootStrap</p>
              <Icone src={Boot} alt="" />
            </li>
            <li>
              <p>Jest</p>
              <Icone src={Jest} alt="" />
            </li>
          </HabList>
        </div>
      </div>
    </HabContent>
  )
}

export default Habilidades
