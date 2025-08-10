import { Rating } from './rating'
import { preset, type Theme } from './theme'
import { GitRollLogo } from './logo'
import { WatchdogGradientDecoration, DarkEmeraldDecoration, KawaiiCatDecoration, RetroThemeDecoration } from './decorations'


export interface OGCardProps {
  user: string
  avatar: string | null
  devType: string | null
  overallScore: string
  overallScoreCDF: string
  overallRating: Rating
  reliabilityScore: number
  securityScore: number
  maintainabilityScore: number
  contributor: boolean
  regionalRank?: [ string | number, string ] | null
  campusRank?: [ string | number, string ] | null
  theme?: Theme
}

export function OGCard({
  user, avatar, devType,
  overallScore, overallScoreCDF, overallRating,
  reliabilityScore, securityScore, maintainabilityScore,
  contributor,
  regionalRank, campusRank,
  theme = preset.light,
}: OGCardProps) {
  const bg = theme.badgeColors[overallRating] ?? theme.badgeColors[Rating.E]
  return (
    <div
      id='card-container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 80,
        width: '100%',
        height: '100%',
        backgroundColor: theme.backgroundColor,
        backgroundImage: theme === preset.darkEmerald || theme === preset.WatchdogGradient ? theme.backgroundColor : '',
        color: theme.textColor,
        borderRadius: '10px',
      }}
    >
      {theme === preset.kawaiiCat && (
        <KawaiiCatDecoration color={theme.barForeground} />
      )}
      {theme === preset.retro && (
        <RetroThemeDecoration color={theme.barForeground} />
      )}
      <GitRollLogo fill={theme.logoColor} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 16,
          alignItems: 'center',
          gap: 24,
        }}
      >
        {avatar ? (
          <img
            id='user-avatar'
            src={avatar}
            alt=''
            width={100}
            height={100}
            style={{ borderRadius: 1000 }}
          />
        ) : (
          <div
            id='user-avatar'
            style={{
              width: 100,
              height: 100,
              borderRadius: 1000,
              backgroundColor: theme.avatarPlaceholderColor,
            }}
          ></div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            id='user-name'
            style={{
              fontSize: 52,
              lineHeight: 0.8,
              marginTop: 16,
            }}
          >
            {user}
          </div>
          <p
            id='user-type'
            style={{
              fontSize: 32,
              color: theme.textColorSecondary,
            }}
          >
            {devType}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 16,
          gap: 64,
        }}
      >
        <div
          id='overall-score-section'
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            width: 250,
          }}
        >
          <div
            id='overall-rating-label'
            style={{
              fontSize: 36,
            }}
          >
            Overall Rating
          </div>
          <div
            id='overall-score-container'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              id='overall-rating-badge'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                height: 80,
                backgroundColor: bg,
                borderRadius: 1000,
                position: 'relative'
              }}
            >
              {theme === preset.darkEmerald && (<DarkEmeraldDecoration color={bg} rating={overallRating}/>) || theme === preset.WatchdogGradient && (<WatchdogGradientDecoration color={bg} rating={overallRating}/>)}
              <div
                id='overall-rating'
                style={{
                  fontSize: 56,
                  fontWeight: 700,
                  color: theme.badgeTextColors[overallRating],
                }}
              >
                {overallRating}
              </div>
            </div>
            <div
              id='overall-score'
              style={{
                fontSize: 60,
              }}
            >
              {overallScore}
            </div>
          </div>
          <div
            id='overall-percentile'
            style={{
              fontSize: 28,
              display: 'flex',
            }}
          >
            <span style={{ opacity: 0.6 }}>Above</span>
            <span
              id='overall-percentile-value'
              style={{ marginLeft: 24, marginRight: 16 }}
            >
              {overallScoreCDF}%
            </span>
            <span style={{ opacity: 0.6 }}> of people</span>
          </div>
        </div>
        <div
          id='code-quality-section'
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div
            id='code-quality-label'
            style={{
              fontSize: 36,
            }}
          >
            Code Quality
          </div>
          <div
            id='reliability-score'
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 28,
                width: 200,
              }}
            >
              Reliability
            </div>
            <div
              className='bar-background'
              style={{
                display: 'flex',
                backgroundColor: theme.barBackground,
                width: 460,
                height: 24,
                borderRadius: 100,
                position: 'relative',
              }}
            >
              <div
                className='bar-foreground'
                style={
                  {
                    backgroundColor: theme.barForeground,
                    width: (reliabilityScore * 460) / 5,
                    height: 24,
                    position: 'absolute',
                    borderRadius: 100,
                    '--final-width': `${(reliabilityScore * 460) / 5}px`,
                  } as React.CSSProperties
                }
              ></div>
            </div>
          </div>
          <div
            id='security-score'
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 28,
                width: 200,
              }}
            >
              Security
            </div>
            <div
              className='bar-background'
              style={{
                display: 'flex',
                backgroundColor: theme.barBackground,
                width: 460,
                height: 24,
                borderRadius: 100,
                position: 'relative',
              }}
            >
              <div
                className='bar-foreground'
                style={
                  {
                    backgroundColor: theme.barForeground,
                    width: (securityScore * 460) / 5,
                    height: 24,
                    position: 'absolute',
                    borderRadius: 100,
                    '--final-width': `${(securityScore * 460) / 5}px`,
                  } as React.CSSProperties
                }
              ></div>
            </div>
          </div>
          <div
            id='maintainability-score'
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 28,
                width: 200,
              }}
            >
              Maintainability
            </div>
            <div
              className='bar-background'
              style={{
                display: 'flex',
                backgroundColor: theme.barBackground,
                width: 460,
                height: 24,
                borderRadius: 100,
                position: 'relative',
              }}
            >
              <div
                className='bar-foreground'
                style={
                  {
                    backgroundColor: theme.barForeground,
                    width: (maintainabilityScore * 460) / 5,
                    height: 24,
                    position: 'absolute',
                    borderRadius: 100,
                    '--final-width': `${(maintainabilityScore * 460) / 5}px`,
                  } as React.CSSProperties
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='badges-section'
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 0,
          gap: 16,
        }}
      >
        {contributor && (
          <div
            id='contributor-badge'
            className='badge'
            style={{
              borderWidth: '1px',
              borderColor: theme.borderColor,
              borderRadius: 8,
              padding: '4px 16px',
              fontSize: 24,
            }}
          >
            Open-source contributor
          </div>
        )}
        {regionalRank && (
          <div
            id='regional-rank-badge'
            className='badge'
            style={{
              borderWidth: '1px',
              borderColor: theme.borderColor,
              borderRadius: 8,
              padding: '4px 16px',
              fontSize: 24,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            Top {regionalRank[0]}% in {regionalRank[1]}
          </div>
        )}
        {campusRank && (
          <div
            id='campus-rank-badge'
            className='badge'
            style={{
              borderWidth: '1px',
              borderColor: theme.borderColor,
              borderRadius: 8,
              padding: '4px 16px',
              fontSize: 24,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            Top {campusRank[0]}% in {campusRank[1]}
          </div>
        )}
      </div>
    </div>
  )
}
