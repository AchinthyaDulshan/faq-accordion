/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'White': 'hsl(0, 0%, 100%)',
      'Light-pink': 'hsl(275, 100%, 97%)',
      'Grayish-purple': 'hsl(292, 16%, 49%)',
      'Dark-purple': 'hsl(292, 42%, 14%)',
      'purple-on-star':'#AD28EB',
    },
    extend: {
      backgroundImage:{
        'main-bg-desktop':"url('src/assets/images/background-pattern-desktop.svg')",
        'main-bg-mobile':"url('src/assets/images/background-pattern-mobile.svg')"
      },
      // animation:{
      //   'drop-from-up':'dropFromUp 1s ease-in'
      // },
      // keyframes:{
      //   'dropFromUp':{
      //     'from':'h-0',
      //     'to':'h-fit'
          
      //   }
      // }
    },
  },
  plugins: [],
}