import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import * as S from '@/styles/pages/Home.styles'
import * as Animations from '@/styles/animations'
import { HighlightBox } from '@/components/HighlightBox'
import { Heading } from '@/components/Heading'
import { Card } from '@/components/Card'
import { CardShelf } from '@/components/CardShelf'
import { Achievement, Timeline } from '@/components/Timeline'
import { MediaMatch } from '@/components/MediaMatch'
import useI18N from '@/hooks/usei18n'
import { i18n } from '@/i18n/protocols'

const achievements = (i18n: i18n): Achievement[] => [
  {
    date: new Date('2021-10-25T00:00:00'),
    title: i18n.t('job_btg'),
    description: i18n.t('job_btg_description'),
    tag: 'professional'
  },
  {
    date: new Date('2021-09-13T00:00:00'),
    title: i18n.t('course_nestjs'),
    description: i18n.t('course_nestjs_description'),
    tag: 'education'
  },
  {
    date: new Date('2021-08-07T00:00:00'),
    title: i18n.t('graduation_sad_conclusion'),
    description: i18n.t('graduation_sad_conclusion_description'),
    tag: 'academic'
  },
  {
    date: new Date('2021-04-19T00:00:00'),
    title: i18n.t('job_crefisa'),
    description: i18n.t('job_crefisa_description'),
    tag: 'professional'
  },
  {
    date: new Date('2021-04-02T00:00:00'),
    title: i18n.t('course_rocketseat_ignite_react'),
    description: i18n.t('course_rocketseat_ignite_react_description'),
    tag: 'education'
  },
  {
    date: new Date('2021-04-02T00:00:00'),
    title: i18n.t('course_rocketseat_ignite_reactnative'),
    description: i18n.t('course_rocketseat_ignite_reactnative_description'),
    tag: 'education'
  },
  {
    date: new Date('2021-04-02T00:00:00'),
    title: i18n.t('course_rocketseat_ignite_node'),
    description: i18n.t('course_rocketseat_ignite_node_description'),
    tag: 'education'
  },

  {
    date: new Date('2021-01-21T00:00:00'),
    title: i18n.t('job_bimachine'),
    description: i18n.t('job_bimachine_description'),
    tag: 'professional'
  },
  {
    date: new Date('2020-07-14T00:00:00'),
    title: i18n.t('graduation_sad'),
    description: i18n.t('graduation_sad_description'),
    tag: 'academic'
  },
  {
    date: new Date('2019-06-19T00:00:00'),
    title: i18n.t('course_rocketseat_bootcamp'),
    description: i18n.t('course_rocketseat_bootcamp_description'),
    tag: 'education'
  },
  {
    date: new Date('2019-06-03T00:00:00'),
    title: i18n.t('course_rocketseat_nextlevelweek'),
    description: i18n.t('course_rocketseat_nextlevelweek_description'),
    tag: 'education'
  },
  {
    date: new Date('2016-10-06T00:00:00'),
    title: i18n.t('event_criexp'),
    description: i18n.t('event_criexp_description'),
    tag: 'event'
  },
  {
    date: new Date('2016-08-16T00:00:00'),
    title: i18n.t('job_fruki'),
    description: i18n.t('job_fruki_description'),
    tag: 'professional'
  },
  {
    date: new Date('2016-02-22T00:00:00'),
    title: i18n.t('graduation_software_engineering'),
    description: i18n.t('graduation_software_engineering_description'),
    tag: 'academic'
  }
]

const technologies: React.ReactNode[] = [
  <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
    <S.TypescriptIcon alt="Typescript" />
  </Card>,
  <Card key="react" shadowColor="#61D9FA" title="React">
    <S.ReactIcon alt="React" />
  </Card>,
  <Card key="next" shadowColor="#eee" title="Next.js">
    <S.NextIcon alt="Next" />
  </Card>,
  <Card key="reactnative" shadowColor="#9261FB" title="React Native">
    <S.ReactNativeIcon alt="React Native" />
  </Card>,
  <Card key="node" shadowColor="#408F3B" title="Node">
    <S.NodeIcon alt="Node" />
  </Card>,
  <Card key="nest" shadowColor="#E93333" title="NestJS">
    <S.NestIcon alt="NestJS" />
  </Card>,
  <Card key="html" shadowColor="#E44E28" title="HTML">
    <S.HtmlIcon alt="HTML" />
  </Card>,
  <Card key="css" shadowColor="#2B51E5" title="CSS">
    <S.CssIcon alt="CSS" />
  </Card>,
  <Card key="postgresql" shadowColor="#2D6294" title="PostgreSQL">
    <S.PostgreSQLIcon alt="PostgreSQL" />
  </Card>,
  <Card key="mongo" shadowColor="#419842" title="MongoDB">
    <S.MongoDBIcon alt="MongoDB" />
  </Card>,
  <Card key="docker" shadowColor="#ffffff" title="Docker">
    <S.DockerIcon alt="Docker" />
  </Card>
]

const Home: NextPage = () => {
  const i18n = useI18N()
  return (
    <S.Wrapper>
      <Head>
        <title>Arthur Hauenstein</title>
      </Head>
      <S.IntroductionSection>
        <S.IntroductionSectionDelimiter>
          <S.InfoGroup>
            <S.Job data-aos="slide-left" {...Animations.baseAosAnimation}>
              {i18n.t('fullstack')}
            </S.Job>
            <S.PresentationWrapper>
              <S.Presentation>
                {i18n.t('presentation')}
                <span> Arthur</span>
              </S.Presentation>
            </S.PresentationWrapper>
            <S.Description data-aos="fade-up" {...Animations.baseAosAnimation}>
              {i18n.t('presentation_description')}
            </S.Description>
          </S.InfoGroup>

          <S.HighlightGroup data-aos="fade-up" {...Animations.baseAosAnimation}>
            <HighlightBox
              primaryText="+5"
              secondaryText={i18n.t('years_experience')}
            />
            <HighlightBox
              primaryText="5"
              secondaryText={i18n.t('completed_courses')}
            />
            <HighlightBox
              primaryText="+10"
              secondaryText={i18n.t('projects_developed')}
            />
          </S.HighlightGroup>
        </S.IntroductionSectionDelimiter>
        <S.PhotoContainer
          data-aos="fade-up"
          data-aos-offset="50"
          {...Animations.baseAosAnimation}
        />
      </S.IntroductionSection>

      <S.AboutMeSection>
        <S.AboutMeSectionDelimiter>
          <S.AboutMe>
            <Heading
              textColor="#fff"
              data-aos="slide-right"
              data-aos-offset="10"
              {...Animations.baseAosAnimation}
              data-aos-duration="1000"
            >
              {i18n.t('about_me')}
            </Heading>
            <S.AboutMeContentWrapper>
              <S.HistoryWrapper>
                <S.History>
                  <S.Paragraph
                    data-aos="slide-right"
                    {...Animations.baseAosAnimation}
                  >
                    {i18n.t('about_me_history_1')}
                  </S.Paragraph>

                  <S.Paragraph
                    data-aos="slide-right"
                    {...Animations.baseAosAnimation}
                  >
                    {i18n.t('about_me_history_2')}
                  </S.Paragraph>

                  <S.Paragraph
                    data-aos="slide-right"
                    {...Animations.baseAosAnimation}
                  >
                    {i18n.t('about_me_history_3')}
                  </S.Paragraph>
                </S.History>
              </S.HistoryWrapper>
              <MediaMatch display="flex" greaterThan="tablet">
                <S.TimelineWrapper>
                  <Timeline
                    data-aos="zoom-in-left"
                    {...Animations.baseAosAnimation}
                    achievements={achievements(i18n)}
                  />
                </S.TimelineWrapper>
              </MediaMatch>
            </S.AboutMeContentWrapper>
          </S.AboutMe>
        </S.AboutMeSectionDelimiter>
      </S.AboutMeSection>

      <S.StackSection>
        <img src="/img/homePage/circle-blur.svg" alt="Circle blur" />
        <S.StackSectionDelimiter>
          <Heading
            data-aos="slide-right"
            data-aos-offset="10"
            {...Animations.baseAosAnimation}
            data-aos-duration="1000"
          >
            {i18n.t('my_stack')}
          </Heading>
          <S.ShelfWrapper
            data-aos="zoom-in-left"
            {...Animations.baseAosAnimation}
            data-aos-duration="1000"
          >
            <CardShelf cards={technologies} />
          </S.ShelfWrapper>
        </S.StackSectionDelimiter>
        <img src="/img/homePage/circle-blur.svg" alt="Circle blur" />
      </S.StackSection>

      <S.LetsWorkTogetherSection>
        <h4 data-aos="fade-down" {...Animations.baseAosAnimation}>
          {i18n.t('need_a_developer')}
        </h4>
        <S.LetsWorkTogetherLinkContainer
          data-aos="slide-right"
          data-aos-offset="10"
          {...Animations.baseAosAnimation}
          data-aos-duration="1000"
        >
          <Link
            href="/contact"
            passHref
            data-aos="slide-right"
            data-aos-offset="10"
            {...Animations.baseAosAnimation}
            data-aos-duration="1000"
          >
            <S.LetsWorkTogetherText>
              {i18n.t('lets_work_together')} <S.ArrowRightIcon />
            </S.LetsWorkTogetherText>
          </Link>
        </S.LetsWorkTogetherLinkContainer>
      </S.LetsWorkTogetherSection>
    </S.Wrapper>
  )
}

export default Home
