import './index.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import satori from 'satori'
import { OGCard } from './OGCard'
import { Rating } from './rating'
import { preset, type Theme } from './theme'


const InputGroup = ({ children }: { children: React.ReactNode }) => <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>{children}</div>

const inputStyle = {
  padding: '0.5rem',
  borderRadius: '6px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  ':focus': {
    borderColor: '#0066ff',
  },
}

const selectStyle = {
  ...inputStyle,
  backgroundColor: 'white',
  cursor: 'pointer',
}

async function loadFont() {
  const fontResponse = await fetch('/noto-sans-v27-latin-regular.ttf')
  return await fontResponse.arrayBuffer()
}

const ColorInput = ({ value, onChange }: { label: string; value: string; onChange: (value: string) => void }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '40px',
        height: '40px',
        padding: '0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    />
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={{ ...inputStyle, flex: 1 }} />
  </div>
)

function App() {
  const [, setSvg] = useState<string>('')
  const [svgDataUrl, setSvgDataUrl] = useState<string>('')
  const [isCustomTheme, setIsCustomTheme] = useState(false)
  const [customTheme, setCustomTheme] = useState<Theme>({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    textColorSecondary: 'rgba(0, 0, 0, 0.6)',
    badgeColors: {
      [Rating.S]: '#c4b5fd',
      [Rating.A]: '#bbf7d0',
      [Rating.B]: '#d9f99d',
      [Rating.C]: '#fef08a',
      [Rating.D]: '#fed7aa',
      [Rating.E]: '#fecaca',
    },
    badgeTextColors: {
      [Rating.S]: '#000000',
      [Rating.A]: '#000000',
      [Rating.B]: '#000000',
      [Rating.C]: '#000000',
      [Rating.D]: '#000000',
      [Rating.E]: '#000000',
    },
    barBackground: '#F4F4F5',
    barForeground: '#18181B',
    borderColor: '#E4E4E7',
    avatarPlaceholderColor: '#9ca3af',
    logoColor: '#030303',
  })

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
    theme: preset.light,
  })

  useEffect(() => {
    async function generateSVG() {
      const fontData = await loadFont()

      const svg = await satori(OGCard(props), {
        width: 1200,
        height: 675,
        fonts: [
          {
            name: 'sans serif',
            data: fontData,
            weight: 700,
            style: 'normal',
          },
        ],
      })

      const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
      setSvgDataUrl(dataUrl)
      setSvg(svg)
    }

    generateSVG()
  }, [props])

  const handleInputChange = (field: string, value: unknown) => {
    setProps((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div
      style={{
        padding: '1rem',
        maxWidth: '1400px',
        margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          marginBottom: '1.5rem',
          color: '#1a1a1a',
        }}
      >
        GitRoll Dev Card Playground
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              color: '#2d2d2d',
            }}
          >
            Customize Your Card
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <InputGroup>
              <label>Username</label>
              <input type="text" value={props.user} onChange={(e) => handleInputChange('user', e.target.value)} style={inputStyle} />
            </InputGroup>

            <InputGroup>
              <label>Dev Type</label>
              <input type="text" value={props.devType} onChange={(e) => handleInputChange('devType', e.target.value)} style={inputStyle} />
            </InputGroup>

            <InputGroup>
              <label>Overall Score</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={props.overallScore}
                onChange={(e) => {
                  const value = Math.min(10, Math.max(0, Number(e.target.value)))
                  handleInputChange('overallScore', value.toString())
                }}
                style={inputStyle}
              />
            </InputGroup>

            <InputGroup>
              <label>Overall Score CDF</label>
              <input
                type="number"
                min="0"
                max="100"
                value={props.overallScoreCDF}
                onChange={(e) => {
                  const value = Math.min(100, Math.max(0, Number(e.target.value)))
                  handleInputChange('overallScoreCDF', value.toString())
                }}
                style={inputStyle}
              />
            </InputGroup>

            <InputGroup>
              <label>Overall Rating</label>
              <select value={props.overallRating} onChange={(e) => handleInputChange('overallRating', e.target.value)} style={selectStyle}>
                {Object.values(Rating).map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </InputGroup>

            <InputGroup>
              <label>Reliability Score</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="5"
                value={props.reliabilityScore}
                onChange={(e) => {
                  const value = Math.min(5, Math.max(0, Number(e.target.value)))
                  handleInputChange('reliabilityScore', value)
                }}
                style={inputStyle}
              />
            </InputGroup>

            <InputGroup>
              <label>Security Score</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="5"
                value={props.securityScore}
                onChange={(e) => {
                  const value = Math.min(5, Math.max(0, Number(e.target.value)))
                  handleInputChange('securityScore', value)
                }}
                style={inputStyle}
              />
            </InputGroup>

            <InputGroup>
              <label>Maintainability Score</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="5"
                value={props.maintainabilityScore}
                onChange={(e) => {
                  const value = Math.min(5, Math.max(0, Number(e.target.value)))
                  handleInputChange('maintainabilityScore', value)
                }}
                style={inputStyle}
              />
            </InputGroup>

            <InputGroup>
              <label>Regional Rank</label>
              <div style={{ display: 'flex', gap: '4px' }}>
                <input
                  type="number"
                  min="1"
                  style={{ ...inputStyle, width: '60px' }}
                  value={props.regionalRank[0]}
                  onChange={(e) => {
                    const value = Math.max(1, parseInt(e.target.value))
                    handleInputChange('regionalRank', [value, props.regionalRank[1]])
                  }}
                />
                <input
                  type="text"
                  maxLength={2}
                  style={{ ...inputStyle, width: '60px' }}
                  value={props.regionalRank[1]}
                  onChange={(e) => handleInputChange('regionalRank', [props.regionalRank[0], e.target.value.toUpperCase()])}
                />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Campus Rank</label>
              <div style={{ display: 'flex', gap: '4px' }}>
                <input
                  type="number"
                  min="1"
                  style={{ ...inputStyle, width: '60px' }}
                  value={props.campusRank[0]}
                  onChange={(e) => {
                    const value = Math.max(1, parseInt(e.target.value))
                    handleInputChange('campusRank', [value, props.campusRank[1]])
                  }}
                />
                <input
                  type="text"
                  maxLength={10}
                  style={{ ...inputStyle, width: '60px' }}
                  value={props.campusRank[1]}
                  onChange={(e) => handleInputChange('campusRank', [props.campusRank[0], e.target.value.toLowerCase()])}
                />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Theme</label>
              <select
                value={isCustomTheme ? 'custom' : Object.entries(preset).find(([, v]) => v === props.theme)?.[0] || 'light'}
                onChange={(e) => {
                  const themeName = e.target.value
                  if (themeName === 'custom') {
                    setIsCustomTheme(true)
                    handleInputChange('theme', customTheme)
                  } else {
                    setIsCustomTheme(false)
                    handleInputChange('theme', preset[themeName as keyof typeof preset])
                  }
                }}
                style={selectStyle}
              >
                {Object.keys(preset).map((themeName) => (
                  <option key={themeName} value={themeName}>
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                  </option>
                ))}
                <option value="custom">Custom</option>
              </select>
            </InputGroup>

            <InputGroup>
              <label>Contributor</label>
              <input
                type="checkbox"
                checked={props.contributor}
                onChange={(e) => handleInputChange('contributor', e.target.checked)}
                style={{
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                }}
              />
            </InputGroup>

            {isCustomTheme && (
              <>
                <InputGroup>
                  <label>Background Color</label>
                  <ColorInput
                    label="Background"
                    value={customTheme.backgroundColor}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, backgroundColor: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Text Color</label>
                  <ColorInput
                    label="Text"
                    value={customTheme.textColor}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, textColor: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Secondary Text Color</label>
                  <ColorInput
                    label="Secondary Text"
                    value={customTheme.textColorSecondary}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, textColorSecondary: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Bar Background</label>
                  <ColorInput
                    label="Bar Background"
                    value={customTheme.barBackground}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, barBackground: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Bar Foreground</label>
                  <ColorInput
                    label="Bar Foreground"
                    value={customTheme.barForeground}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, barForeground: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Border Color</label>
                  <ColorInput
                    label="Border"
                    value={customTheme.borderColor}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, borderColor: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Avatar Placeholder Color</label>
                  <ColorInput
                    label="Avatar Placeholder"
                    value={customTheme.avatarPlaceholderColor}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, avatarPlaceholderColor: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Logo Color</label>
                  <ColorInput
                    label="Logo"
                    value={customTheme.logoColor}
                    onChange={(value) => {
                      const updatedTheme = { ...customTheme, logoColor: value }
                      setCustomTheme(updatedTheme)
                      handleInputChange('theme', updatedTheme)
                    }}
                  />
                </InputGroup>

                {Object.values(Rating).map((rating) => (
                  <React.Fragment key={rating}>
                    <InputGroup>
                      <label>{`${rating} Badge Color`}</label>
                      <ColorInput
                        label={`Badge ${rating}`}
                        value={customTheme.badgeColors[rating]}
                        onChange={(value) => {
                          const updatedTheme = {
                            ...customTheme,
                            badgeColors: {
                              ...customTheme.badgeColors,
                              [rating]: value,
                            },
                          }
                          setCustomTheme(updatedTheme)
                          handleInputChange('theme', updatedTheme)
                        }}
                      />
                    </InputGroup>

                    <InputGroup>
                      <label>{`${rating} Badge Text Color`}</label>
                      <ColorInput
                        label={`Badge Text ${rating}`}
                        value={customTheme.badgeTextColors[rating]}
                        onChange={(value) => {
                          const updatedTheme = {
                            ...customTheme,
                            badgeTextColors: {
                              ...customTheme.badgeTextColors,
                              [rating]: value,
                            },
                          }
                          setCustomTheme(updatedTheme)
                          handleInputChange('theme', updatedTheme)
                        }}
                      />
                    </InputGroup>
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>

        <div
          style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflowX: 'auto',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              marginBottom: '1.5rem',
              color: '#2d2d2d',
            }}
          >
            Preview
          </h2>
          <div
            style={{
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              aspectRatio: '16/9',
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              overflow: 'hidden',
              margin: 'auto',
            }}
          >
            {svgDataUrl ? (
              <img
                src={svgDataUrl}
                alt="Developer Card Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: '#666',
                }}
              >
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
