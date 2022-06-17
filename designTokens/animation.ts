const baseDuration = 40;
const duration = (value: number) => `${value * baseDuration}ms`;

export const animation = {
  duration: {
    '-1x': {
      value: duration(1),
    },
    '-2x': {
      value: duration(2),
    },
    '-3x': {
      value: duration(3),
    },
    '-4x': {
      value: duration(4),
    },
    '-5x': {
      value: duration(5),
    },
    '-6x': {
      value: duration(6),
    },
  },
  easing: {
    value: 'cubic-bezier(.47, .1, 1, .63)',
  },
};