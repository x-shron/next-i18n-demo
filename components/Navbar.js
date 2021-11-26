import  styles from './Navbar.module.scss'
import CallIcon from '@mui/icons-material/Call';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export  default function Navbar(){
	return (
		<div className={`v_h_center ${styles.navbarHead}`}>
				<CallIcon sx={{color:'#FFF'}}/>
				<MailOutlineIcon sx={{color:'#FFF'}}/>
				<PersonOutlineIcon sx={{color:'#FFF'}}/> 

		</div>
	)
}   