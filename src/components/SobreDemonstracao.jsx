import { EMPRESA } from '../data.js'
import { logoVsEnergy } from '../assets/images.js'

export default function SobreDemonstracao() {
  return (
    <section className="secao sobre-demo" id="sobre-demonstracao">
      <div className="container sobre-demo-grid">
        <img
          src={logoVsEnergy}
          alt="Logotipo oficial da VS Energy sobre a cidade à noite com fogos de artifício"
        />
        <div>
          <p className="secao-kicker">Sobre esta demonstração</p>
          <h2>Demonstração</h2>
          <p>
            Este site é um modelo de apresentação criado para demonstrar como
            ficaria a presença online da VS Energy — ele usa os dados públicos
            reais da empresa (endereço, WhatsApp, Instagram e projetos
            publicados), mas ainda não é o site oficial. As fotos dos projetos
            nesta página são ilustrativas; as publicações originais, com as
            fotos reais das instalações, estão linkadas em cada card para o
            Instagram{' '}
            <a
              href={EMPRESA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMPRESA.instagram}
            </a>
            .
          </p>
          <p>
            Na versão final, entram as fotos originais fornecidas pela
            empresa, os ajustes de cores e textos aprovados por ela e a
            publicação no domínio próprio da VS Energy.
          </p>
        </div>
      </div>
    </section>
  )
}
