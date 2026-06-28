/**
 * Decorations are full-card SVG overlays (1200×675) that sit behind the card
 * content. They are independent of themes: any decoration can be applied to
 * any theme via the `decoration` prop / `?decoration=` query param.
 *
 * To add one: write a component taking {@link DecorationProps}, then register
 * it in {@link decorations} under the key used by the param.
 */

export interface DecorationProps {
  /** Accent color for the decoration, typically the theme's `barForeground`. */
  color: string;
}

/** Paw prints, stars and a dashed border. */
export function KawaiiCatDecoration({ color }: DecorationProps) {
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

/** Retro grid background with stars and a dashed border. */
export function RetroThemeDecoration({ color }: DecorationProps) {
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

/** Diagonal confetti dashes scattered across the card. */
export function ConfettiDecoration({ color }: DecorationProps) {
  const pieces = [
    [140, 120, 18], [320, 80, -32], [520, 150, 12], [760, 90, 40],
    [980, 130, -18], [1080, 260, 28], [90, 320, -40], [1120, 440, 16],
    [180, 540, 34], [430, 600, -22], [690, 560, 20], [930, 600, -36],
  ]
  return (
    <svg
      width='1200'
      height='675'
      viewBox='0 0 1200 675'
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
    >
      <g opacity='0.5'>
        {pieces.map(([x, y, r], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width='10'
            height='26'
            rx='5'
            fill={color}
            transform={`rotate(${r} ${x + 5} ${y + 13})`}
          />
        ))}
      </g>
    </svg>
  )
}

/** Soft floating bubbles of varying size. */
export function BubblesDecoration({ color }: DecorationProps) {
  const bubbles = [
    [130, 140, 46], [300, 520, 70], [560, 110, 32], [620, 600, 24],
    [840, 180, 58], [1030, 120, 38], [1100, 470, 64], [200, 360, 20],
    [980, 560, 28], [430, 250, 16],
  ]
  return (
    <svg
      width='1200'
      height='675'
      viewBox='0 0 1200 675'
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
    >
      <g fill='none' stroke={color} strokeWidth='2' opacity='0.35'>
        {bubbles.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  )
}

/** Tech circuit-board traces with node dots. */
export function CircuitDecoration({ color }: DecorationProps) {
  return (
    <svg
      width='1200'
      height='675'
      viewBox='0 0 1200 675'
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
    >
      <g stroke={color} strokeWidth='2' fill='none' opacity='0.28'>
        <path d='M0 110 H220 L260 150 H520' />
        <path d='M1200 90 H980 L940 130 H720' />
        <path d='M0 560 H180 L220 520 H460' />
        <path d='M1200 600 H1000 L960 560 H780' />
        <path d='M600 0 V160 M600 520 V675' />
        <path d='M320 0 V70 L360 110 V200' />
        <path d='M880 675 V600 L840 560 V470' />
      </g>
      <g fill={color} opacity='0.5'>
        {[[520, 150], [720, 130], [460, 520], [780, 560], [600, 160], [600, 520], [360, 200], [840, 470]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r='6' />
        ))}
      </g>
    </svg>
  )
}

/** Concentric corner rays radiating from the top-left. */
export function SunburstDecoration({ color }: DecorationProps) {
  return (
    <svg
      width='1200'
      height='675'
      viewBox='0 0 1200 675'
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
    >
      <g stroke={color} fill='none' opacity='0.2'>
        {[120, 240, 360, 480, 600].map((r, i) => (
          <circle key={i} cx='0' cy='0' r={r} strokeWidth='2' />
        ))}
      </g>
      <g stroke={color} strokeWidth='2' opacity='0.18'>
        {[0, 12, 24, 36, 48, 60, 72, 84].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          return <line key={i} x1='0' y1='0' x2={680 * Math.cos(rad)} y2={680 * Math.sin(rad)} />
        })}
      </g>
    </svg>
  )
}

/** Registry of decorations, keyed by the `decoration` param value. */
export const decorations = {
  kawaiiCat: KawaiiCatDecoration,
  retro: RetroThemeDecoration,
  confetti: ConfettiDecoration,
  bubbles: BubblesDecoration,
  circuit: CircuitDecoration,
  sunburst: SunburstDecoration,
} satisfies Record<string, (props: DecorationProps) => JSX.Element>

/** Valid `decoration` values, e.g. `'kawaiiCat' | 'retro'`. */
export type DecorationName = keyof typeof decorations
