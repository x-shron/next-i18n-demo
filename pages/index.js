import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router' 
import Grid from '@mui/material/Grid';
import { useTranslation, Trans, Translation }  from 'react-i18next' 
import { useEffect } from 'react'


export default function Home() {
  const {t,i18n}=useTranslation()
  const router=useRouter()
  console.log(`router:`, router)
  
  const changeLang=()=>{
    i18n.changeLanguage(i18n.language=='en'?'zh':'en')
  }

  useEffect(() => {
    i18n.changeLanguage(router.locale)
  }, [])

  return (
    <div style={{marginLeft:'310px'}}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>TEST i18n</h1>
      <div style={{padding:'40px'}}>
        {t('home')}
        -------
        <Trans>welcome</Trans>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={8} style={{padding:'10px  40px'}}>
         {t('welcome')}
        </Grid>
        <Grid item xs={4}>
            <Button onClick={changeLang} color='success' variant="contained" size='small'>
                {t('confirm')}
            </Button> 
        </Grid>
      </Grid>
    </div>
  )
}
