/* eslint-disable sort-keys */
const shadowObject = (x1, y1, blur1, spread1, x2, y2, blur2, spread2, color1, color2, color3, color4) => ({
  shadow: {
    soft: {
      1: {
        color: {
          value: color1
        }
      },
      2: {
        color: {
          value: color2
        }
      }
    },
    hard: {
      1: {
        color: {
          value: color3
        }
      },
      2: {
        color: {
          value: color4
        }
      }
    },
    1: {
      offset: {
        x: {
          value: x1
        },
        y: {
          value: y1
        }
      },
      blur: {
        value: blur1
      },
      spread: {
        value: spread1
      }
    },
    2: {
      offset: {
        x: {
          value: x2
        },
        y: {
          value: y2
        }
      },
      blur: {
        value: blur2
      },
      spread: {
        value: spread2
      }
    }
  }
});

module.exports = {
  elevation: {
    level: {
      1: {
        ...shadowObject(0, 1, 8, 0, 0, 1, 2, 0, '{color.smoke.alpha.5.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.20.value}')
      },
      3: {
        ...shadowObject(0, 2, 16, 0, 0, 1, 4, 0, '{color.smoke.alpha.5.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.20.value}')
      },
      5: {
        ...shadowObject(0, 4, 32, 0, 0, 1, 8, 0, '{color.smoke.alpha.5.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.20.value}')
      },
      7: {
        ...shadowObject(0, 8, 64, 0, 0, 2, 16, 0, '{color.smoke.alpha.5.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.20.value}')
      },
      9: {
        ...shadowObject(0, 16, 128, 0, 0, 4, 32, 0, '{color.smoke.alpha.5.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.10.value}', '{color.smoke.alpha.20.value}')
      }
    }
  }
};
/* eslint-enable sort-keys */
