import type { DesignToken, DesignTokens } from 'style-dictionary';

const baseDuration = 40;
const duration = (value: number): number => value * baseDuration;
const attributes = (): Partial<DesignToken> => ({
  attributes: {
    category: 'time',
  },
});

export const animation = {
  duration: {
    '-1x': {
      value: duration(1),
      ...attributes(),
    },
    '-2x': {
      value: duration(2),
      ...attributes(),
    },
    '-3x': {
      value: duration(3),
      ...attributes(),
    },
    '-4x': {
      value: duration(4),
      ...attributes(),
    },
    '-5x': {
      value: duration(5),
      ...attributes(),
    },
    '-6x': {
      value: duration(6),
      ...attributes(),
    },
    '-12x': {
      value: duration(12),
      ...attributes(),
    },
  },
  easing: {
    value: 'cubic-bezier(.47, .1, 1, .63)',
  },
} satisfies DesignTokens;
