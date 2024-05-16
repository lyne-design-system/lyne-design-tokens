import type { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (): Partial<DesignToken> => ({
  attributes: {
    category: 'size',
  },
});

export const breakpoint = {
  zero: {
    min: {
      value: 0,
      ...attributes(),
    },
    max: {
      value: 359,
      ...attributes(),
    },
  },
  micro: {
    min: {
      value: 360,
      ...attributes(),
    },
    max: {
      value: 599,
      ...attributes(),
    },
  },
  small: {
    min: {
      value: 600,
      ...attributes(),
    },
    max: {
      value: 839,
      ...attributes(),
    },
  },
  medium: {
    min: {
      value: 840,
      ...attributes(),
    },
    max: {
      value: 1023,
      ...attributes(),
    },
  },
  large: {
    min: {
      value: 1024,
      ...attributes(),
    },
    max: {
      value: 1279,
      ...attributes(),
    },
  },
  wide: {
    min: {
      value: 1280,
      ...attributes(),
    },
    max: {
      value: 1439,
      ...attributes(),
    },
  },
  ultra: {
    min: {
      value: 1440,
      ...attributes(),
    },
    max: {
      value: 2579,
      ...attributes(),
    },
  },
} satisfies DesignTokens;
