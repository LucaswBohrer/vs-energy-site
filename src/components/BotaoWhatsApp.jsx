import { WA_ORCAMENTO } from '../data.js'

export default function BotaoWhatsApp() {
  return (
    <a
      className="whatsapp-flutuante"
      href={WA_ORCAMENTO}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a VS Energy no WhatsApp"
    >
      WhatsApp
    </a>
  )
}
