import { comercialGalpoes } from '../assets/images.js'

export default function ResidencialComercial() {
  return (
    <section className="secao" id="residencial-comercial">
      <div className="container">
        <p className="secao-kicker">Para você</p>
        <h2>Residencial ou comercial: o sol trabalha dos dois jeitos</h2>
        <div className="grade-dupla">
          <article className="card card-destaque">
            <h3>Residencial</h3>
            <p>
              Para quem quer se livrar da conta de luz alta em casa e ainda
              valorizar o imóvel.
            </p>
            <ul>
              <li>Projeto sob medida para o consumo da sua família</li>
              <li>
                Instalação em telhados de telha, metálicos ou fibrocimento
              </li>
              <li>Economia de até 95% na conta de luz</li>
              <li>Homologação e acompanhamento inclusos</li>
            </ul>
          </article>

          <article className="card card-destaque">
            <img
              className="card-imagem"
              src={comercialGalpoes}
              alt="Vista aérea de galpões industriais com telhados cobertos de painéis solares"
            />
            <h3>Comercial</h3>
            <p>
              Sua empresa cresceu. A conta de energia também? Transforme um
              custo fixo em investimento.
            </p>
            <ul>
              <li>
                Sistemas de maior porte para galpões, comércios e indústrias
              </li>
              <li>Redução direta no custo fixo mensal da operação</li>
              <li>Previsibilidade: proteção contra reajustes de tarifa</li>
              <li>Empresa mais sustentável e competitiva</li>
            </ul>
            <p className="financiamento">
              <strong>Financiamento facilitado:</strong> instale agora e
              comece a pagar só em 2027.
            </p>
            <p className="nota">
              Condição de financiamento com pagamento a partir de 2027,
              sujeita à análise e aprovação de crédito. Consulte as condições
              no orçamento.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
