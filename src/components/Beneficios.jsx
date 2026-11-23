import { BENEFICIOS } from '../data.js'

export default function Beneficios() {
  return (
    <section className="secao" id="beneficios">
      <div className="container">
        <p className="secao-kicker">Benefícios</p>
        <h2>Por que gerar a sua própria energia?</h2>
        <p className="secao-sub">
          Com um sistema fotovoltaico instalado pela VS Energy, o seu telhado
          passa a trabalhar por você todos os dias — faça chuva ou faça sol na
          conta.
        </p>
        <div className="grade-beneficios">
          {BENEFICIOS.map((b) => (
            <article className="card" key={b.titulo}>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
