import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Link from 'next/link'

export default  function post(){
    return (
        <div style={{width:'100%',margin:'30px auto'}}>
           <Stack spacing={{xs: 1, sm: 2, md: 10}} direction='row' justifyContent='center'>
                <Link href='/'>
                    <Button onClick={()=>{}} variant='outlined' color='success' size='small'>
                        返回上级
                    </Button> 
                </Link>
               <Button variant="contained" color='primary' size='small'>
                劳动力塑料袋
                </Button>     
                <Button variant='outlined' color='success' size='small'>
                    劳动力塑料袋
                </Button> 
           </Stack>
              
        </div>
    )
}