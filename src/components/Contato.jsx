import { EMPRESA, MAPS_ABRIR, MAPS_EMBED, MAPS_ROTA, WA_ORCAMENTO } from '../data.js'

export default function Contato() {
  return (
    <section className="secao" id="contato">
      <div className="container">
        <p className="secao-kicker">Contato</p>
        <h2>Fale com a VS Energy</h2>
        <p className="secao-sub">
          Peça seu orçamento gratuito pelo WhatsApp ou passe na loja em Campo
          Bom.
        </p>

        <div className="contato-grid">
          <div className="contato-info">
            <div className="contato-item">
              <h3>Endereço</h3>
              <p>{EMPRESA.endereco}</p>
              <p>{EMPRESA.cidadeUf}</p>
            </div>
            <div className="contato-item">
              <h3>Telefone / WhatsApp</h3>
              <p>
                <a
                  href="https://wa.me/5551980123039"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EMPRESA.telefone}
                </a>
              </p>
              <p>Atendimento rápido no horário comercial.</p>
            </div>
            <div className="contato-item">
              <h3>Horário de atendimento</h3>
              <p>{EMPRESA.horarioSemana}</p>
              <p>{EMPRESA.horarioSabado}</p>
            </div>
            <div className="contato-item">
              <h3>Redes sociais</h3>
              <p>Acompanhe as instalações e novidades:</p>
              <p>
                <a
                  href={EMPRESA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EMPRESA.instagram}
                </a>
              </p>
              <p>
                <a
                  href={EMPRESA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EMPRESA.facebook}
                </a>
              </p>
            </div>
            <div className="contato-botoes">
              <a
                className="btn btn-secundario"
                href={MAPS_ABRIR}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no Google Maps
              </a>
              <a
                className="btn btn-secundario"
                href={MAPS_ROTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                Traçar rota
              </a>
            </div>
          </div>

          <div className="contato-mapa">
            <iframe
              title="Mapa — VS Energy, Av. Carlos Strassburger Filho, 5796, Campo Bom/RS"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="cta-final">
          <h2>O sol brilha para todos. Aproveite você também.</h2>
          <p>
            Peça agora um orçamento gratuito e descubra quanto a sua casa ou
            empresa pode economizar com energia solar.
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
            <a className="btn btn-secundario" href="#simulador">
              Simular minha economia
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
