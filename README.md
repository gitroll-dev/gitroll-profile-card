# GitRoll Profile Card

[Online Playground](https://gitroll-dev.github.io/gitroll-profile-card/)

## Available Themes

We now have 79 preset themes to choose from! 🎉 They're ordered by background brightness — light themes first (lightest → dimmest), then dark themes (dimmest → darkest). `light` is the default.

### Light

`light`, `amberMinimalLight`, `boldTechLight`, `modernMinimalLight`, `neoBrutalismLight`, `twitterLight`, `kawaiiCat`, `oceanBreezeLight`, `northernLightsLight`, `softPopLight`, `elegantLuxuryLight`, `caffeineLight`, `candylandLight`, `cleanSlateLight`, `violetBloomLight`, `claudeLight`, `quantumRoseLight`, `cyberpunkLight`, `sunsetHorizonLight`, `t3ChatLight`, `solarizedLight`, `natureGreenLight`, `starryNightLight`, `tangerineLight`, `cosmicNightLight`, `solarDuskLight`, `pastelDreamsLight`, `retroArcadeLight`, `graphiteLight`, `catppuccinLight`, `vintagePaperLight`, `perpetuityLight`, `mochaMousseLight`, `sepia`, `bubblegumLight`, `claymorphismLight`, `doom64Light`

### Dark

`dark`, `neoBrutalismDark`, `twitterDark`, `cyberpunkDark`, `doom64Dark`, `starryNightDark`, `elegantLuxuryDark`, `northernLightsDark`, `perpetuityDark`, `cosmicNightDark`, `quantumRoseDark`, `solarDuskDark`, `sunsetHorizonDark`, `retroArcadeDark`, `violetBloomDark`, `t3ChatDark`, `tangerineDark`, `natureGreenDark`, `caffeineDark`, `oceanBreezeDark`, `softPopDark`, `vintagePaperDark`, `pastelDreamsDark`, `mochaMousseDark`, `amberMinimalDark`, `retro`, `boldTechDark`, `cleanSlateDark`, `modernMinimalDark`, `catppuccinDark`, `claymorphismDark`, `graphiteDark`, `tokyoNight`, `candylandDark`, `midnight`, `bubblegumDark`, `WatchdogGradient`, `claudeDark`, `solarizedDark`, `dracula`, `nord`, `darkEmerald`

To use a preset theme, simply add the `theme` query parameter to the image URL. For example:

```
https://gitroll.io/api/badges/profiles/v1/uZxjMB3mkXpQQPskvTMcp0UeqPJA3?theme=nord
```

Or try the new WatchdogGradient theme:

```
https://gitroll.io/api/badges/profiles/v1/uZxjMB3mkXpQQPskvTMcp0UeqPJA3?theme=WatchdogGradient
```

## Available Decorations

Decorations are optional full-card overlays that work on **any** theme. Add the
`decoration` query parameter alongside `theme`:

```
https://gitroll.io/api/badges/profiles/v1/uZxjMB3mkXpQQPskvTMcp0UeqPJA3?theme=dracula&decoration=circuit
```

Available: `kawaiiCat`, `retro`, `confetti`, `bubbles`, `circuit`, `sunburst`.

## How theming works

The card is a React component rendered to an **SVG** with [satori](https://github.com/vercel/satori) (and optionally to PNG with [sharp](https://github.com/lovell/sharp)), so it can be served as a plain image URL.

A theme is just a set of colors implementing the `Theme` interface in [`src/theme.ts`](src/theme.ts): background, text, the `S`–`E` rating badge colors, the score-bar colors, border, and logo color.

Each theme lives in its own file under [`src/themes/`](src/themes/) and is collected into the `preset` map. Note that satori can't parse `oklch()`, so colors must be plain hex/rgb.

## Contributing

We welcome contributions to GitRoll Profile Card!

### Adding New Themes

1. Fork the repo and create a branch.
2. Add a theme file under [`src/themes/`](src/themes/) (copy an existing one), using hex/rgb colors only.
3. Export it from [`src/themes/index.ts`](src/themes/index.ts) and add it to the `preset` map in [`src/themes/preset.ts`](src/themes/preset.ts).
4. Preview with `pnpm dev`, then open a PR.

To keep the set useful to the community, any new theme must gather **at least 3 emoji reactions** on the PR before it's merged.

## Developing and Testing Themes

To help you develop new themes and preview your work, please use the playground.

### Online Playground

You can easily preview and test your themes using our [Online Playground](https://gitroll-dev.github.io/gitroll-profile-card/).

The playground allows you to:

- Preview your card in real-time with **Hot Module Replacement (HMR)**.
- Try out different preset themes.
- Test with custom properties, such as username, ranks, and scores.

### Running the Playground Locally

To run the playground locally:

1. Clone the Repository

```sh
git clone https://github.com/gitroll-dev/gitroll-profile-card.git
```

2. Install Dependencies

```sh
pnpm install
```

3. Start the Development Server

```sh
pnpm dev
```

4. Visit the Playground

Open your browser and visit <http://localhost:5173>.

This is a great way to experiment with different configurations and see how your card will look before submitting a PR.

## Feedback and Support

If you encounter any issues or have suggestions, please open an issue on our [GitHub Issues page](https://github.com/gitroll-dev/gitroll-profile-card/issues). Your feedback is valuable to us and helps make GitRoll Profile Card better for everyone.
