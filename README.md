# GitRoll Profile Card

[Online Playground](https://gitroll-dev.github.io/gitroll-profile-card/)

## Available Themes

We now have 10 preset themes to choose from! 🎉

- **`light`** (default)
- **`dark`**
- **`sepia`**
- **`solarizedLight`**
- **`solarizedDark`**
- **`tokyoNight`**
- **`nord`**
- **`midnight`**
- **`kawaiiCat`**
- **`retro`**
- **`darkEmerald`**
- **`dracula`**

To use a preset theme, simply add the `theme` query parameter to the image URL. For example:

```
https://gitroll.io/api/badges/profiles/v1/uZxjMB3mkXpQQPskvTMcp0UeqPJA3?theme=nord
```

## Contributing

We welcome contributions to GitRoll Profile Card!

### Adding New Themes

To keep the project simple and ensure the themes are useful to the community, any new theme must gather **at least 3 emoji reactions** from the community before the pull request (PR) is merged. This process ensures that the theme resonates with the users and maintains the quality of the themes offered.

If you'd like to propose a new theme:

1. Fork the repository.
2. Develop your theme in a new branch.
3. Submit a PR for community review.
4. Gather at least 3 emoji reactions from the community to proceed with merging.

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
