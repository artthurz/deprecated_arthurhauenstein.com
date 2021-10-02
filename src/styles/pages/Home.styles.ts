import styled, { css } from 'styled-components'
import media from '../media'

import * as HighlightBoxStyles from '@/components/HighlightBox/HighlightBox.styles'
import * as HeadingStyles from '@/components/Heading/Heading.styles'
import * as MediaMatch from '@/components/MediaMatch/MediaMatch'

import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'
import NotebookAndPhoneImageImport from '../../../public/img/homePage/notebook-phone.svg'
import ReactNativeIconImport from '../../../public/img/technologies/reactnative.svg'
import ReactIconImport from '../../../public/img/technologies/react.svg'
import NodeIconImport from '../../../public/img/technologies/node.svg'
import TypescriptIconImport from '../../../public/img/technologies/typescript.svg'
import MongoDBIconImport from '../../../public/img/technologies/mongo.svg'
import DockerIconImport from '../../../public/img/technologies/docker.svg'
import PostgreSQLIconImport from '../../../public/img/technologies/postgresql.svg'
import HtmlIconImport from '../../../public/img/technologies/html.svg'
import CssIconImport from '../../../public/img/technologies/css.svg'
import NestImport from '../../../public/img/technologies/nest.svg'
import GraphQlImport from '../../../public/img/technologies/graphql.svg'
import NextImport from '../../../public/img/technologies/next.svg'

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

export const Job = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.small};
    margin-top: 9rem;

    ${media.lessThan('tablet')`
      margin-top: ${theme.spacings.medium};
    `}
  `}
`

export const PresentationWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Presentation = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text02};
    overflow: hidden;
    display: inline-block;
    font-size: ${theme.font.sizes.xxlarge};
    ${media.lessThan('tablet')`
        font-size: ${theme.font.sizes.xlarge};
    `}
    max-width: fit-content;
    z-index: 25;
    font-weight: ${theme.font.bold};
    border-right: 0.15em solid ${theme.colors.white}; /* The typwriter cursor */
    white-space: nowrap;
    animation: typewriter 2s steps(44) 800ms 1 normal both,
      blinkTextCursor 800ms steps(44) infinite normal;

    line-height: 5.5rem;
    letter-spacing: -0.04em;

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
        border-right-color: ${theme.colors.text02};
      }
      to {
        border-right-color: transparent;
      }
    }

    span {
      background: ${theme.colors.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text03};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    ${media.lessThan('tablet')`
      text-align: center;
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
export const PhotoContainer = styled.div`
  position: absolute;
  display: block;
  min-height: 600px;
  height: calc(100vh - 97px);
  width: 100%;
  top: 0;
  left: 0;

  background-image: url(${'/img/me/arthur_front_dark.png'});

  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: top 0 right 15%;

  ${media.lessThan('tabletlarge')`
      margin-top: 50px;
      background-position: top 0 left -320px;
  `}

  ${media.lessThan('tablet')`
      background-position: top 0 left 15%;
      background-size: auto 90%;
  `}

  ${media.lessThan('mobile')`
      background-position: top 0 right -50px;
      margin-top: 20px;
  `}

  ${media.lessThan('mobilesmall')`
      background-position: top 0 right -50px;
      margin-top: 30px;
  `}

  ${media.greaterThan('tablet')`
      background-position: top -20px left -240px;
      min-height: 1120px;
  `}

  ${media.greaterThan('hd')`
      background-position: top 0 left -140px;
  `}
  ${media.greaterThan('fullhd')`
      background-position: top 0 left 20%;
  `}
`

export const HighlightGroup = styled.div`
  ${({ theme }) => css`
    margin: 0;
    grid-area: highlight;
    z-index: 3;
    padding-top: 15rem;
    ${HighlightBoxStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
    display: flex;
    flex-direction: row;

    ${media.lessThan('hd')`
      margin: ${theme.spacings.xsmall} 0;

      ${HighlightBoxStyles.Wrapper} {
      margin-left: ${theme.spacings.medium};
      }

    `}

    ${media.lessThan('tablet')`
      margin: ${theme.spacings.xxlarge} 0;
      padding-top: ${theme.spacings.xlarge};
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
  min-height: 600px;
  height: calc(100vh - 97px);
  ${({ theme }) => css`
    background: ${theme.colors.gradient05};
  `}
  ${media.lessThan('tablet')`
      height: auto;
  `};
`

export const IntroductionSectionDelimiter = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    max-width: ${theme.grid.container};
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas:
      'media info'
      'media highlight';
    grid-template-rows: 30% 70%;
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    min-height: 600px;
    overflow: hidden;

    ${media.lessThan('hd')`
    grid-template-columns: 30% 70%;
      grid-template-rows: 40% 60%;
      grid-template-areas:
      'media info'
      'highlight highlight';
    `};

    ${media.lessThan('tablet')`
      padding: ${theme.spacings.xsmall};
      grid-template-areas: "media" "info" "highlight";
      grid-template-rows: 20% 30% 50%;
      grid-template-columns: 1fr;
      min-height: 800px;
      height: auto;
    `};
  `}
`

export const AboutMeSection = styled.section`
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`

export const AboutMeSectionDelimiter = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'aboutMe aboutMe';
    grid-template-rows: auto auto;
    padding: ${theme.spacings.medium} ${theme.spacings.medium}
      ${theme.spacings.xxxlarge} ${theme.spacings.medium};

    ${media.lessThan('tablet')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall} ${theme.spacings.xxxlarge} ${theme.spacings.xsmall};
      grid-template-areas: "aboutMe";
      grid-template-columns: 1fr;
    `};
  `}
`

export const StackSection = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    user-select: none;
    position: absolute;

    &:first-child {
      left: 700px;
      bottom: -10%;

      ${media.lessThan('tabletlarge')`
          left: 400px;
          bottom: 10%;
        `}
      ${media.lessThan('tablet')`
          left: 200px;
          bottom: 25%;
        `}
    }
    &:last-child {
      right: 600px;
      top: 0;

      ${media.lessThan('tabletlarge')`
          right: 400px;
          top: 600px;
        `};
      ${media.lessThan('tablet')`
          right: 200px;
          top: 0px;
        `}
    }
  }
`

export const StackSectionDelimiter = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};

    padding: ${theme.spacings.medium} ${theme.spacings.medium};

    ${media.lessThan('tablet')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    `};
    grid-area: stack;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};
    font-size: ${theme.font.sizes.msmall};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
    z-index: 2;
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
    height: 100%;

    ${media.lessThan('mobile')`
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

    ${media.lessThan('mobile')`
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

export const ShelfWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const LetsWorkTogetherSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem 0;
    min-height: 300px;
    ${media.lessThan('tablet')`
        min-height: 150px;
      `}

    h4 {
      color: ${theme.colors.primary};
    }
  `}
`

export const LetsWorkTogetherLinkContainer = styled.div`
  display: flex;
  position: relative;
`
export const LetsWorkTogetherText = styled.h1`
  ${({ theme }) => css`
    display: inline-block;
    cursor: pointer;
    color: ${theme.colors.text02};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxxlarge};
    ${media.lessThan('tablet')`
        font-size: ${theme.font.sizes.mediumlarge};
    `}
    text-decoration: none;

    &:hover {
      &::after {
        height: 4px;
        border-bottom: 4px solid ${theme.colors.text02};
        background: 0 0;
        position: absolute;
        display: block;
        top: 80%;
        left: 0;
        width: 100%;
        content: '';
      }
    }
  `}
`

export const ArrowRightIcon = styled(ArrowRightShort)`
  width: 60px;
  ${media.lessThan('tablet')`
      width: 40px;
  `}
`

export const NotebookAndPhoneImage = styled(NotebookAndPhoneImageImport)`
  width: 284px;
  height: 163px;
`
export const ReactIcon = styled(ReactIconImport)`
  width: 90px;
  height: 90px;
`
export const ReactNativeIcon = styled(ReactNativeIconImport)`
  width: 90px;
  height: 90px;
`
export const NodeIcon = styled(NodeIconImport)`
  width: 90px;
  height: 90px;
`
export const TypescriptIcon = styled(TypescriptIconImport)`
  width: 90px;
  height: 90px;
`
export const MongoDBIcon = styled(MongoDBIconImport)`
  width: 90px;
  height: 90px;
`
export const DockerIcon = styled(DockerIconImport)`
  width: 90px;
  height: 90px;
`
export const PostgreSQLIcon = styled(PostgreSQLIconImport)`
  width: 90px;
  height: 90px;
`
export const HtmlIcon = styled(HtmlIconImport)`
  width: 90px;
  height: 90px;
`
export const CssIcon = styled(CssIconImport)`
  width: 90px;
  height: 90px;
`
export const NestIcon = styled(NestImport)`
  width: 90px;
  height: 90px;
`
export const GraphQlIcon = styled(GraphQlImport)`
  width: 90px;
  height: 90px;
`
export const NextIcon = styled(NextImport)`
  width: 90px;
  height: 90px;
`
