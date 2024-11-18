import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import satori from 'satori'
import { OGCard } from './OGCard'
import { Rating } from './rating'
import { preset } from './theme'


main()

async function main() {
  const fontData = fs.readFileSync(fileURLToPath(join(import.meta.url, '../../public/noto-sans-v27-latin-regular.ttf')))

  const theme = process.argv[2]

  const props = {
    user: 'JacobLinCool',
    avatar: 'https://github.com/jacoblincool.png',
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
    theme: preset[theme as keyof typeof preset] || preset.light,
  }

  
  const svg = await satori(OGCard(props), {
    width: 1200,
    height: 675,
    fonts:[
      {
        name: 'sans serif',
        data: fontData,
        weight: 700,
        style: 'normal'
      }
    ],
  })

  console.log(svg)
}
