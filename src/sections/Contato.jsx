import Window from '../components/Window.jsx'
import { CameraIcon, FourPointStar, MailIcon, NoteIcon, PlayIcon } from '../components/Decorations.jsx'

const EMAIL = 'lifebymands@gmail.com'

const REDES = [
  { nome: 'Instagram', usuario: '@lifeby.mands', url: 'https://www.instagram.com/lifeby.mands', Icone: CameraIcon },
  { nome: 'TikTok', usuario: '@lifeby.mands', url: 'https://www.tiktok.com/@lifeby.mands', Icone: NoteIcon },
  { nome: 'YouTube', usuario: '@lifebymands', url: 'https://www.youtube.com/@lifebymands', Icone: PlayIcon },
]

// Baseada no slide "Thank you": título em adesivo sobre uma mancha, com brilhos pretos
// nas laterais. Embaixo, uma janela com o e-mail para propostas de parceria e as redes.
export default function Contato() {
  return (
    <section id="contato" className="section contato">
      <div className="contato__stage">
        <div className="contato__titulo">
          <div className="contato__blob">
            <h2 className="section-title section-title--sticker">Contato</h2>
          </div>
          <div className="contato__stars contato__stars--left">
            <FourPointStar /><FourPointStar /><FourPointStar />
          </div>
          <div className="contato__stars contato__stars--right">
            <FourPointStar /><FourPointStar /><FourPointStar />
          </div>
        </div>

        <Window className="contato__card">
          <p className="contato__cta">Parcerias e publis: envie sua proposta</p>
          <a className="contato__email" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Proposta de parceria')}`}>
            <MailIcon />
            <span>{EMAIL}</span>
          </a>
          <ul className="contato__redes" aria-label="Redes sociais">
            {REDES.map(({ nome, usuario, url, Icone }) => (
              <li key={nome}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${nome}: ${usuario}`}>
                  <Icone />
                  <span>{nome}</span>
                </a>
              </li>
            ))}
          </ul>
        </Window>
      </div>
    </section>
  )
}
