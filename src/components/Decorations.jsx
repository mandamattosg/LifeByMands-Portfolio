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

// Ícones de traço para os temas (livro, ciência, engenharia, tecnologia).
function LineIcon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      fill="none"
      stroke="var(--navy)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M24 12C19 8 11 8 5 10v26c6-2 14-2 19 2 5-4 13-4 19-2V10c-6-2-14-2-19 2Z" fill="#fff" />
      <path d="M24 12v26" />
    </LineIcon>
  )
}

export function AtomIcon(props) {
  return (
    <LineIcon {...props}>
      <ellipse cx="24" cy="24" rx="20" ry="8" />
      <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
      <circle cx="24" cy="24" r="3" fill="var(--hot-pink)" stroke="none" />
    </LineIcon>
  )
}

export function GearIcon(props) {
  return (
    <LineIcon {...props}>
      <path
        d="M21 4h6l1 6 4 2 5-4 4 4-4 5 2 4 6 1v6l-6 1-2 4 4 5-4 4-5-4-4 2-1 6h-6l-1-6-4-2-5 4-4-4 4-5-2-4-6-1v-6l6-1 2-4-4-5 4-4 5 4 4-2Z"
        fill="#fff"
      />
      <circle cx="24" cy="24" r="6" />
    </LineIcon>
  )
}

export function BoltIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M27 4 9 27h13l-3 17 20-25H26Z" fill="var(--yellow, #ffe066)" />
    </LineIcon>
  )
}

export function NewspaperIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M8 8h28v30a4 4 0 0 0 4 4H12a4 4 0 0 1-4-4Z" fill="#fff" />
      <path d="M36 18h6v20a4 4 0 0 1-8 0" fill="#fff" />
      <path d="M14 15h16M14 22h16M14 29h10" />
    </LineIcon>
  )
}

export function KindleIcon(props) {
  return (
    <LineIcon {...props}>
      <rect x="10" y="4" width="28" height="40" rx="4" fill="#fff" />
      <rect x="15" y="9" width="18" height="24" fill="var(--pink)" />
      <path d="M19 16h10M19 21h10M19 26h6" strokeWidth="2" />
      <path d="M21 39h6" />
    </LineIcon>
  )
}

export function CameraIcon(props) {
  return (
    <LineIcon {...props}>
      <rect x="6" y="6" width="36" height="36" rx="10" fill="#fff" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="34" cy="14" r="1.5" fill="var(--navy)" stroke="none" />
    </LineIcon>
  )
}

export function NoteIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M20 34V8c2 6 8 9 14 9" />
      <circle cx="14" cy="34" r="6" fill="#fff" />
    </LineIcon>
  )
}

export function PlayIcon(props) {
  return (
    <LineIcon {...props}>
      <rect x="4" y="10" width="40" height="28" rx="9" fill="#fff" />
      <path d="M20 18v12l10-6Z" fill="var(--hot-pink)" />
    </LineIcon>
  )
}

export function MailIcon(props) {
  return (
    <LineIcon {...props}>
      <rect x="5" y="10" width="38" height="28" rx="4" fill="#fff" />
      <path d="m6 12 18 14 18-14" />
    </LineIcon>
  )
}

export function ClapperIcon(props) {
  return (
    <LineIcon {...props}>
      <rect x="6" y="20" width="36" height="22" rx="2" fill="#fff" />
      <path d="M6 20 5 12l34-6 1 8Z" fill="var(--navy)" />
      <path d="m13 11 4 6m6-8 4 6m6-8 4 6" stroke="#fff" />
    </LineIcon>
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
