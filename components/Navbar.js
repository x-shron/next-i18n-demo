import  styles from './Navbar.module.scss'
import CallIcon from '@mui/icons-material/Call';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import {useState} from 'react'
import { useRouter } from 'next/router'



export  default function Navbar(){
	const {t,i18n}=useTranslation()
	const router=useRouter()
	const [lang, setLang] = useState('zh')
	const  handleChange=(e)=>{
		console.log('12-3-21-3-2-13--',e.target.value=='zh'?"zh-CN":"en-US")
		// router.push({
		// 	pathname:e.target.value=='zh'?"zh-CN":"en-US",
		// })
		i18n.changeLanguage(e.target.value)
		setLang(e.target.value);
	}

	return (
		<div className={`v_h_center ${styles.navbarHead}`}>
				<div className={styles.content}>
					<div className={styles.left}>
							<CallIcon  sx={{color:'#FFF'}}/> <sapn>+123123213213</sapn>
							<span className={styles.space4}/>
							<MailOutlineIcon sx={{color:'#FFF'}}/> <sapn>info@buyanz.com</sapn>
							<span className={styles.space4}/>
							<PersonOutlineIcon sx={{color:'#FFF'}}/>  <sapn>{t('ares')}  {t('log out')}</sapn>
					</div>
						
					<div className={styles.right} >
							{/* <PersonOutlineIcon sx={{color:'#FFF'}}/>  */}
							<Select
								id="demo-simple-select"
								value={lang}
								size='small'
								classes={{
									color:"#fff"
								}}
								onChange={handleChange}
							>
								<MenuItem value='en'>English</MenuItem>
								<MenuItem value='zh'>中文</MenuItem>
							</Select>

							<span className={styles.space4}/>
							<MailOutlineIcon sx={{color:'#FFF'}}/>
							<sapn>info@buyanz.com</sapn>
					</div>
				</div>
		</div>
	)
}   