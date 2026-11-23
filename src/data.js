// Dados públicos reais da VS Energy — Energia Solar (Campo Bom/RS).
// Nenhum dado aqui foi inventado: tudo veio do site HTML anterior, que por
// sua vez usava apenas dados públicos da empresa (site, Instagram e Google).

import {
  projetoJardimSol,
  projetoAerea20Paineis,
  projetoInversorDeye,
  projetoInstalacao,
  comercialGalpoes,
} from './assets/images.js'

export const EMPRESA = {
  nome: 'VS Energy',
  slogan: 'O sol brilha para todos, APROVEITE!!!',
  tagline: 'SUA ENERGIA. SEU FUTURO.',
  descricao:
    'Projeto, instalação e homologação de energia solar para sua casa ou empresa, com acompanhamento personalizado do início ao fim.',
  endereco: 'Av. Carlos Strassburger Filho, 5796',
  cidadeUf: 'Campo Bom/RS — CEP 93718-010',
  telefone: '(51) 98012-3039',
  whatsappNumero: '5551980123039',
  instagram: '@vsenergy.cb',
  instagramUrl: 'https://www.instagram.com/vsenergy.cb/',
  facebook: 'VS Energy',
  facebookUrl: 'https://www.facebook.com/613478551838902',
  horarioSemana: 'Segunda a sexta: 08:00 às 20:00',
  horarioSabado: 'Sábado: 08:00 às 12:00',
  razaoSocial: 'Clenilson Soares da Silva',
  cnpj: '19.587.127/0001-87',
}

export const WA_ORCAMENTO =
  'https://wa.me/5551980123039?text=' +
  encodeURIComponent('Olá! Quero um orçamento de energia solar.')

export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Av.+Carlos+Strassburger+Filho,+5796,+Campo+Bom,+RS,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed'

export const MAPS_ABRIR =
  'https://www.google.com/maps/search/?api=1&query=Av.+Carlos+Strassburger+Filho,+5796,+Campo+Bom,+RS'

export const MAPS_ROTA =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+Carlos+Strassburger+Filho,+5796,+Campo+Bom,+RS'

export const BENEFICIOS = [
  {
    titulo: 'Economia de até 95%',
    texto:
      'Reduza drasticamente o valor da conta de luz: sistemas bem dimensionados geram praticamente toda a energia que você consome, com economia de até 95% no valor mensal.',
  },
  {
    titulo: 'Valorização do imóvel',
    texto:
      'Casas e empresas com energia solar instalada são mais valorizadas no mercado: o comprador enxerga economia garantida desde o primeiro mês.',
  },
  {
    titulo: 'Energia limpa e renovável',
    texto:
      'Você gera energia a partir do sol, sem emissões e sem ruído, e ainda fica protegido dos reajustes e das bandeiras tarifárias da conta de luz.',
  },
  {
    titulo: 'Retorno do investimento',
    texto:
      'A economia mensal paga o sistema em poucos anos. Depois do payback, é energia praticamente gratuita por décadas de vida útil dos painéis.',
  },
  {
    titulo: 'Garantia e equipamentos de qualidade',
    texto:
      'Trabalhamos com inversores de marcas reconhecidas no mercado, como Deye e SOFAR, e equipamentos com garantia do fabricante.',
  },
  {
    titulo: 'Acompanhamento personalizado',
    texto:
      'Do primeiro orçamento ao pós-instalação, você é atendido de forma personalizada pela equipe da VS Energy — sem robôs e sem enrolação.',
  },
]

export const PASSOS = [
  {
    numero: 1,
    titulo: 'Orçamento gratuito',
    texto:
      'Você chama no WhatsApp, envia a sua conta de luz e recebe uma proposta sem custo e sem compromisso, já com a estimativa de economia.',
  },
  {
    numero: 2,
    titulo: 'Projeto personalizado',
    texto:
      'Dimensionamos o sistema para o seu consumo e para o seu telhado: quantidade de painéis, inversor ideal e melhor aproveitamento do espaço.',
  },
  {
    numero: 3,
    titulo: 'Instalação rápida',
    texto:
      'Equipe própria instala tudo com agilidade — em projetos recentes, foram de 3 a 8 dias entre o contrato assinado e o sistema montado.',
  },
  {
    numero: 4,
    titulo: 'Homologação e economia',
    texto:
      'Cuidamos da homologação junto à concessionária. Aprovado, o sistema é ligado e a sua conta de luz começa a cair já no mês seguinte.',
  },
]

export const PROJETOS = [
  {
    selo: 'Instalado em 8 dias',
    titulo: 'Jardim do Sol — Campo Bom',
    local: 'Campo Bom/RS',
    data: 'Contrato 21/05/2026 · Instalado 29/05/2026',
    descricao:
      'Casa térrea com telhado metálico e painéis azul-escuros: do contrato assinado à instalação concluída em apenas 8 dias.',
    imagem: projetoJardimSol,
    alt: 'Painéis solares azul-escuros instalados em telhado metálico de residência',
    link: 'https://www.instagram.com/reel/DZOgIxXxNok/',
  },
  {
    selo: 'Foto aérea',
    titulo: 'Residência — Campo Bom',
    local: 'Campo Bom/RS',
    data: '17/06/2026',
    descricao:
      '20 painéis pretos instalados sobre telhado de telha vermelha, registrados em foto aérea após a conclusão da instalação.',
    imagem: projetoAerea20Paineis,
    alt: 'Vista aérea de casa com 20 painéis solares pretos sobre telhado de telha vermelha',
    link: 'https://www.instagram.com/p/DZs39L5Rb28/',
  },
  {
    selo: 'Inversores Deye',
    titulo: 'Residência — Estância Velha',
    local: 'Estância Velha/RS',
    data: '21/08/2026',
    descricao:
      'Instalação concluída com inversores Deye — e a fachada ganhou a bandeira da VS Energy.',
    imagem: projetoInversorDeye,
    alt: 'Inversor híbrido Deye instalado na parede com display ligado',
    link: 'https://www.instagram.com/p/DcTVY_yEVEn/',
  },
  {
    selo: 'Instalado em 3 dias',
    titulo: 'Residência — Campo Bom',
    local: 'Campo Bom/RS',
    data: 'Agosto/2026',
    descricao:
      'Contrato em 18/08, material entregue em 20/08 e instalação concluída em 21/08/2026, com inversor SOFAR.',
    imagem: projetoInstalacao,
    alt: 'Instaladores fixando painéis solares em telhado de residência',
    link: 'https://www.instagram.com/p/DcbRmTnEUTj/',
  },
  {
    selo: 'Comercial',
    titulo: 'Comercial — galpão',
    local: 'Projeto comercial',
    data: '16/09/2026',
    descricao:
      '“Sua empresa cresceu. A conta de energia também?” — sistema comercial para reduzir o custo fixo do galpão.',
    imagem: comercialGalpoes,
    alt: 'Vista aérea de galpão comercial com o telhado coberto de painéis solares',
    link: 'https://www.instagram.com/p/DdWdUWVG410/',
  },
]

// Parâmetros do simulador — iguais aos da versão HTML.
export const SIMULADOR = {
  tarifa: 0.95, // R$/kWh estimado (RS)
  geracaoKwpMes: 120, // kWh gerados por kWp/mês (média regional)
  custoKwp: 4200, // R$ por kWp instalado (média de mercado)
  minInvestimento: 11900, // investimento mínimo típico
  painelKwp: 0.55, // kWp por painel
  contaMin: 100,
  contaMax: 5000,
  contaPadrao: 500,
}
