import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import satori from 'satori'
import sharp from 'sharp'
import { OGCard, OGCardProps } from '../src/OGCard'
import { Rating } from '../src/rating'
import { preset } from '../src/theme'


interface CliOptions {
  theme?: keyof typeof preset;
  output?: string;
  user?: string;
  avatar?: string;
  devType?: string;
  contributor?: boolean;
  format?: 'svg' | 'png';
  grid?: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2)
  const options: CliOptions = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    switch (arg) {
      case '--theme':
      case '-t': {
        options.theme = args[++i] as keyof typeof preset
        break
      }
      case '--output':
      case '-o': {
        options.output = args[++i]
        break
      }
      case '--user':
      case '-u': {
        options.user = args[++i]
        break
      }
      case '--avatar':
      case '-a': {
        options.avatar = args[++i]
        break
      }
      case '--dev-type':
      case '-d': {
        options.devType = args[++i]
        break
      }
      case '--contributor':
      case '-c': {
        options.contributor = true
        break
      }
      case '--format':
      case '-f': {
        const format = args[++i].toLowerCase()
        if (format !== 'svg' && format !== 'png') {
          console.error('Error: Format must be either "svg" or "png"')
          process.exit(1)
        }
        options.format = format as 'svg' | 'png'
        break
      }
      case '--grid':
      case '-g': {
        options.grid = true
        options.format = 'png' // Force PNG for grid mode
        break
      }
      case '--help':
      case '-h': {
        printHelp()
        process.exit(0)
      }
    }
  }

  // Detect format from output filename if not explicitly specified
  if (!options.format && options.output) {
    const ext = options.output.toLowerCase().split('.').pop()
    if (ext === 'png') options.format = 'png'
    else if (ext === 'svg') options.format = 'svg'
  }

  options.format = options.format || 'svg'

  return options
}

function printHelp() {
  console.log(`
Usage: generate [options]

Options:
  -t, --theme <theme>      Theme to use (light/dark)
  -o, --output <file>      Output file path (defaults to stdout)
  -u, --user <username>    GitHub username
  -a, --avatar <url>       Avatar URL
  -d, --dev-type <type>    Developer type
  -c, --contributor        Mark as contributor
  -f, --format <format>    Output format (svg/png)
  -g, --grid              Generate a grid of all ratings
  -h, --help              Show this help message
`)
}

async function generateCard(props: OGCardProps) {
  const fontData = fs.readFileSync(fileURLToPath(join(import.meta.url, '../../public/noto-sans-v27-latin-regular.ttf')))

  return await satori(OGCard(props), {
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
}

async function generateNoticeCard() {
  const svg = `
    <svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="675" fill="#F6F8FA"/>
      <text x="600" y="280" font-family="sans serif" font-size="48" fill="#24292F" text-anchor="middle">
        Preview Only
      </text>
      <text x="600" y="350" font-family="sans serif" font-size="32" fill="#57606A" text-anchor="middle">
        These are demo cards showing possible ratings.
      </text>
      <text x="600" y="400" font-family="sans serif" font-size="32" fill="#57606A" text-anchor="middle">
        Get your real score at GitRoll.io
      </text>
    </svg>
  `
  return svg
}

async function generateGrid(baseProps: OGCardProps) {
  const ratings = [Rating.S, Rating.A, Rating.B, Rating.C, Rating.D]
  const scores = {
    [Rating.S]: '9.00',
    [Rating.A]: '7.50',
    [Rating.B]: '6.00',
    [Rating.C]: '4.50',
    [Rating.D]: '3.00',
  }
  const cdfs = {
    [Rating.S]: '99',
    [Rating.A]: '85',
    [Rating.B]: '65',
    [Rating.C]: '35',
    [Rating.D]: '15',
  }

  // Generate all rating cards
  const ratingCards = await Promise.all(
    ratings.map(async (rating) => {
      const props = {
        ...baseProps,
        overallRating: rating,
        overallScore: scores[rating],
        overallScoreCDF: cdfs[rating],
      }
      const svg = await generateCard(props)
      return sharp(Buffer.from(svg)).toFormat('png').toBuffer()
    })
  )

  // Generate simple notice card
  const noticeSvg = await generateNoticeCard()
  const noticeCard = await sharp(Buffer.from(noticeSvg)).toFormat('png').toBuffer()

  // Combine all cards including the notice
  const cards = [noticeCard, ...ratingCards]

  const GAP = 20
  const COLUMNS = 2
  const CARD_WIDTH = 1200
  const CARD_HEIGHT = 675
  const ROWS = Math.ceil(cards.length / COLUMNS)

  const totalWidth = CARD_WIDTH * COLUMNS + GAP * (COLUMNS - 1)
  const totalHeight = CARD_HEIGHT * ROWS + GAP * (ROWS - 1)

  return await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite(
      cards.map((buffer, index) => {
        const row = Math.floor(index / COLUMNS)
        const col = index % COLUMNS
        return {
          input: buffer,
          top: row * (CARD_HEIGHT + GAP),
          left: col * (CARD_WIDTH + GAP),
        }
      })
    )
    .png()
    .toBuffer()
}

async function main() {
  const options = parseArgs()
  const user = options.user || 'monatheoctocat'

  const baseProps = {
    user,
    avatar: options.avatar || `https://github.com/${user}.png`,
    devType: options.devType || 'Exemplary Demo Developer',
    reliabilityScore: 1.0,
    securityScore: 3.0,
    maintainabilityScore: 5.0,
    contributor: options.contributor ?? true,
    regionalRank: [1, 'TW'] as [number, string],
    campusRank: [10, 'ntnu'] as [number, string],
    theme: preset[options.theme as keyof typeof preset] || preset.light,
    overallScore: '9.05',
    overallScoreCDF: '99',
    overallRating: Rating.S,
  }

  if (options.grid) {
    const gridBuffer = await generateGrid(baseProps)
    if (options.output) {
      fs.writeFileSync(options.output, gridBuffer)
    } else {
      process.stdout.write(gridBuffer)
    }
    return
  }

  const svg = await generateCard(baseProps)

  if (options.format === 'png') {
    const pngBuffer = await sharp(Buffer.from(svg)).toFormat('png').toBuffer()

    if (options.output) {
      fs.writeFileSync(options.output, pngBuffer)
    } else {
      process.stdout.write(pngBuffer)
    }
  } else {
    if (options.output) {
      fs.writeFileSync(options.output, svg)
    } else {
      console.log(svg)
    }
  }
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
