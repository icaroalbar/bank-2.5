import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'nav',
      ])),
    },
  }
}


const Home: NextPage = () => {

  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{t('title')}</h1>
    </>
  )
}

export default Home
