/* eslint-disable @typescript-eslint/no-explicit-any */
import { Format, Named, TransformedToken } from 'style-dictionary';
import * as SBBTokens from '../designTokens';
import { Config } from 'tailwindcss/types/config';

export function createTailwindSdFormatter(): Named<Format> {
  return {
    name: 'custom/tailwind',
    formatter: (args) => {
      return createTailwindConfig(args.dictionary.allTokens);
    },
  };
}
type SbbTokens = typeof SBBTokens;

export function createTailwindConfig(tokens: TransformedToken[]) {
  const sbbTokens = unnestObjects<SbbTokens>(tokens);

  // map colors and respective transparency variants to a common color
  // e.g. "black" and "blackAlpha" will get merged into one color object, with the value of "black" as the default
  const colors = sbbTokens.color;
  Object.keys(colors).forEach((color) => {
    if (color.endsWith('Alpha') && typeof colors[color] === 'object') {
      const realColorName = color.replace('Alpha', '');
      colors[realColorName] = withDefault(colors[realColorName], colors[color]);
      delete colors[color];
    }
  });

  const { fixed, responsive } = sbbTokens.spacing;

  // the css variables for the responsive sizes in the design tokens look like this:
  // --sbb-spacing-responsive-xxl-zero
  // this is because the spacings are dependent on breakpoints. this variable contains
  // the value that the spacing "xxl" should have on breakpoint "zero".
  // to achieve this, there are some css media queries, that define a new variable
  // for each size, without the breakpoint name at the end ("--sbb-spacing-responsive-xxl" in this case),
  // that will set the value of this variable based on the current breakpoint.
  // so to work with the responsive sizes, we can just use the variable names without
  // the breakpoint name, and the correct value will be set by the css in "composed-variables.css"
  const responsiveSizes = Object.fromEntries(
    Object.keys(responsive).map((size) => {
      // it doesn't really matter which breakpoint we choose, any one will work
      const breakpoint: keyof SbbTokens['breakpoint'] = 'zero';
      const variableName = responsive[size][breakpoint].replace(`-${breakpoint}`, '');
      return [size, variableName];
    }),
  );

  const fixedSizes = removeDashPrefix(fixed);

  const minWidthScreens = Object.fromEntries(
    Object.entries(sbbTokens.breakpoint).map(([bpName, range]) => [bpName, range.min]),
  );

  const maxWidthScreens = Object.fromEntries(
    Object.entries(sbbTokens.breakpoint).map(([bpName, range]) => [
      `max-${bpName}`,
      { max: range.max },
    ]),
  );

  const { default: defaultFontSize, ...otherFontSizes } = sbbTokens.typo.scale;

  const tailwindConfig: Partial<Config> = {
    theme: {
      colors: { transparent: 'transparent', current: 'currentColor', ...colors },
      screens: { ...minWidthScreens, ...maxWidthScreens },
      transitionDuration: removeDashPrefix(sbbTokens.animation.duration),
      transitionTimingFunction: withDefault(sbbTokens.animation.easing),
      borderRadius: { ...sbbTokens.border.radius, '0': '0', full: '9999px' },
      borderWidth: { ...sbbTokens.border.width, '0': '0' },
      outlineOffset: withDefault(sbbTokens.focus.outline.offset),
      spacing: { ...fixedSizes, ...responsiveSizes, '0': '0' },
      letterSpacing: sbbTokens.typo.letterSpacing,
      lineHeight: sbbTokens.typo.lineHeight,
      fontFamily: withDefault(sbbTokens.typo.fontFamily),
      fontSize: withDefault(defaultFontSize, otherFontSizes),
      // TODO:
      // shadow
      // grid layout
    },
  };
  return JSON.stringify(tailwindConfig, null, 2);
}

const withDefault = <T extends object, V>(defaultValue: V, obj = {} as T) => ({
  ...obj,
  DEFAULT: defaultValue,
});

// remove the dash prefix from the keys
// e.g. "-1x" becomes "1x" in the key
const removeDashPrefix = (obj: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.startsWith('-') ? key.substring(1) : key,
      value,
    ]),
  );

// this type recursively unnests objects that have a "value" property
// e.g. recursively transforms objects like { a: { value: "b" } } to { a: "b" }
type UnnestValue<T> = {
  [K in keyof T]: T[K] extends { value: any } ? T[K]['value'] : UnnestValue<T[K]>;
};

function unnestObjects<T extends object>(objects: TransformedToken[]): UnnestValue<T> {
  const nestedObject: any = {};

  for (const obj of objects) {
    let currentObject = nestedObject;
    const path = obj.path;

    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];

      if (!(key in currentObject)) {
        currentObject[key] = {};
      }

      currentObject = currentObject[key];
    }

    const finalKey = path[path.length - 1];

    if (path[0] === 'breakpoint') {
      // breakpoints don't support css variables, we need to use the actual value of the variable instead
      currentObject[finalKey] = `${obj.value} /* var(--${obj.name}) */`;
    } else {
      // add the actual value behind the variable as a comment for a better developer experience
      currentObject[finalKey] =
        `var(--${obj.name}) /* ${obj.attributes?.category === 'size' ? obj.original.value + 'px' : obj.value} */`;
    }
  }

  return nestedObject;
}
