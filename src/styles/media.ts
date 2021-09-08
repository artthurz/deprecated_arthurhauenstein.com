import { generateMedia } from 'styled-media-query'

type customBreakpoints =
  | 'fourk'
  | 'fullhd'
  | 'hd'
  | 'tabletlarge'
  | 'tablet'
  | 'mobile'

const customMedia = generateMedia({
  fourk: '2160px',
  fullhd: '1920px',
  hd: '1270px',
  tabletlarge: '1024px',
  tablet: '769px',
  mobile: '375px'
})

export default customMedia
export type { customBreakpoints }
