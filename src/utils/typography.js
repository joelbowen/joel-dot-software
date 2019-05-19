import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

// We'll load Google font files locally (Because PERFORMANCE!)
delete usWebDesignStandardsTheme.googleFonts

// Update the default theme header font
usWebDesignStandardsTheme.headerFontFamily = ['Marion-Regular', 'serif']
usWebDesignStandardsTheme.bodyFontFamily = ['Lato', 'sans-serif']

const typography = new Typography(usWebDesignStandardsTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
