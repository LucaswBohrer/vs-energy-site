import { useMemo, useState } from 'react'
import { SIMULADOR } from '../data.js'

const fmtMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const formatarKwp = (v) => `${v.toFixed(1).replace('.', ',')} kWp`
const formatarAnos = (v) => `≈ ${v.toFixed(1).replace('.', ',')} anos`

function limitarConta(v) {
  const n = parseFloat(v)
  if (Number.isNaN(n)) return SIMULADOR.contaMin
  return Math.min(SIMULADOR.contaMax, Math.max(SIMULADOR.contaMin, n))
}

function calcular(conta) {
  const economiaMes = conta * 0.95
  const novaConta = conta - economiaMes
  const consumoKwh = conta / SIMULADOR.tarifa
  const kwp = consumoKwh / SIMULADOR.geracaoKwpMes
  const paineis = Math.max(4, Math.round(kwp / SIMULADOR.painelKwp))
  const investimento = Math.max(
    SIMULADOR.minInvestimento,
    kwp * SIMULADOR.custoKwp,
  )
  const paybackAnos = investimento / economiaMes / 12
  return {
    economiaMes,
    novaConta,
    economiaAno: economiaMes * 12,
    economia25: economiaMes * 12 * 25,
    kwp,
    paineis,
    investimento: Math.round(investimento / 100) * 100,
    paybackAnos,
  }
}

export default function Simulador() {
  const [conta, setConta] = useState(SIMULADOR.contaPadrao)
  const resultado = useMemo(() => calcular(conta), [conta])

  const mensagemWa =
    'Olá! Fiz a simulação no site: minha conta de luz média é de ' +
    fmtMoeda.format(conta) +
    '/mês. Quero receber o orçamento exato de energia solar.'
  const linkWa =
    'https://wa.me/5551980123039?text=' + encodeURIComponent(mensagemWa)

  const aoMudarRange = (e) => setConta(limitarConta(e.target.value))
  const aoMudarNumero = (e) => {
    const valor = e.target.value
    if (valor === '') {
      setConta(SIMULADOR.contaMin)
      return
    }
    setConta(limitarConta(valor))
  }

  return (
    <section className="secao" id="simulador">
      <div className="container">
        <p className="secao-kicker">Simulador de economia</p>
        <h2>Quanto você economizaria com energia solar?</h2>
        <p className="secao-sub">
          Informe o valor médio da sua conta de luz e veja, na hora, uma
          estimativa de economia e de retorno do investimento.
        </p>

        <div className="simulador">
          <div className="simulador-entrada">
            <label htmlFor="contaValor">
              Valor médio da sua conta de luz por mês
            </label>
            <div className="simulador-controles">
              <span className="simulador-moeda">R$</span>
              <input
                id="contaValor"
                type="number"
                min={SIMULADOR.contaMin}
                max={SIMULADOR.contaMax}
                step="10"
                value={conta}
                onChange={aoMudarNumero}
              />
              <input
                id="contaRange"
                type="range"
                min={SIMULADOR.contaMin}
                max={SIMULADOR.contaMax}
                step="10"
                value={conta}
                onChange={aoMudarRange}
                aria-label="Valor da conta de luz"
              />
            </div>
            <p className="simulador-faixa">
              R$ {SIMULADOR.contaMin} — R$ {SIMULADOR.contaMax.toLocaleString('pt-BR')}
            </p>
            <p className="simulador-ajuda">
              Arraste o controle ou digite o valor da sua conta. A simulação
              considera uma economia de até <strong>95%</strong> sobre esse
              valor.
            </p>
            <a
              className="btn btn-whatsapp"
              href={linkWa}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero o orçamento exato
            </a>
            <p className="nota">Orçamento gratuito e sem compromisso.</p>
          </div>

          <div className="simulador-resultados">
            <div className="resultado-destaque">
              <span>Economia estimada por mês</span>
              <strong>{fmtMoeda.format(Math.round(resultado.economiaMes))}</strong>
              <span>
                Sua conta cairia para cerca de{' '}
                <strong>{fmtMoeda.format(Math.round(resultado.novaConta))}</strong>
                /mês (taxa mínima da concessionária à parte)
              </span>
            </div>

            <dl className="resultado-grade">
              <div>
                <dt>Economia por ano</dt>
                <dd>{fmtMoeda.format(Math.round(resultado.economiaAno))}</dd>
              </div>
              <div>
                <dt>Economia em 25 anos</dt>
                <dd>{fmtMoeda.format(Math.round(resultado.economia25))}</dd>
              </div>
              <div>
                <dt>Sistema estimado</dt>
                <dd>
                  {formatarKwp(resultado.kwp)}
                  <span>≈ {resultado.paineis} painéis</span>
                </dd>
              </div>
              <div>
                <dt>Payback estimado</dt>
                <dd>{formatarAnos(resultado.paybackAnos)}</dd>
              </div>
            </dl>

            <p className="resultado-investimento">
              Investimento estimado:{' '}
              <strong>{fmtMoeda.format(resultado.investimento)}</strong>
            </p>

            <p className="nota">
              <strong>Importante:</strong> os valores acima são{' '}
              <strong>estimativas</strong> calculadas a partir do valor
              informado, considerando economia de até 95%, geração média na
              região e custos médios de mercado. O investimento exato, o
              tamanho do sistema e o prazo de retorno dependem de avaliação
              técnica do seu telhado e do seu consumo — peça o orçamento
              gratuito para receber os números do seu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
