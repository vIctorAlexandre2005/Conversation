import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    // Dispositivos móveis
    gb: '0px',
    xs: "320px",   // Extra small
    sm: "480px",   // Small
    tablet: "768px",   // Medium
    tabletLandscape: "1024px",  // Large
    desktop: "1280px",  // Extra large
    laptop: "1366px", 
    desktopWide: "1440px",
    desktopWide1: "1460px",
    monitor: "1920px",
    ultrawide: "2560px",

    // Tablets
    tablet: "768px",               // Retrato Tablet
    tabletLandscape: "1024px",     // Paisagem Tablet
    // Desktop
    desktop: "1280px",  
    desktopWide: "1440px", // Desktop wide
    
    // Laptops
    laptop: "1366px", // Tamanho comum para laptops
  
    // Monitores
    monitor: "1920px",  // Resolução comum para monitores
  
    // Ultra wide displays
    ultrawide: "2560px",  // Ultrawide monitors
  
    // 4K e além
    "4k": "3840px",   // Resolução 4K
    "5k": "5120px",   // Resolução 5K
    "6k": "6144px",   // Resolução 6K
    "8k": "7680px",   // Resolução 8K e além
  };
  
  // 3. Extend the theme
  export const theme = extendTheme({ 
    colors: {
      green: {
        100: '#02ad41',
        200: 'limegreen'
      },
      black: {
        100: '#212121',
        200: '#282828',
        300: '#12121425'
      },
      white: {
        100: '#f9f9f9',
        200: '#f9f9f955'
      }
    },
    styles: {
      global: {
        body: {
          bg: '#f9f9f9'
        }
      }
    },
    breakpoints
  });