import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { PixelCursor, Sparkle } from '../components/Decorations.jsx'

// Baseada no slide "Problem": título numa janela larga e dois cards lado a lado.
export default function Assuntos() {
  return (
    <section id="assuntos" className="section assuntos">
      <div className="assuntos__stage">
        <Window className="assuntos__header">
          <h2 className="section-title">Assuntos</h2>
        </Window>
        <div className="assuntos__cards">
          <Window className="assuntos__card">
            <PixelButton>Run</PixelButton>
          </Window>
          <Window className="assuntos__card">
            <PixelButton>Cancel</PixelButton>
          </Window>
        </div>
        <PixelCursor className="deco assuntos__cursor" />
        <Sparkle className="deco assuntos__sparkle" fill="var(--blue-deep)" />
      </div>
    </section>
  )
}
