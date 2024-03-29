import { Config } from 'style-dictionary';

export const config: Config = {
  platforms: {
    css: {
      buildPath: 'dist/css/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables--root.css',
          format: 'css/variables',
          options: {
            selector: ':root',
          },
        },
        {
          destination: 'sbb-variables--host.css',
          format: 'css/variables',
          options: {
            selector: ':host',
          },
        },
      ],
      transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
        'size/pxToRem',
        'size/rem',
      ],
    },
    js: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens.mjs',
          format: 'javascript/es6',
        },
        {
          destination: 'sbb-tokens.cjs',
          format: 'custom/format/javascript/module',
        },
        {
          destination: 'sbb-tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
        {
          destination: 'sbb-tokens.json',
          format: 'json/flat',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/css'],
    },
    jsonFlat: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens.json',
          format: 'json/flat',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    jsonRaw: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens-raw.json',
          format: 'json/extended',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    scss: {
      buildPath: 'dist/scss/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables.scss',
          format: 'custom/format/scss',
        },
        {
          destination: 'sbb-variables_css--placeholder.scss',
          format: 'css/variables',
          options: {
            selector: '%lyne-design-tokens-css-variables',
          },
        },
      ],
      transformGroup: 'scss',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
        'size/pxToRem',
        'size/rem',
      ],
    },
  },
  source: ['designTokens'],
};
