// Enfeites do PDF desenhados em SVG: estrelas, brilhos, cursor e corações pixelados.

function PixelArt({ rows, palette, className, style }) {
  const width = rows[0].length
  const height = rows.length
  return (
    <svg
      className={className}
      style={style}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rows.flatMap((row, y) =>
        [...row].map((char, x) =>
          palette[char] ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={palette[char]} /> : null,
        ),
      )}
    </svg>
  )
}

const CURSOR = [
  'B...........',
  'BB..........',
  'BWB.........',
  'BWWB........',
  'BWWWB.......',
  'BWWWWB......',
  'BWWWWWB.....',
  'BWWWWWWB....',
  'BWWWWWWWB...',
  'BWWWWWWWWB..',
  'BWWWWWWWWWB.',
  'BWWWWWWBBBBB',
  'BWWWBWWB....',
  'BWWB.BWWB...',
  'BWB..BWWB...',
  'BB....BWWB..',
  'B.....BWWB..',
  '.......BWWB.',
  '........BB..',
]

const HEART = [
  '..BBB...BBB..',
  '.BLLLB.BDDDB.',
  'BLWLLLBLLDDDB',
  'BLLLLLLLLLDDB',
  'BLLLLLLLLLDDB',
  '.BLLLLLLLDDB.',
  '..BLLLLLDDB..',
  '...BLLLDDB...',
  '....BLDDB....',
  '.....BDB.....',
  '......B......',
]

export function PixelCursor(props) {
  return <PixelArt rows={CURSOR} palette={{ B: '#111', W: '#d4d4d6' }} {...props} />
}

export function PixelHeart(props) {
  return <PixelArt rows={HEART} palette={{ B: '#5b4fa8', L: '#e07a9c', D: '#c2456f', W: '#ffd2e0' }} {...props} />
}

export function Sparkle({ fill = 'var(--pink-deep)', ...props }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <path
        d="M50 0C54 36 64 46 100 50C64 54 54 64 50 100C46 64 36 54 0 50C36 46 46 36 50 0Z"
        fill={fill}
        stroke="#7a4b5c"
        strokeWidth="1.5"
      />
      <path d="M50 14C52 38 58 44 78 48C58 46 52 40 50 14Z" fill="#fff" opacity="0.55" />
    </svg>
  )
}

export function FourPointStar(props) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <path d="M50 0C52 40 60 48 100 50C60 52 52 60 50 100C48 60 40 52 0 50C40 48 48 40 50 0Z" fill="#111" />
    </svg>
  )
}

export function Star(props) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <path
        d="M50 6L62 36L94 38L69 58L78 90L50 72L22 90L31 58L6 38L38 36Z"
        fill="#fbe3ea"
        stroke="var(--hot-pink)"
        strokeWidth="9"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BlockSparkle(props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" shapeRendering="crispEdges" {...props}>
      <path
        d="M54 4h12v30h8v12h12v8h30v12H86v8H74v12h-8v30H54V86h-8V74H34v-8H4V54h30v-8h12V34h8z"
        fill="var(--blue-deep)"
        stroke="var(--navy)"
        strokeWidth="2"
      />
      <path d="M57 46h6v11h11v6H63v11h-6V63H46v-6h11z" fill="var(--pink)" />
    </svg>
  )
}
