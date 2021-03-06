import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

// We'll load Google font files locally (Because PERFORMANCE!)
delete usWebDesignStandardsTheme.googleFonts

// Update the default theme header font
usWebDesignStandardsTheme.headerFontFamily = ['Yrsa', 'serif']
usWebDesignStandardsTheme.bodyFontFamily = ['Lato', 'sans-serif']

const typography = new Typography(usWebDesignStandardsTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const serifFont = usWebDesignStandardsTheme.headerFontFamily[0]
export const sansFont = usWebDesignStandardsTheme.bodyFontFamily[0]
