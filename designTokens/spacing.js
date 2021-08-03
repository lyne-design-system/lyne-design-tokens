const baseSpacing = 4;

const spacing = (value) => value * Number(baseSpacing);

/* eslint-disable sort-keys */
module.exports = {
  fixed: {
    '-1x': {
      value: spacing(1)
    },
    '-2x': {
      value: spacing(2)
    },
    '-3x': {
      value: spacing(3)
    },
    '-4x': {
      value: spacing(4)
    },
    '-5x': {
      value: spacing(5)
    },
    '-6x': {
      value: spacing(6)
    },
    '-8x': {
      value: spacing(8)
    },
    '-10x': {
      value: spacing(10)
    }
  },
  responsive: {
    '-xs': {
      zero: {
        value: spacing(5)
      },
      micro: {
        value: spacing(5)
      },
      small: {
        value: spacing(5)
      },
      medium: {
        value: spacing(6)
      },
      large: {
        value: spacing(6)
      },
      wide: {
        value: spacing(6)
      },
      ultra: {
        value: spacing(6)
      }
    },
    '-s': {
      zero: {
        value: spacing(6)
      },
      micro: {
        value: spacing(6)
      },
      small: {
        value: spacing(6)
      },
      medium: {
        value: spacing(8)
      },
      large: {
        value: spacing(8)
      },
      wide: {
        value: spacing(8)
      },
      ultra: {
        value: spacing(8)
      }
    },
    '-m': {
      zero: {
        value: spacing(8)
      },
      micro: {
        value: spacing(8)
      },
      small: {
        value: spacing(8)
      },
      medium: {
        value: spacing(10)
      },
      large: {
        value: spacing(10)
      },
      wide: {
        value: spacing(12)
      },
      ultra: {
        value: spacing(12)
      }
    },
    '-l': {
      zero: {
        value: spacing(8)
      },
      micro: {
        value: spacing(8)
      },
      small: {
        value: spacing(10)
      },
      medium: {
        value: spacing(12)
      },
      large: {
        value: spacing(14)
      },
      wide: {
        value: spacing(14)
      },
      ultra: {
        value: spacing(16)
      }
    },
    '-xl': {
      zero: {
        value: spacing(8)
      },
      micro: {
        value: spacing(8)
      },
      small: {
        value: spacing(12)
      },
      medium: {
        value: spacing(16)
      },
      large: {
        value: spacing(20)
      },
      wide: {
        value: spacing(20)
      },
      ultra: {
        value: spacing(24)
      }
    }
  }
};

/* eslint-enable sort-keys */