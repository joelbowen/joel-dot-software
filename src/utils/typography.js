import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

// We'll load Google font files locally (Because PERFORMANCE!)
delete usWebDesignStandardsTheme.googleFonts

// Update the default theme header font
usWebDesignStandardsTheme.headerFontFamily = ['CabinVariable', 'sans-serif']
usWebDesignStandardsTheme.bodyFontFamily = ['CabinVariable', 'sans-serif']
usWebDesignStandardsTheme.baseFontSize = '20px'

const typography = new Typography(usWebDesignStandardsTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const rhythm = typography.rhythm
export const scale = typography.scale

export let breakpoints = {
  smVal: 640,
  mdVal: 768,
  lgVal: 1024,
  xlVal: 1280,
  xxlVal: 1440,
}

breakpoints = {
  ...breakpoints,
  sm: `${breakpoints.smVal}px`,
  md: `${breakpoints.mdVal}px`,
  lg: `${breakpoints.lgVal}px`,
  xl: `${breakpoints.xlVal}px`,
  xxl: `${breakpoints.xxlVal}px`,
}

// Theme variants
export const darkMode = {
  color: '#e8eaed',
  mutedColor: '#9aa0a6',
  background: '#202124',
  linkColor: '#8ab4f8',
  gray: '#5f6368',
}

export const lightMode = {
  color: '#202124',
  mutedColor: '#5f6368',
  linkColor: '#1a73e8',
  gray: '#dadce0',
}

export default typography
