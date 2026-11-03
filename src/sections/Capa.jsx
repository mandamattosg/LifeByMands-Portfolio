import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { BlockSparkle, PixelCursor, PixelHeart, Sparkle, Star } from '../components/Decorations.jsx'
import { scrollToSection } from '../lib/scroll.js'
import fotoMands from '../assets/foto-mands.jpg'

// Baseada no slide "Presentation" do PDF.
export default function Capa() {
  return (
    <section id="capa" className="section capa">
      <div className="capa__stage">
        <Window className="capa__window">
          <div className="capa__text">
            <h1 className="capa__title">
              <svg viewBox="0 0 800 200" role="img" aria-label="Life by Mands">
                <path id="title-arc" d="M0 190 Q400 10 800 190" fill="none" />
                <text>
                  <textPath href="#title-arc" startOffset="50%" textAnchor="middle">
                    LIFE BY MANDS
                  </textPath>
                </text>
              </svg>
            </h1>
            <p className="capa__subtitle">Portfolio</p>
          </div>
          <img className="capa__photo" src={fotoMands} alt="Foto da Mands" width="724" height="1280" />
          <PixelButton onClick={() => scrollToSection('apresentacao')}>Continuar</PixelButton>
        </Window>

        <Star className="deco deco--star-a" />
        <Star className="deco deco--star-b" />
        <Sparkle className="deco deco--sparkle" />
        <BlockSparkle className="deco deco--block" />
        <PixelCursor className="deco deco--cursor" />
        <PixelHeart className="deco deco--heart" />
      </div>
    </section>
  )
}
