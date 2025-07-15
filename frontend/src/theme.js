// color design tokens export
export const tokensDark = {
  grey: {
  0: "#ffffff",
  10: "#f5f5f5",
  50: "#ebebeb",
  100: "#d6d6d6",
  200: "#bfbfbf",
  300: "#a8a8a8",
  400: "#919191",
  500: "#7a7a7a",
  600: "#5c5c5c",
  700: "#3f3f3f",
  800: "#262626",
  900: "#121212",
  1000: "#000000",
},

primary: {
  // Teal / Cyan
  100: "#ccf2f4",
  200: "#99e6e9",
  300: "#66d9df",
  400: "#33cdd4",
  500: "#00c0ca",
  600: "#009aa2",
  700: "#00747a",
  800: "#004e52",
  900: "#00282a",
},

secondary: {
  // Orange
  50: "#fff3e6",
  100: "#ffe0bf",
  200: "#ffcc99",
  300: "#ffb873",
  400: "#ffa34d",
  500: "#ff8f26",
  600: "#cc721f",
  700: "#995618",
  800: "#663911",
  900: "#331d09",
},
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
