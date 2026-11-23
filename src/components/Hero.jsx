import { EMPRESA, WA_ORCAMENTO } from '../data.js'
import { bannerVsEnergy } from '../assets/images.js'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-texto">
          <p className="hero-eyebrow">
            Energia solar fotovoltaica · Campo Bom/RS
          </p>
          <p className="hero-badge">Demonstração</p>
          <h1>
            O sol brilha para todos,
            <span className="hero-destaque"> APROVEITE!!!</span>
            <br />
            <span className="hero-tagline">SUA ENERGIA. SEU FUTURO.</span>
          </h1>
          <p className="hero-descricao">{EMPRESA.descricao}</p>
          <p className="hero-projetos">
            <strong>Mais de 350 projetos entregues</strong> em Campo Bom e
            região.
          </p>
          <div className="hero-acoes">
            <a
              className="btn btn-whatsapp"
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a className="btn btn-secundario" href="#projetos">
              Ver projetos entregues
            </a>
          </div>
          <ul className="hero-chips">
            <li>Orçamento gratuito</li>
            <li>Instalação em poucos dias</li>
            <li>Homologação inclusa</li>
          </ul>
        </div>

        <div className="hero-midia">
          <img
            src={bannerVsEnergy}
            alt="Banner oficial da VS Energy: logotipo da empresa, usina solar vista de cima e casa com painéis solares no telhado"
          />
        </div>
      </div>

      <div className="container stats">
        <div className="stat">
          <strong>+350</strong>
          <span>projetos entregues</span>
        </div>
        <div className="stat">
          <strong>até 95%</strong>
          <span>de economia na conta de luz</span>
        </div>
        <div className="stat">
          <strong>3–8 dias</strong>
          <span>do contrato à instalação*</span>
        </div>
        <div className="stat">
          <strong>2027</strong>
          <span>financiamento: comece a pagar só em 2027**</span>
        </div>
      </div>
    </section>
  )
}
