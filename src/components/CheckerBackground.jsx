// Xadrez azul e branco "derretido", como o fundo do PDF.
// Um padrão quadriculado comum é distorcido por ruído (feTurbulence + feDisplacementMap).
export default function CheckerBackground() {
  return (
    <svg className="checker-bg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 900">
      <defs>
        <pattern id="checker" width="180" height="180" patternUnits="userSpaceOnUse">
          <rect width="180" height="180" fill="var(--white)" />
          <rect width="90" height="90" fill="var(--blue)" />
          <rect x="90" y="90" width="90" height="90" fill="var(--blue)" />
        </pattern>
        <filter id="wavy" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.0018 0.0024" numOctaves="1" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="260" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect x="-200" y="-200" width="2000" height="1300" fill="url(#checker)" filter="url(#wavy)" />
    </svg>
  )
}
