const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    
    extend: { 
      backgroundImage: theme => ({
     
       }),
      colors: {
        
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.blue,
        yellow: colors.amber,
        cyan:colors.cyan,
        orange:colors.orange,
        amber:colors.amber,
        lime:colors.lime,
        emerald:colors.emerald,
        teal:colors.teal,
        lightBlue:colors.lightBlue,
        violet:colors.violet,
        rose:colors.rose,
        coolGray:colors.coolGray,
        blueGray:colors.blueGray,
      },
      keyframes:{
        
        'move-t':{
          'from':{top:'500px'},
          'to':{top:'0'},
        },
        
        'roll':{
          from:{transform:'rotate(0deg)',},
          to:{transform:'rotate(360deg)',}
        },
        
        'roll-inverse':{
          from:{transform:'rotate(0deg)',},
          to:{transform:'rotate(-360deg)',}
        },
        
        'move-text-l':{
          from:{
            left:'30px',
            opacity: '0',
          },
          to:{
            left:'0',
            opacity:'1',
          }
        },
        
        'move-text-r':{
          from:{
            right:'30px',
            opacity: '0',
          },
          to:{
            right:'0',
            opacity:'1',
          }
        },
        
        'move-text-t':{
          from:{
            bottom:'-30px',
            opacity: '0',
          },
          to:{
            bottom:'0',
            opacity:'1',
          }
        },
        
        'opacity-0-1':{
          from:{
            opacity: '0',
          },
          to:{
            opacity:'1',
          }
        },

        'bar-l':{
          from:{
            left:'-250px'
          },
          to:{
            left:'0',
          }
        }
      },
      
      
      animation:{//Nombre de las animaciones
        'move-t':'move-t 0.7s',
        'roll':'roll 40s linear infinite',
        'roll-inverse':'roll-inverse 40s linear infinite',
        'move-text-l':'move-text-l 1s',
        'move-text-t':'move-text-t 0.3s',
        'opacity-0-1':'opacity-0-1 1s',
        'move-text-r':'move-text-r 1s',
        'bar-l':'bar-l 1s'
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      borderWidth:['hover','focus'],
      display:['hover'],
      backgroundColor: ['group-focus'],
    },
  },
  plugins: [],
}
