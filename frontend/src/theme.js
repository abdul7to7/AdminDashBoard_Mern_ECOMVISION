// color design tokens export
export const tokensDark = {
  grey: {
  0: "#121212",
  10: "#1a1a1a",
  50: "#2a2a2a",
  100: "#33373E",
  200: "#3F454E",
  300: "#4C535D",
  400: "#5A616B",
  500: "#6A707A",
  600: "#8A919A",
  700: "#ADB3BA",
  800: "#D0D3D7",
  900: "#ECEEF0",
  1000: "#ffffff",
},

primary: {
  // Based on #525E75 (Blue-Gray)
  100: "#2D3545",
  200: "#3C475A",
  300: "#485267",
  400: "#525E75",  // base color
  500: "#5D6D8A",
  600: "#697B9F",
  700: "#768BB4",
  800: "#8A9EC9",
  900: "#AFC1E0",
},

secondary: {
  // Soft Gold for contrast
  50:  "#3D2F0F",
  100: "#5A430F",
  200: "#7A5B1A",
  300: "#9B7420",
  400: "#BC8F25",
  500: "#E0A927",
  600: "#FFD740",
  700: "#FFE066",
  800: "#FFEA8C",
  900: "#FFF3B3",
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
