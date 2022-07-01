/* eslint-disable @typescript-eslint/no-var-requires */
const { min } = require('bn.js');
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

function range(start, end, increment = 1) {
  const count = Math.floor((end - start + 1)/increment);
  return Array(count).fill(0).map((_, index) => start + index * increment);
}

const minFontSize = 5;
const maxFontSize = 140;

const minSpacingPixel = 0;
const maxSpacingPixel = 1000;
const spacingPixelIncrement = 5;

const vhs = ['10vh', '20vh', '30vh', '40vh', '50vh', '60vh', '70vh', '80vh', '90vh', '100vh'];

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        colors: {
          primary: '#AAC9CE',
          secondary: '#B6B4C2',
          success: '#C9BBC8',
          info: '#F3DBCF',
          danger: '#E5C1CD',
          dark: '#355C7D',
          midnight: '#1D263A',
          teal: '#10CFC9',
          plum: '#7A306B',
          honey: '#FFC900',
          energy: '#3DB859',
          grey: '#636E75',
          mist: '#BACFD6',
          carnation: '#F24D59',
          cerulean: '#0096DB',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        bounceVertical: {
          '0%, 100%': {
            transform: 'translateX(-50%)',
          },
          '50%': {
            transform: 'translateX(0)',
          }
        },
        bounceHorizontal: {
          '0%, 100%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        bounceVertical: 'bounceVertical 1.3s linear infinite',
        bounceHorizontal: 'bounceHorizontal 1.3s linear infinite',
      },
      spacing: {
        ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({...merged, [f]: `${f}px`}), {})
      },
      maxWidth: {
        ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce(
          (merged, f) => ({ ...merged, [f]: `${f}px` }),
          {}
        ),
      },
      minWidth: {
        ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce(
          (merged, f) => ({ ...merged, [f]: `${f}px` }),
          {}
        ),
      },
      maxHeight: {
        ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce(
          (merged, f) => ({ ...merged, [f]: `${f}px` }),
          {}
        )
      },
      minHeight: {
        ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce(
          (merged, f) => ({ ...merged, [f]: `${f}px` }),
          {}
        )
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
        ...range(minFontSize, maxFontSize, 5).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {}),
        
      },
      fontSize: {
        ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {}),
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};
