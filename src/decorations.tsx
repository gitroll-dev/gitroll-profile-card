interface KawaiiCatDecorationProps {
  color: string;
}
interface RetroThemeDecorationProps {
  color: string;
}
interface DarkEmeraldDecorationProps {
  color: string;
  rating: string;
}
export function KawaiiCatDecoration({ color }: KawaiiCatDecorationProps) {
  return (
    <svg
      width='1200'
      height='675'
      viewBox='0 0 1200 675'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <g opacity='0.9'>
        {/* Paw prints trail across bottom & top */}
        {[200, 400, 600, 800, 1000].map((x, i) => (
          <g key={i} transform={`translate(${x}, 60) scale(0.3)`}>
            <circle cx='0' cy='0' r='15' fill={color} />
            <circle cx='-20' cy='-15' r='12' fill={color} />
            <circle cx='20' cy='-15' r='12' fill={color} />
          </g>
        ))}
        {[200, 400, 600, 800, 1000].map((x, i) => (
          <g key={i} transform={`translate(${x}, 620) scale(0.3)`}>
            <circle cx='0' cy='0' r='15' fill={color} />
            <circle cx='-20' cy='-15' r='12' fill={color} />
            <circle cx='20' cy='-15' r='12' fill={color} />
          </g>
        ))}

        {/* Stars scattered around */}
        {[
          [150, 200],
          [950, 150],
          [1050, 300],
          [850, 450],
        ].map(([x, y], i) => (
          <path
            key={i}
            transform={`translate(${x}, ${y}) scale(0.6)`}
            d='M10 0 L13 7 L21 7 L15 13 L17 21 L10 17 L3 21 L5 13 L-1 7 L7 7Z'
            fill={color}
          />
        ))}

        {/* Decorative borders */}
        <path
          d='M80 20 H1120 M80 655 H1120'
          stroke={color}
          strokeWidth='3'
          strokeDasharray='8 8'
        />
      </g>
    </svg>
  )
}

export function RetroThemeDecoration({ color }: RetroThemeDecorationProps) {
  return (
    <svg
      width='1200'
      height='675'
      viewBox='0 0 1200 675'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      {/* Retro-style grid background */}
      <defs>
        <pattern
          id='retro-grid'
          width='40'
          height='40'
          patternUnits='userSpaceOnUse'
        >
          <path
            d='M 40 0 L 0 0 0 40'
            fill='none'
            stroke={color}
            strokeWidth='0.5'
            opacity='0.8'
          />
        </pattern>
      </defs>
      <rect width='1200' height='675' fill='url(#retro-grid)' />
      {/* Stars */}
      <g fill={color} opacity='0.5'>
        {[
          // Stars on Top-left of logo
          [90, 60, 0.8],
          [66, 69, 0.8],
          [58, 95, 0.8],
        ].map(([x, y], i) => (
          <path
            key={i}
            transform={`translate(${x}, ${y}) scale(0.8)`}
            d='M10 0 L13 7 L21 7 L15 13 L17 21 L10 17 L3 21 L5 13 L-1 7 L7 7Z'
            fill={color}
          />
        ))}
        {/* Dotted border lines */}
        <path
          d='M80 20 H1120 M80 655 H1120'
          stroke={color}
          strokeWidth='2'
          strokeDasharray='6 6'
          opacity='0.5'
        />
      </g>
    </svg>
  )
}

export function DarkEmeraldDecoration({ color, rating }: DarkEmeraldDecorationProps) {
  let endColor=''
  switch(rating) {
    case 'S':
      endColor = '#1e1b4b'
      break
    case 'A':
      endColor = '#052e16'
      break
    case 'B':
      endColor = '#1a2e05'
      break
    case 'C':
      endColor = '#431407'
      break
    case 'D':
      endColor = '#450a0a'
      break
    default:
      endColor = '#030712'
      break
  }
  return (
    <svg
      width='80'
      height='80'
      viewBox='0 0 80 80'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        position: 'absolute'
      }}
    >
      <defs>
        <radialGradient id='shine' cx='0.3' cy='0.3' r='0.8'>
          <stop offset='0%' stop-color={color} />
          <stop offset='100%' stop-color={endColor} />
        </radialGradient>
        <pattern
          id='retro-grid'
          width='20'
          height='20'
          patternUnits='userSpaceOnUse'
        >
          <path
            d='M 20 0 L 0 0 0 20'
            fill='none'
            stroke='white'
            stroke-width='0.5'
            opacity='0.2'
          />
        </pattern>
      </defs>
      <rect width='80' height='80' fill='url(#shine)' rx='1000' />
      <rect width='80' height='80' fill='url(#retro-grid)' rx='1000' />
      <g fill='white' opacity='0.4'>
        <path
          transform='translate(20, 20) scale(0.3)'
          d='M10 0 L13 7 L21 7 L15 13 L17 21 L10 17 L3 21 L5 13 L-1 7 L7 7Z'
        />
        <path
          transform='translate(60, 25) scale(0.25)'
          d='M10 0 L13 7 L21 7 L15 13 L17 21 L10 17 L3 21 L5 13 L-1 7 L7 7Z'
        />
      </g>
    </svg>
  )
}
