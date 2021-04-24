import {GetServerSideProps} from 'next'
import Head from 'next/head'
import Me from '../components/Me'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Block from '../components/Block'
import axios, { AxiosResponse } from 'axios'
import { StarredRepo } from '../interfaces'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RepoCard from '../components/RepoCard'
import { RepoLanguages } from '../types'
import { AllRepoLanguages } from '../types/index';
import Technologies from '../components/Technologies'

interface Props {
  repos: StarredRepo[],
  languages: AllRepoLanguages
}

export default function Home({repos, languages}: Props) {
  return (
    <Layout>
      <Head>
        <title>{'<'}Manuel{'/>'}</title>
      </Head>

      <Me />

      <Container>
        <Block title='About me'>
          Egresé de la Univesidad Autónoma de Nuevo León en el año 2021 como lic. en tecnologías de la información.
          Durante la pandemia me dí cuenta de la enorme cantidad de cursos sobre desarrollo de software que podía encontrar 
          en plataformas como Udemy y YouTube.
        </Block>

        <Block title='Technologies'>
          <Technologies />
        </Block>

        <Block title='Pinned repos'>
            <Slider dots={true} infinite={true} slidesToShow={1} slidesToScroll={1} className='py-8 lg:py-24 h-3/5 w-4/5 mx-auto shadow-xl' arrows draggable dotsClass='custom-dot' >
              {repos.map(repo => (
                <RepoCard key={'repocard' + repo.id} repo={repo} languages={languages[repo.name]}/>
              ))}
            </Slider>
        </Block>
      </Container>
    </Layout>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const requestConfig = {
    auth: {
      username: 'manuelrodgzz',
      password: process.env.GITHUB_TOKEN as string
    }
  }

  const gitRes = await axios.get<StarredRepo[]>('https://api.github.com/users/manuelrodgzz/starred', requestConfig)

  const repos = gitRes.data.filter(repo => repo.owner.login === 'manuelrodgzz').reverse()

  const repoLanguagePromises = repos.map(repo => axios.get<RepoLanguages>(repo.languages_url, requestConfig))
  const repoLanguageResponses = await Promise.allSettled(repoLanguagePromises)

  const repoLanguages = repoLanguageResponses.filter(repoLanguage => repoLanguage.status === 'fulfilled') as PromiseFulfilledResult<AxiosResponse<RepoLanguages>>[]

  const repoNameRegex = new RegExp('(?<=manuelrodgzz/).*(?=/)')
  
  const languageEntries = repoLanguages.map(x => [x.value.config.url?.match(repoNameRegex)![0], x.value.data])
  const languages = Object.fromEntries(languageEntries)
  return {
    props: {
      repos,
      languages
    }
  }
}
