# VS Energy — Energia Solar | Site em React + Vite

Site demonstração em **React 18 + Vite** para a VS Energy — Energia Solar
(Campo Bom/RS). Reconstrução fiel da versão anterior em HTML puro, com o
mesmo conteúdo e os mesmos dados públicos reais da empresa.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build   # gera dist/
npm run preview # serve o build localmente
```

## Deploy na Vercel

Projeto Vite padrão: framework **Vite**, comando de build `npm run build`,
diretório de saída `dist`. Nenhuma variável de ambiente necessária.

## Estrutura

- `index.html` — entrada Vite, título e fontes (Sora + Manrope)
- `src/main.jsx` — bootstrap do React
- `src/App.jsx` — composição das secções
- `src/data.js` — todos os dados públicos da empresa (sem dados inventados)
- `src/components/` — FaixaDemonstracao, Header, Hero, Beneficios,
  ComoFunciona, ResidencialComercial, Projetos, Simulador, Agilidade,
  Contato, SobreDemonstracao, Footer, BotaoWhatsApp
- `src/App.css` — CSS puro (sem Tailwind), paleta azul-marinho + verde +
  ciano do logótipo, responsivo com menu hamburger
- `public/logo-vs-energy.jpg` — logótipo oficial da empresa
- `public/banner-vs-energy.jpg` — banner oficial da empresa
- `public/img/` — fotos ilustrativas dos projetos (extraídas da versão HTML;
  as fotos reais estão linkadas em cada card para o Instagram @vsenergy.cb)

## Conteúdo

Faixa de demonstração, hero com o slogan "O sol brilha para todos,
APROVEITE!!!", benefícios, como funciona em 4 passos, residencial x
comercial, 5 projetos reais com links para o Instagram, simulador interativo
de economia (useState), agilidade de execução, contacto com mapa do Google
Maps, secção "Sobre esta demonstração" e rodapé com razão social e CNPJ.
