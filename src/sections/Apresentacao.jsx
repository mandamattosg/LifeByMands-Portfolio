import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { PixelCursor, PixelHeart } from '../components/Decorations.jsx'
import { scrollToSection } from '../lib/scroll.js'

// Baseada no slide "Introduction": barra de título + janela de texto, presas à esquerda.
export default function Apresentacao() {
  return (
    <section id="apresentacao" className="section apresentacao">
      <div className="apresentacao__stage">
        <Window className="title-bar">
          <h2 className="section-title section-title--outline">Apresentação</h2>
        </Window>
        <Window className="apresentacao__body">
          <PixelButton onClick={() => scrollToSection('assuntos')}>Yes</PixelButton>
        </Window>
        <PixelCursor className="deco apresentacao__cursor" />
      </div>
      <PixelHeart className="deco apresentacao__heart" />
    </section>
  )
}
