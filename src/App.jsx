import FaixaDemonstracao from './components/FaixaDemonstracao.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Beneficios from './components/Beneficios.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import ResidencialComercial from './components/ResidencialComercial.jsx'
import Projetos from './components/Projetos.jsx'
import Simulador from './components/Simulador.jsx'
import Agilidade from './components/Agilidade.jsx'
import Contato from './components/Contato.jsx'
import SobreDemonstracao from './components/SobreDemonstracao.jsx'
import Footer from './components/Footer.jsx'
import BotaoWhatsApp from './components/BotaoWhatsApp.jsx'

export default function App() {
  return (
    <>
      <div className="topo-fixo">
        <FaixaDemonstracao />
        <Header />
      </div>
      <main>
        <Hero />
        <Beneficios />
        <ComoFunciona />
        <ResidencialComercial />
        <Projetos />
        <Simulador />
        <Agilidade />
        <Contato />
        <SobreDemonstracao />
      </main>
      <Footer />
      <BotaoWhatsApp />
      <span className="selo-demo-flutuante" aria-hidden="true">
        DEMO
      </span>
    </>
  )
}
