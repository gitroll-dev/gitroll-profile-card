interface KawaiiDecorationsProps {
  color: string
}

export function KawaiiDecorations({ color }: KawaiiDecorationsProps) {
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
