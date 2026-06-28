# @gitroll/profile-card

## Unreleased

### Added

- **66 new themes** (79 total), each in its own file under `src/themes/`,
  collected by `index.ts` + `preset.ts` for scalability. All colors are
  satori-safe hex/rgb.
- **`decoration` support** — apply a full-card overlay to _any_ theme via the
  `OGCard` `decoration` prop, the playground `?decoration=` query param, or
  `--decoration` on the CLI (validated against the known set).
- **Four new decorations**: `confetti`, `bubbles`, `circuit`, `sunburst`
  (alongside `kawaiiCat` and `retro`).
- Playground theme + decoration pickers with live per-tile previews, `?theme=`
  / `?decoration=` URL state, an active-decoration pill, and SVG download.
- `Rating` and the decorations are now exported from the package entry point.

### Changed

- Decorations are fully decoupled from themes — no more `theme === preset.x`
  coupling; gradient backgrounds are detected generically.
- `theme.ts` reduced to the `Theme` interface plus re-exports.
- Redesigned playground (dark UI, theme/decoration tile grids).
- Added JSDoc across the source files (`OGCard`, `theme`, `decorations`,
  `rating`, `logo`).

### Fixed

- CLI grid mode (`--grid`) typing for the full `Rating` range (added `E`).

### Removed

- Per-badge decorations (`DarkEmeraldDecoration`, `WatchdogGradientDecoration`).

## 0.3.0

### Minor Changes

- [#27](https://github.com/gitroll-dev/gitroll-profile-card/pull/27) [`4a9e9d5`](https://github.com/gitroll-dev/gitroll-profile-card/commit/4a9e9d5d40a7e8fabed8012cd1252e040e28d9cd) Thanks [@copilot-swe-agent](https://github.com/apps/copilot-swe-agent)! - Add WatchdogGradient theme support

## 0.2.4

### Patch Changes

- [#22](https://github.com/gitroll-dev/gitroll-profile-card/pull/22) [`c46830d`](https://github.com/gitroll-dev/gitroll-profile-card/commit/c46830d637934a1e108cb2e3994252d76d71f738) Thanks [@ggfevans](https://github.com/ggfevans)! - Added Dracula theme

## 0.2.3

### Patch Changes

- [#19](https://github.com/gitroll-dev/gitroll-profile-card/pull/19) [`677b60f`](https://github.com/gitroll-dev/gitroll-profile-card/commit/677b60f3418bb5a8c6996c38a3ad67a60feaebc5) Thanks [@emmanyouwell](https://github.com/emmanyouwell)! - Added Dark Emerald theme

## 0.2.2

### Patch Changes

- [#17](https://github.com/gitroll-dev/gitroll-profile-card/pull/17) [`7269c6f`](https://github.com/gitroll-dev/gitroll-profile-card/commit/7269c6f08d0b45b1035f8ddcae6fb8b9661adb84) Thanks [@JacobLinCool](https://github.com/JacobLinCool)! - Add retro theme

## 0.2.1

### Patch Changes

- Use full text of "maintainability" and shorten the bars.

## 0.2.0

### Minor Changes

- [#12](https://github.com/gitroll-dev/gitroll-profile-card/pull/12) [`f7c4773`](https://github.com/gitroll-dev/gitroll-profile-card/commit/f7c4773a2630762e8b366646014fbad83c3614df) Thanks [@JacobLinCool](https://github.com/JacobLinCool)! - kawaiiCat theme

## 0.1.0

### Minor Changes

- [#3](https://github.com/gitroll-dev/gitroll-profile-card/pull/3) [`b56b76e`](https://github.com/gitroll-dev/gitroll-profile-card/commit/b56b76eb6a7998a5f845723748be9a90a9852d08) Thanks [@JacobLinCool](https://github.com/JacobLinCool)! - Add midnight theme
