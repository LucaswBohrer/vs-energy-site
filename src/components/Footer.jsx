import { EMPRESA } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <b>VS</b> ENERGY
          </p>
          <p className="footer-sub">ENERGIA SOLAR</p>
          <p>
            Energia solar fotovoltaica residencial e comercial em Campo Bom e
            região: projeto, instalação, homologação e acompanhamento
            personalizado. Mais de 350 projetos entregues.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3>Navegação</h3>
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#beneficios">Benefícios</a>
            </li>
            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>
            <li>
              <a href="#projetos">Projetos entregues</a>
            </li>
            <li>
              <a href="#simulador">Simulador de economia</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <div>
          <h3>Contato</h3>
          <p>{EMPRESA.endereco}</p>
          <p>{EMPRESA.cidadeUf}</p>
          <p>{EMPRESA.telefone}</p>
          <p>Instagram: {EMPRESA.instagram}</p>
          <p>Facebook: {EMPRESA.facebook}</p>
          <p>Seg a sex 08:00–20:00 · Sáb 08:00–12:00</p>
        </div>
      </div>

      <div className="container footer-base">
        <p>© 2026 VS Energy — Energia Solar. Todos os direitos reservados.</p>
        <p>
          {EMPRESA.razaoSocial} · CNPJ {EMPRESA.cnpj}
        </p>
        <p>
          * Prazos de instalação observados em projetos recentes (3 a 8 dias
          do contrato à instalação). ** Financiamento com pagamento a partir
          de 2027, sujeito à análise e aprovação de crédito.
        </p>
      </div>
    </footer>
  )
}
