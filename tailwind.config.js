/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      white: '#F6F7EB',
      dark: '#393E41',
      primary: '#00563f',
      secondary: '#9c7c38',
      tertiary: '#A30026',
      gray: '#eeefef',
      lgreen: '9fe99f',
      lred: 'eb7373',
      lorange: 'ffae82',
      lyellow: '#f2ffa9',
    },
    fontFamily: {
      oswald: ['Oswald'],
    },
    extend: {
      gridTemplateColumns: {
        body: '240px minmax(900px, 1fr)',
        footer: 'repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

