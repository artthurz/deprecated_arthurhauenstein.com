import type { NextPage } from 'next'
import Head from 'next/head'

import * as S from '@/styles/pages/Home.styles'
import * as Animations from '@/styles/animations'
import { HighlightBox } from '@/components/HighlightBox'
import { Heading } from '@/components/Heading'
import { Card } from '@/components/Card'
import { CardShelf } from '@/components/CardShelf'
import { Achievement, Timeline } from '@/components/Timeline'
import { Space } from '@/components/Space'
import { MediaMatch } from '@/components/MediaMatch'
import useI18N from '@/hooks/usei18n'
import { i18n } from '@/i18n/protocols'

import ReactNativeIcon from '../../public/img/technologies/reactnative.svg'
import ReactIcon from '../../public/img/technologies/react.svg'
import NodeIcon from '../../public/img/technologies/node.svg'
import TypescriptIcon from '../../public/img/technologies/typescript.svg'
import MongoDBIcon from '../../public/img/technologies/mongo.svg'
import DockerIcon from '../../public/img/technologies/docker.svg'
import PostgreSQLIcon from '../../public/img/technologies/postgresql.svg'

const achievements = (i18n: i18n): Achievement[] => [
  {
    date: new Date('2021-08-07T00:00:00'),
    title: i18n.t('graduation_sad_conclusion'),
    description: i18n.t('graduation_sad_conclusion_description'),
    tag: 'academic'
  },
  {
    date: new Date('2021-04-19T00:00:00'),
    title: i18n.t('job_cbyk'),
    description: i18n.t('job_cbyk_description'),
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
  <Card key="react" shadowColor="#61D9FA">
    <ReactIcon height={120} width={120} alt="React" />
  </Card>,
  <Card key="node" shadowColor="#408F3B">
    <NodeIcon height={120} width={120} alt="Node JS" />
  </Card>,
  <Card key="reactnative" shadowColor="#9261FB">
    <ReactNativeIcon height={120} width={120} alt="React Native" />
  </Card>,
  <Card key="typescript" shadowColor="#01ADD7">
    <TypescriptIcon height={90} width={90} alt="Typescript" />
  </Card>,
  <Card key="mongo" shadowColor="#419842">
    <MongoDBIcon height={120} width={120} alt="Mongo DB" />
  </Card>,
  <Card key="docker" shadowColor="#ffffff">
    <DockerIcon height={120} width={120} alt="Docker" />
  </Card>,
  <Card key="postgresql" shadowColor="#2D6294">
    <PostgreSQLIcon height={90} width={90} alt="PostgreSQL" />
  </Card>
]

const Home: NextPage = () => {
  const i18n = useI18N()
  return (
    <S.Wrapper>
      <Head>
        <title>Arthur Hauenstein</title>
      </Head>

      <S.InfoGroup>
        <S.Job data-aos="slide-right" {...Animations.baseAosAnimation}>
          {i18n.t('fullstack')}
        </S.Job>
        <S.PresentationWrapper>
          <S.Presentation>{i18n.t('presentation')}</S.Presentation>
        </S.PresentationWrapper>
        <S.Description data-aos="fade-up" {...Animations.baseAosAnimation}>
          {i18n.t('presentation_description')}
        </S.Description>
      </S.InfoGroup>

      <S.HighlightGroup>
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

      <S.MediaGroup
        data-aos="fade-up"
        data-aos-offset="50"
        {...Animations.baseAosAnimation}
      >
        <S.Photo
          src="/img/me/arthur_front.png"
          alt={i18n.t('arthur_front_alt')}
          width={521}
          height={694}
        />
      </S.MediaGroup>

      <S.AboutMe>
        <Heading
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
          <MediaMatch display="flex" greaterThan="medium">
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

      <S.Stack>
        <Heading data-aos="slide-right" {...Animations.baseAosAnimation}>
          {i18n.t('my_stack')}
        </Heading>
        <Space stars={20}>
          <S.ShelfWrapper data-aos="fade-up" {...Animations.baseAosAnimation}>
            <CardShelf cards={technologies} />
          </S.ShelfWrapper>
        </Space>
      </S.Stack>
    </S.Wrapper>
  )
}
export default Home
