import Window from '../components/Window.jsx'
import {
  AtomIcon,
  BoltIcon,
  BookIcon,
  FourPointStar,
  GearIcon,
  PixelCursor,
  PixelHeart,
  Sparkle,
  Star,
} from '../components/Decorations.jsx'

// Frases e símbolos na ordem em que aparecem. "estilo" escolhe o visual do adesivo,
// "giro" a inclinação e "y" um deslocamento vertical que desalinha as fileiras.
// A posição vem da quebra de linha automática, então funciona em qualquer largura.
const ITENS = [
  { tipo: 'icone', Icone: BookIcon, giro: -10, y: -14 },
  { tipo: 'frase', texto: 'recomendação de livros', estilo: 'grande', giro: -4, y: 10 },
  { tipo: 'icone', Icone: Sparkle, giro: 0, y: -22 },
  { tipo: 'frase', texto: 'a ciência por trás dos livros', estilo: 'rosa', giro: 5, y: -6 },
  { tipo: 'icone', Icone: AtomIcon, giro: 12, y: 16 },
  { tipo: 'frase', texto: 'cultura pop', estilo: 'contorno', giro: -8, y: 18 },
  { tipo: 'icone', Icone: PixelHeart, giro: -8, y: -12 },
  { tipo: 'frase', texto: 'como o kindle funciona', estilo: 'branco', giro: 4, y: -16 },
  { tipo: 'icone', Icone: BoltIcon, giro: 10, y: 12 },
  { tipo: 'icone', Icone: FourPointStar, giro: 0, y: -18 },
  { tipo: 'frase', texto: 'projetos de engenharia para leitores', estilo: 'azul', giro: -3, y: 8 },
  { tipo: 'icone', Icone: GearIcon, giro: 0, y: -10 },
  { tipo: 'icone', Icone: Star, giro: 14, y: 14 },
]

export default function Assuntos() {
  return (
    <section id="assuntos" className="section assuntos">
      <div className="assuntos__stage">
        <Window className="assuntos__header">
          <h2 className="section-title">O universo Life By Mands</h2>
        </Window>
        <Window className="assuntos__box">
          <ul className="topics" aria-label="Assuntos abordados no perfil">
            {ITENS.map((item, i) =>
              item.tipo === 'frase' ? (
                <li key={i} className={`topic topic--${item.estilo}`} style={{ '--giro': `${item.giro}deg`, '--y': `${item.y}px` }}>
                  {item.texto}
                </li>
              ) : (
                <li key={i} className="topic-icon" style={{ '--giro': `${item.giro}deg`, '--y': `${item.y}px` }} aria-hidden="true">
                  <item.Icone />
                </li>
              ),
            )}
          </ul>
        </Window>
        <PixelCursor className="deco assuntos__cursor" />
        <Sparkle className="deco assuntos__sparkle" fill="var(--blue-deep)" />
      </div>
    </section>
  )
}
