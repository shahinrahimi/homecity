/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist :[
    {
      pattern : /shadow-c-/
    },
    {
      pattern : /text-c-/,
    },
    {
      pattern : /bg-c-/,
    },
    {
      pattern : /fuchsia-500/
    }
    // 'text-c-green-500'
  ],
  theme: {
    extend: {
      colors: {
        "c-black-100": "#666666",
        "c-black-200": "#4d4d4d",
        "c-black-300": "#404040",
        "c-black-400": "#2d2d2d",
        "c-black-500": "#333333",
        "c-black-600": "#292929",
        "c-black-700": "#1f1f1f",
        "c-black-800": "#161616",
        "c-black-900": "#0c0c0c",

        "c-white-000": "#FFFFFF",
        "c-white-100": "#f2f2f2",
        "c-white-200": "#ebebeb",
        "c-white-300": "#e0e0e0",
        "c-white-400": "#cccccc",
        "c-white-500": "#e6e6e6",
        "c-white-600": "#d9d9d9",
        "c-white-700": "#bfbfbf",
        "c-white-800": "#a6a6a6",
        "c-white-900": "#8c8c8c",

        "c-red-100": "#f7d9d8",
        "c-red-200": "#f0a3a1",
        "c-red-300": "#e57373",
        "c-red-400": "#ef5350",
        "c-red-500": "#c0392b",
        "c-red-600": "#ab3325",
        "c-red-700": "#962e28",
        "c-red-800": "#82292b",
        "c-red-900": "#6e242e",

        "c-green-100": "#b3e6cc",
        "c-green-200": "#80d6aa",
        "c-green-300": "#4caf50",
        "c-green-400": "#43a047",
        "c-green-500": "#27ae60",
        "c-green-600": "#229954",
        "c-green-700": "#1e8449",
        "c-green-800": "#196f3d",
        "c-green-900": "#145a32",

        "c-blue-100": "#cfe2f3",
        "c-blue-200": "#9fbfdb",
        "c-blue-300": "#5dade2",
        "c-blue-400": "#4a90e2",
        "c-blue-500": "#3498db",
        "c-blue-600": "#2e86c1",
        "c-blue-700": "#2874a6",
        "c-blue-800": "#21618c",
        "c-blue-900": "#1b4f72",

        "c-yellow-100": "#fdf2e9",
        "c-yellow-200": "#fad7a0",
        "c-yellow-300": "#f9bf3b",
        "c-yellow-400": "#f4d03f",
        "c-yellow-500": "#f1c40f",
        "c-yellow-600": "#d4ac0d",
        "c-yellow-700": "#b7950b",
        "c-yellow-800": "#9a7d0a",
        "c-yellow-900": "#7d6608"
      },
      boxShadow: {
        'sharp': 'rgba(0, 0, 0, 0.40) 0px 2px 8px',
        'test' : 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;',
        'cutome-1': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
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
          transform: 'translateX(-1000px)'
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
          transform: 'translateX(-1000px)'
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
      },
      moveForever: {
        "0%" :{
          transform: "translate(-90px, 0%)"
        },
        "100%" :{
          transform: "translate(85px, 0%)"
        }
      },

      ticker: {
        "0%" :{
          transform: "translate(105vw, 0%)"
        },
        "100%" :{
          transform: "translate(-2000px, 0%)"
        }
      },

      inputEffect : {
        "0%": {
          opacity:0,
          transform: "scale(120%, 200%)"
        },
        "100%" : {
          opacity:1,
          transform: "scale(100%)"
        }
      },

      tagInputHidden : {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "0",
          pointerEvents: "none" 
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
      'menu-item-showUp': 'showUp .7s ease forwards 0.25s',
      'menu-item-showOff': 'showOff 1s ease forwards 0s',
      // wave
      'wave-1': 'moveForever 2s -2s linear infinite',
      'wave-2': 'moveForever 4s -3s linear infinite',
      'wave-3': 'moveForever 6s -4s linear infinite',
      // ticker
      'ticker-show': 'ticker 20s linear forwards',

      // input
      'input-active': "inputEffect 0.5s ease forwards",

      // tag input
      'tag-input': "tagInputHidden 0.5s ease forwards"
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
}

