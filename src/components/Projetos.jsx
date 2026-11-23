import { EMPRESA, PROJETOS } from '../data.js'

export default function Projetos() {
  return (
    <section className="secao secao-escura" id="projetos">
      <div className="container">
        <p className="secao-kicker">Projetos entregues</p>
        <h2>Quem chamou, já está economizando</h2>
        <p className="secao-sub">
          Estes são projetos reais, entregues pela VS Energy e publicados no
          Instagram da empresa. Toque em um projeto para ver a publicação
          original.
        </p>

        <div className="grade-projetos">
          {PROJETOS.map((p) => (
            <article className="card-projeto" key={p.link}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver a publicação no Instagram: ${p.titulo}`}
              >
                <img src={p.imagem} alt={p.alt} loading="lazy" />
              </a>
              <div className="card-projeto-corpo">
                <span className="selo">{p.selo}</span>
                <h3>{p.titulo}</h3>
                <p className="projeto-local">{p.local}</p>
                <p className="projeto-data">{p.data}</p>
                <p>{p.descricao}</p>
                <a
                  className="link-instagram"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver a publicação no Instagram
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="projetos-rodape">
          Estes são apenas alguns dos mais de 350 projetos entregues. Veja
          muito mais fotos e vídeos de instalações no Instagram{' '}
          <a
            href={EMPRESA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {EMPRESA.instagram}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
