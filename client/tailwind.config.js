/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#FF6B6B",
        customBlack: "#333333"
      }
    },
    fontFamily: {
      'brand': ["Permanent Marker"]
    },
    backgroundImage: {
      'hero-bg1': "url('./src/assets/img/background1.jpg')",
      'hero-bg2': "url('./src/assets/img/background2')"    
    },
    keyframes: {
      landing: {
        '0%': { transform : 'translateY(-60px)'},
        '100%': { transform : 'translateY(0px)',}
      },
      // popup animation
      unfoldIn: {
        '0%': {
          transform: 'scaleY(0.005) scaleX(0)',
        },
        '50%': {
          transform: 'scaleY(0.005) scaleX(1)'
        },
        '100%': {
          transform: 'scaleY(1) scaleX(1)'
        }
      },
      unfoldOut: {
        '0%': {
          transform: 'scaleY(1) scaleX(1)',
        },
        '50%': {
          transform: 'scaleY(0.005) scaleX(1)'
        },
        '100%': {
          transform: 'scaleY(0.005) scaleX(0)'
        }
      },
      // hamburger menu

      top1: {
        '0%': {
          top: '0',
          transform: 'rotate(0deg)'
        },
        '50%': {
          top: '8px',
          transform: 'rotate(0deg)'
        },
        '100%': {
          top: '8px',
          transform: 'rotate(45deg)'
        }
      },
      top2: {
        '0%': {
          top: '8px',
          transform: 'rotate(45deg)'
        },
        '50%': {
          top: '8px',
          transform: 'rotate(0deg)'
        },
        '100%': {
          top: '0',
          transform: 'rotate(0deg)'
        }
      },

      bot1: {
        '0%': {
          bottom: '0',
          transform: 'rotate(0deg)'
        },
        '50%': {
          bottom: '8px',
          transform: 'rotate(0deg)'
        },
        '100%': {
          bottom: '8px',
          transform: 'rotate(135deg)'
        }
      },
      bot2: {
        '0%': {
          bottom: '8px',
          transform: 'rotate(135deg)'
        },
        '50%': {
          bottom: '8px',
          transform: 'rotate(0deg)'
        },
        '100%': {
          bottom: '0',
          transform: 'rotate(0)'
        }
      },

      scale1: {
        '50%': {
          transform: 'scale(0)'
        },
        '100%': {
          transform: 'scale(0)'
        }
      },
      scale2: {
        '0%': {
          transform: 'scale(0)'
        },
        '50%': {
          transform: 'scale(0)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      },

      // nav menu
      slideIn: {
        '0%': {
          transform: 'scaleX(0)',
        },
        '100%': {
          transform: 'scaleX(1)',
          opacity:  '1',
        }
      },
      slideOut: {
        '0%': {
          transform: 'scaleX(1)',
          opacity: '1'
        },
        '100%': {
          transform: 'scaleX(0)',
          opacity: '0'
        }
      },

      // nav item showUp
      showUp: {
        '0%': {
          opacity: '0',
          transform: 'translateX(-200px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      showOff: {
        '0%': {
          opacity: '1',
          transform: 'translateX(0)'
        },
        '100%':{
          opacity: '0',
          transform: 'translateX(-200px)'
        }
      },

      // nav pointer effect
      blink: {
        '0%': {
          opacity: '1'
        },
        '50%': {
          opacity: '0'
        },
        '100%': {
          opacity: '0'
        }
      }
    },
    animation: {
      'landing-slow': 'landing 0.5s ease-in-out',
      'unfoldIn': 'unfoldIn 0.8s ease-in-out',
      'unfoldOut': 'unfoldOut 0.8s ease-in-out',
      'zoomIn': 'zoomIn 0.5s ease-in-out',
      'zoomOut': 'zoomOut 0.5s ease-in-out',
      // hamburger menu animations
      // rotate 
      'menu-top-active': 'top1 0.7s ease forwards',
      'menu-top-disable': 'top2 0.7s ease forwards',
      'menu-middle-active': 'scale1 0.7s ease forwards',
      'menu-middle-disable': 'scale2 0.7s ease forwards',
      'menu-bot-active': 'bot1 0.7s ease forwards',
      'menu-bot-disable': 'bot2 0.7s ease forwards',
      // Menu animation
      'menu-slideIn': 'slideIn 0.7s ease forwards',
      'menu-slideOut': 'slideOut 0.7s ease forwards',
      // Menu Item animation
      'menu-item-blink': 'blink 1s ease infinite 1s',
      'menu-item-showUp': 'showUp 0.5s ease forwards 0.25s',
      'menu-item-showOff': 'showOff 0.5s ease forwards 0s',
    }
  },
  plugins: [
    //  require("tailwindcss-animation-delay"),
    // animation delay utilities
    plugin(({ matchUtilities, theme }) => {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            "animation-delay": value,
          };
        },
      },
      {
        values: theme("transitionDelay"),
      }
    );
    }),
  ],
}

