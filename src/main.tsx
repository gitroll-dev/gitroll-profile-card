import './index.css'
import React, { useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import satori from 'satori'
import { OGCard } from './OGCard'
import { Rating } from './rating'
import { preset, type Theme } from './theme'
import { decorations, type DecorationName } from './decorations'

/* ------------------------------------------------------------------ */
/*  Font loading                                                       */
/* ------------------------------------------------------------------ */

async function loadFont() {
  const fontResponse = await fetch(new URL('../noto-sans-v27-latin-regular.ttf', import.meta.url).href)
  return await fontResponse.arrayBuffer()
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
    <span className="field-label">{label}</span>
    {children}
  </label>
)

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>{children}</div>
)

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="section-head">
        <span className="section-title">{title}</span>
        {hint && <span className="section-hint">{hint}</span>}
      </div>
      <div className="section-body">{children}</div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Theme tile (mini preview using the theme's own colors)             */
/* ------------------------------------------------------------------ */

function ThemeTile({ name, theme, active, onClick }: { name: string; theme: Theme; active: boolean; onClick: () => void }) {
  return (
    <button className={`theme-tile ${active ? 'active' : ''}`} onClick={onClick} style={{ background: theme.backgroundColor, padding: 0 }} title={name}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', gap: 4, padding: '8px 10px' }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: theme.avatarPlaceholderColor }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: 34, height: 4, borderRadius: 2, background: theme.textColor, opacity: 0.9 }} />
          <div style={{ width: 22, height: 3, borderRadius: 2, background: theme.textColorSecondary }} />
        </div>
        <div style={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
          {Object.values(Rating)
            .slice(0, 3)
            .map((r) => (
              <div key={r} style={{ width: 6, height: 6, borderRadius: 2, background: theme.badgeColors[r] }} />
            ))}
        </div>
      </div>
      <span className="theme-tile-label">{name}</span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Decoration tile (live mini-preview of the overlay)                 */
/* ------------------------------------------------------------------ */

function DecorationTile({
  name,
  label,
  theme,
  active,
  onClick,
  children,
}: {
  name: string
  label: string
  theme: Theme
  active: boolean
  onClick: () => void
  children?: React.ReactNode
}) {
  // Faithful mini-card: the current theme's background with the decoration
  // overlaid. The decoration's own `viewBox` scales it to fill the tile (see
  // the `.deco-preview svg` rule in index.css), so it works at any tile size.
  return (
    <button className={`theme-tile ${active ? 'active' : ''}`} onClick={onClick} style={{ background: theme.backgroundColor, padding: 0 }} title={name}>
      <div className="deco-preview">{children}</div>
      <span className="theme-tile-label">{label}</span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const [svgDataUrl, setSvgDataUrl] = useState<string>('')

  const query = new URLSearchParams(window.location.search)
  const initialTheme = preset[query.get('theme') ?? ''] ?? preset.light
  const initialDecoration = (query.get('decoration') ?? '') in decorations
    ? (query.get('decoration') as DecorationName)
    : null

  const [props, setProps] = useState({
    user: 'GitHub Username',
    avatar: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
    devType: 'Exemplary AI/ML Developer',
    overallScore: '9.05',
    overallScoreCDF: '99',
    overallRating: Rating.S,
    reliabilityScore: 4.37,
    securityScore: 5.0,
    maintainabilityScore: 4.86,
    contributor: true,
    regionalRank: [1, 'TW'] as [number, string],
    campusRank: [1, 'ntnu'] as [number, string],
    theme: initialTheme,
    decoration: initialDecoration as DecorationName | null,
  })

  const activeThemeName = useMemo(
    () => Object.entries(preset).find(([, v]) => v === props.theme)?.[0] || 'light',
    [props.theme],
  )

  useEffect(() => {
    let cancelled = false
    async function generateSVG() {
      const fontData = await loadFont()
      const svg = await satori(OGCard(props), {
        width: 1200,
        height: 675,
        fonts: [{ name: 'sans serif', data: fontData, weight: 700, style: 'normal' }],
      })
      if (cancelled) return
      setSvgDataUrl(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`)
    }
    generateSVG()
    return () => {
      cancelled = true
    }
  }, [props])

  const set = (field: string, value: unknown) => setProps((prev) => ({ ...prev, [field]: value }))

  const selectTheme = (name: string) => set('theme', preset[name])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* ---------------------------------------------------------- */}
      {/*  Header                                                     */}
      {/* ---------------------------------------------------------- */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.85rem 1.25rem',
          borderBottom: '1px solid var(--border)',
          background: 'rgba(11,12,16,0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <img
            src="/gitroll-logo.svg"
            alt="GitRoll"
            style={{ height: 22, width: 'auto', display: 'block', filter: 'invert(1)' }}
          />
          <span style={{ width: 1, height: 22, background: 'var(--border)' }} />
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Card Playground</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>
              {Object.keys(preset).length} themes · live SVG preview
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            className="ghost-btn"
            href="https://github.com/gitroll-dev/gitroll-profile-card"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56v-2.1c-3.34.71-4.04-1.6-4.04-1.6-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.83 1.21 1.83 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.3-5.47-5.8 0-1.28.47-2.33 1.23-3.15-.12-.3-.53-1.5.12-3.13 0 0 1-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.63.24 2.83.12 3.13.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.5-5.49 5.79.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.83.56A12.04 12.04 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
            </svg>
            <span className="hide-sm">GitHub</span>
          </a>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/*  Two-pane body                                             */}
      {/* ---------------------------------------------------------- */}
      <div className="playground-grid">
        {/* === Left: config ===================================== */}
        <aside className="config-pane scroll-area">
          <Section title="Profile">
            <Field label="GitHub username">
              <input className="text-input" value={props.user} onChange={(e) => set('user', e.target.value)} />
            </Field>
            <Field label="Avatar URL">
              <input className="text-input" value={props.avatar} onChange={(e) => set('avatar', e.target.value)} />
            </Field>
            <Field label="Developer type">
              <input className="text-input" value={props.devType} onChange={(e) => set('devType', e.target.value)} />
            </Field>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <span className="field-label">Contributor badge</span>
              <button
                className={`toggle ${props.contributor ? 'on' : ''}`}
                onClick={() => set('contributor', !props.contributor)}
                aria-pressed={props.contributor}
              />
            </div>
          </Section>

          <Section title="Scores">
            <Row>
              <Field label="Overall score (0–10)">
                <input
                  className="text-input"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={props.overallScore}
                  onChange={(e) => set('overallScore', String(Math.min(10, Math.max(0, Number(e.target.value)))))}
                />
              </Field>
              <Field label="Percentile (CDF)">
                <input
                  className="text-input"
                  type="number"
                  min="0"
                  max="100"
                  value={props.overallScoreCDF}
                  onChange={(e) => set('overallScoreCDF', String(Math.min(100, Math.max(0, Number(e.target.value)))))}
                />
              </Field>
            </Row>
            <Field label="Overall rating">
              <select className="select-input" value={props.overallRating} onChange={(e) => set('overallRating', e.target.value)}>
                {Object.values(Rating).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>
            <Row>
              <Field label="Reliability (0–5)">
                <input
                  className="text-input"
                  type="number"
                  step="0.01"
                  min="0"
                  max="5"
                  value={props.reliabilityScore}
                  onChange={(e) => set('reliabilityScore', Math.min(5, Math.max(0, Number(e.target.value))))}
                />
              </Field>
              <Field label="Security (0–5)">
                <input
                  className="text-input"
                  type="number"
                  step="0.01"
                  min="0"
                  max="5"
                  value={props.securityScore}
                  onChange={(e) => set('securityScore', Math.min(5, Math.max(0, Number(e.target.value))))}
                />
              </Field>
            </Row>
            <Field label="Maintainability (0–5)">
              <input
                className="text-input"
                type="number"
                step="0.01"
                min="0"
                max="5"
                value={props.maintainabilityScore}
                onChange={(e) => set('maintainabilityScore', Math.min(5, Math.max(0, Number(e.target.value))))}
              />
            </Field>
          </Section>

          <Section title="Ranks">
            <Field label="Regional rank">
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  className="text-input"
                  type="number"
                  min="1"
                  style={{ width: 90 }}
                  value={props.regionalRank[0]}
                  onChange={(e) => set('regionalRank', [Math.max(1, parseInt(e.target.value) || 1), props.regionalRank[1]])}
                />
                <input
                  className="text-input"
                  type="text"
                  maxLength={2}
                  placeholder="TW"
                  value={props.regionalRank[1]}
                  onChange={(e) => set('regionalRank', [props.regionalRank[0], e.target.value.toUpperCase()])}
                />
              </div>
            </Field>
            <Field label="Campus rank">
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  className="text-input"
                  type="number"
                  min="1"
                  style={{ width: 90 }}
                  value={props.campusRank[0]}
                  onChange={(e) => set('campusRank', [Math.max(1, parseInt(e.target.value) || 1), props.campusRank[1]])}
                />
                <input
                  className="text-input"
                  type="text"
                  maxLength={10}
                  placeholder="ntnu"
                  value={props.campusRank[1]}
                  onChange={(e) => set('campusRank', [props.campusRank[0], e.target.value.toLowerCase()])}
                />
              </div>
            </Field>
          </Section>

          <Section title="Decoration" hint="works on any theme">
            <div className="theme-grid">
              <DecorationTile name="none" label="None" theme={props.theme} active={!props.decoration} onClick={() => set('decoration', null)} />
              {(Object.keys(decorations) as DecorationName[]).map((name) => {
                const Deco = decorations[name]
                return (
                  <DecorationTile
                    key={name}
                    name={name}
                    label={name}
                    theme={props.theme}
                    active={props.decoration === name}
                    onClick={() => set('decoration', name)}
                  >
                    <Deco color={props.theme.barForeground} />
                  </DecorationTile>
                )
              })}
            </div>
          </Section>

          <Section title="Theme" hint={`${Object.keys(preset).length} presets`}>
            <div className="theme-grid">
              {Object.entries(preset).map(([name, theme]) => (
                <ThemeTile key={name} name={name} theme={theme} active={activeThemeName === name} onClick={() => selectTheme(name)} />
              ))}
            </div>
          </Section>
        </aside>

        {/* === Right: preview =================================== */}
        <main className="preview-pane">
          <div className="preview-card">
            <header className="preview-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <span className="live-dot" />
                <span className="preview-eyebrow">Live preview</span>
              </div>
              <span className="preview-meta">1200 × 675</span>
            </header>

            <div className="preview-body">
              <div className="preview-frame">
                {svgDataUrl ? (
                  <img src={svgDataUrl} alt="Developer card preview" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-faint)' }}>
                    Rendering…
                  </div>
                )}
              </div>
            </div>

            <footer className="preview-foot">
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="theme-pill">
                  <span className="theme-pill-swatch" style={{ background: props.theme.backgroundColor }} />
                  {activeThemeName}
                </div>
                {props.decoration && (
                  <div className="theme-pill">
                    <span className="theme-pill-swatch" style={{ background: props.theme.barForeground }} />
                    {props.decoration}
                  </div>
                )}
              </div>
              <a
                className="ghost-btn primary"
                href={svgDataUrl || undefined}
                download={`gitroll-card-${activeThemeName}${props.decoration ? `-${props.decoration}` : ''}.svg`}
                style={{ textDecoration: 'none', pointerEvents: svgDataUrl ? 'auto' : 'none', opacity: svgDataUrl ? 1 : 0.5 }}
              >
                ↓ Download SVG
              </a>
            </footer>
          </div>
        </main>
      </div>

      <style>{`
        .playground-grid {
          display: grid;
          grid-template-columns: minmax(360px, 440px) 1fr;
          align-items: start;
          flex: 1;
          min-height: 0;
        }
        .config-pane {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          padding: 1.5rem 1.4rem 3rem;
          border-right: 1px solid var(--border);
          height: calc(100vh - 64px);
          overflow-y: auto;
          position: sticky;
          top: 64px;
        }
        .preview-pane {
          padding: 1.5rem;
          position: sticky;
          top: 64px;
        }
        .preview-card {
          background: var(--bg-elev);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .preview-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.1rem;
          border-bottom: 1px solid var(--border-soft);
        }
        .preview-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--text-soft);
        }
        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          animation: live-pulse 2s ease-out infinite;
        }
        @keyframes live-pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
          70% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .preview-meta {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-faint);
          font-variant-numeric: tabular-nums;
        }
        .preview-body {
          padding: 1.1rem;
        }
        .preview-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          overflow: hidden;
          background:
            repeating-conic-gradient(#101218 0% 25%, #0c0e13 0% 50%) 50% / 24px 24px;
        }
        .preview-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.85rem 1.1rem;
          border-top: 1px solid var(--border-soft);
        }
        .theme-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-soft);
        }
        .theme-pill-swatch {
          width: 16px;
          height: 16px;
          border-radius: 5px;
          border: 1px solid var(--border);
        }
        .theme-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
          gap: 0.6rem;
        }
        @media (max-width: 900px) {
          .playground-grid {
            grid-template-columns: 1fr;
          }
          .config-pane {
            height: auto;
            position: static;
            border-right: none;
            order: 2;
          }
          .preview-pane {
            position: static;
            order: 1;
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>
    </div>
  )
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
