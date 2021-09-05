import NextImage from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HighlightBoxStyles from '@/components/HighlightBox/HighlightBox.styles'
import * as HeadingStyles from '@/components/Heading/Heading.styles'
import * as MediaMatch from '@/components/MediaMatch/MediaMatch'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const InfoGroup = styled.div`
  grid-area: info;
`

export const MediaGroup = styled.div`
  grid-area: media;
  justify-self: center;
  position: relative;

  ${media.lessThan('medium')`
    width: 20em;
    height: 20em;
  `}
`

export const Job = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.medium};
    `}
  `}
`

export const PresentationWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    display: inline-block;
  `}
`

export const Presentation = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    overflow: hidden;
    display: inline-block;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    border-right: 0.15em solid ${theme.colors.white}; /* The typwriter cursor */
    white-space: nowrap;
    animation: typewriter 2s steps(44) 800ms 1 normal both,
      blinkTextCursor 800ms steps(44) infinite normal;

    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes blinkTextCursor {
      from {
        border-right-color: ${theme.colors.white};
      }
      to {
        border-right-color: transparent;
      }
    }
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    ${media.lessThan('medium')`
      text-align: center;
    `}
  `}
`

export const Photo = styled(NextImage)``

export const HighlightGroup = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
    grid-area: highlight;
    z-index: 1;
    padding-top: 15rem;
    ${HighlightBoxStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }

    ${media.lessThan('huge')`
      margin: ${theme.spacings.xsmall} 0;
      display: flex;
      flex-direction: row;
      ${HighlightBoxStyles.Wrapper} {
      margin-left: ${theme.spacings.medium};

    `}

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xsmall} 0;
      padding-top: ${theme.spacings.xsmall};
      place-self: center;
      display: flex;
      flex-direction: column;
    `}
  `}
`

export const IntroductionSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const IntroductionSectionDelimiter = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'info media'
      'highlight media';
    grid-template-rows: 30% 70%;
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    height: calc(100vh - 97px);
    min-height: 600px;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
      grid-template-areas: "info" "media" "highlight";
      grid-template-rows: 35% 35% 30%;
      grid-template-columns: 1fr;
      height: auto;
    `};
  `}
`

export const AboutMeSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.black01};
  `}
`

export const AboutMeSectionDelimiter = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'aboutMe aboutMe';
    grid-template-rows: auto auto;
    padding: ${theme.spacings.medium} ${theme.spacings.medium};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
      grid-template-areas: "aboutMe";
      grid-template-columns: 1fr;
    `};
  `}
`

export const StackSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StackSectionDelimiter = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'stack stack';

    padding: ${theme.spacings.medium} ${theme.spacings.medium};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    `};
  `}
`

export const AboutMe = styled.section`
  ${({ theme }) => css`
    grid-area: aboutMe;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const AboutMeContentWrapper = styled.div`
  display: flex;

  ${MediaMatch.default} {
    flex: 1;
  }
`

export const HistoryWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const History = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    background: ${theme.colors.background02};
    border-radius: ${theme.border.radius};

    ${media.lessThan('small')`
      padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    `}
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    text-align: justify;

    ${media.lessThan('small')`
      font-size: 1.4rem;
    `}
  `}
`

export const TimelineWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
    padding: 0 ${theme.spacings.large};
  `}
`

export const Stack = styled.section`
  ${({ theme }) => css`
    grid-area: stack;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    } ;
  `}
`

export const ShelfWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
