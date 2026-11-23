import { PASSOS } from '../data.js'

export default function ComoFunciona() {
  return (
    <section className="secao secao-escura" id="como-funciona">
      <div className="container">
        <p className="secao-kicker">Como funciona</p>
        <h2>Da simulação à economia em 4 passos</h2>
        <p className="secao-sub">
          Um processo simples e transparente, conduzido pela VS Energy do
          começo ao fim — incluindo toda a burocracia da homologação.
        </p>
        <ol className="passos">
          {PASSOS.map((p) => (
            <li className="passo" key={p.numero}>
              <span className="passo-numero">{p.numero}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
