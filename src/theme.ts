import { Rating } from './rating'

/**
 * A card color scheme. All values must be satori-safe (hex / rgb / rgba or a
 * `linear-gradient(...)` string) — satori cannot parse `oklch()`.
 *
 * Themes live one-per-file under `./themes` and are collected in
 * `./themes/preset`.
 */
export interface Theme {
  /** Card background; a solid color or a `linear-gradient(...)` string. */
  backgroundColor: string;
  /** Primary text color. */
  textColor: string;
  /** Muted text color (developer type, percentile labels). */
  textColorSecondary: string;
  /** Rating badge fill color per grade. */
  badgeColors: Record<Rating, string>;
  /** Rating badge text color per grade. */
  badgeTextColors: Record<Rating, string>;
  /** Score bar track color. */
  barBackground: string;
  /** Score bar fill color. */
  barForeground: string;
  /** Border color for the contributor / rank badges. */
  borderColor: string;
  /** Fill for the avatar placeholder when no image is given. */
  avatarPlaceholderColor: string;
  /** GitRoll logo color. */
  logoColor: string;
}

export { preset } from './themes/preset'
export * from './themes'
